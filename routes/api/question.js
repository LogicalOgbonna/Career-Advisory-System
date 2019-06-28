const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load Question Model
const Question = require("../../model/Questions");

// @route   GET api/questions
// @desc    Get All Questions
// @access  Public
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // res.json("hey");
    Question.find({}).then(questions => {
      if (questions.length) {
        return res.json({ message: "All Question", questions });
      } else {
        return res
          .status(400)
          .json({ message: "No Question for You", data: null });
      }
    });
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Question.find({}).then(questions => {
      // if (questions.length) {
      //   questions.push(question);

      //   question.save().then(resutl => res.json({message: "updatad ",resutl}))
      //   res.json(question);
      // } else {
      const newQuestion = new Question();

      newQuestion.questions = req.body;
      newQuestion
        .save()
        .then(data =>
          res.json({ message: "Questions Added Successfully", data })
        )
        .catch(err => res.json(err));
      // }
    });
  }
);
module.exports = router;
