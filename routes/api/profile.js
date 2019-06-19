const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Profile = require("../../model/Profile");

// @route   GET api/profile
// @desc    Get current users profile
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id })
      .populate("user", ["name", "avatar"])
      .then(profile => {
        if (!profile) {
          // errors.noprofile = ;
          return res.json({
            message: "There is no profile for this user",
            data: null
          });
        }
        res.json({ message: "User Profile", data: profile });
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route   POST api/profile
// @desc    Create or edit user profile
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const profileField = {};
    profileField.user = req.user.id;
    if (req.body.bio) profileField.bio = req.body.bio;
    if (req.body.name) profileField.name = req.body.name;
    if (req.body.school) profileField.school = req.body.school;
    if (req.body.year) profileField.year = req.body.year;
    // const education = {};
    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileField },
          { new: true }
        ).then(profile =>
          res.json({ message: "Profile updated successfully", data: profile })
        );
      } else {
        new Profile(profileField)
          .save()
          .then(profile =>
            res.json({ message: "Profile created successfully", data: profile })
          );
      }
    });
  }
);

router.post(
  "/subjects",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { student } = req.body;
    // console.log(student.student);
    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile && !profile.credential.length) {
        profile.credential = req.body;
        // console.log(profile.credential);
        profile.save().then(profile => res.json(profile));
      } else if (profile && profile.credential.length) {
        profile.credential = student;
        profile.save().then(profile =>
          res.status(201).json({
            message: "Credentials updated successfully",
            data: profile.credential
          })
        );
      } else {
        return res
          .status(400)
          .json({ message: "this user has no profile", data: null });
      }
    });
  }
);

module.exports = router;
