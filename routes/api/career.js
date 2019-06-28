const express = require("express");
const router = express.Router();
const passport = require("passport");

const Profile = require("../../model/Profile");
const Career = require("../../model/Careers");

// @route   GET api/career
// @desc    Get current users career
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      // res.json(profile);
      if (profile) {
        const credential = profile.credential;
        const subjects = credential.subjects;

        if (credential.area === "science") {
          const subjectsPassed = [];
          const scienceDepartment = [];
          for (let i = 0; i < subjects.length; i++) {
            if (subjects[i].grade <= "c") {
              subjectsPassed.push(subjects[i].name);
            }
          }

          if (
            subjectsPassed.includes("mathematics") &&
            subjectsPassed.includes("english")
          ) {
            if (
              subjectsPassed.includes("physics") &&
              subjectsPassed.includes("chemistry") &&
              subjectsPassed.includes("biology")
            ) {
              scienceDepartment.push(
                {
                  name: "Medical Laboratory Science",
                  description: "What this department does",
                  faculty: " HEALTH SCIENCES"
                },
                {
                  name: "Medical Medical Radiography",
                  description: "What this department does",
                  faculty: " HEALTH SCIENCES"
                },
                {
                  name: "Medical Rehabilitation",
                  description: "What this department does",
                  faculty: " HEALTH SCIENCES"
                },
                {
                  name: "Nursing Sciences",
                  description: "What this department does",
                  faculty: " HEALTH SCIENCES"
                },
                {
                  name: "Dentistry",
                  description: "What this department does",
                  faculty: " HEALTH SCIENCES"
                },
                {
                  name: "Anatomy",
                  description: "What this department does",
                  faculty: " HEALTH SCIENCES"
                },
                {
                  name: "Physiology",
                  description: "What this department does",
                  faculty: " HEALTH SCIENCES"
                }
              );
            }
            if (
              subjectsPassed.includes("physics") &&
              subjectsPassed.includes("chemistry") &&
              (subjectsPassed.includes("agricultural science") ||
                subjectsPassed.includes("biology") ||
                subjectsPassed.includes("geography") ||
                subjectsPassed.includes("Further mathematics "))
            ) {
              scienceDepartment.push(
                {
                  name: "Agric and Bioresources Engineering",
                  description: "What this department does",
                  faculty: "Engineering"
                },
                {
                  name: "Civil Engineering",
                  description: "What this department does",
                  faculty: "Engineering"
                },
                {
                  name: "Electrical Engineering",
                  description: "What this department does",
                  faculty: "Engineering"
                },
                {
                  name: "Electronic Engineering",
                  description: "What this department does",
                  faculty: "Engineering"
                },
                {
                  name: "Mechanical Engineering",
                  description: "What this department does",
                  faculty: "Engineering"
                },
                {
                  name: "Metallurgical and Material Engineering",
                  description: "What this department does",
                  faculty: "Engineering"
                },
                {
                  name: "Mathematics",
                  description: "What this department does",
                  faculty: " Physical Sciences"
                },
                {
                  name: "Geology",
                  description: "What this department does",
                  faculty: "Physical Sciences"
                },
                {
                  name: "Computer Science",
                  description: "What this department does",
                  faculty: " Physical Sciences"
                },
                {
                  name: "Pure and Industrial Chemistry",
                  description: "What this department does",
                  faculty: " Physical Sciences"
                },
                {
                  name: "Physics and Astronomy",
                  description: "What this department does",
                  faculty: " Physical Sciences"
                },
                {
                  name: "Statistics",
                  description: "What this department does",
                  faculty: " Physical Sciences"
                }
              );
            }
            if (
              subjectsPassed.includes("chemistry") &&
              subjectsPassed.includes("physics") &&
              subjectsPassed.includes("biology")
            ) {
              scienceDepartment.push(
                {
                  name: "Biochemistry",
                  description: "What this department does",
                  faculty: " BIOLOGICAL SCIENCES"
                },
                {
                  name: "Microbiology",
                  description: "What this department does",
                  faculty: " BIOLOGICAL SCIENCES"
                },
                {
                  name: "Plant science and biotechnology",
                  description: "What this department does",
                  faculty: " BIOLOGICAL SCIENCES"
                },
                {
                  name: "Zoology and environmental biology",
                  description: "What this department does",
                  faculty: " BIOLOGICAL SCIENCES"
                }
              );
            }
            if (
              subjectsPassed.includes("chemistry") &&
              (subjectsPassed.includes("agricultural science") ||
                subjectsPassed.includes("biology")) &&
              (subjectsPassed.includes("physics") ||
                subjectsPassed.includes("economics"))
            ) {
              scienceDepartment.push(
                {
                  name: "Agriculture Economics",
                  description: "What this department does",
                  faculty: " AGRICULTURE"
                },
                {
                  name: "Agriculture Extension",
                  description: "What this department does",
                  faculty: " AGRICULTURE"
                },
                {
                  name: "Animal Science",
                  description: "What this department does",
                  faculty: " AGRICULTURE"
                },
                {
                  name: "Soil Science",
                  description: "What this department does",
                  faculty: " AGRICULTURE"
                },
                {
                  name: "Crop Science",
                  description: "What this department does",
                  faculty: " AGRICULTURE"
                }
              );
            }
          }

          if (scienceDepartment.length || subjectsPassed.length) {
            return res.json({
              message: "List of possible Course you can study",
              data: scienceDepartment,
              subjectsPassed
            });
          } else {
            return res.json({
              message: "You Can't Study any course",
              data: null
            });
          }
        } else if (credential.area === "art") {
          const subjectsPassed = [];
          const artDepartment = [];
          for (let i = 0; i < subjects.length; i++) {
            if (subjects[i].grade <= "c") {
              subjectsPassed.push(subjects[i].name);
            }
          }

          if (
            subjectsPassed.includes("mathematics") &&
            subjectsPassed.includes("geography") &&
            ((subjectsPassed.includes("physics") &&
              subjectsPassed.includes("chemistry")) ||
              (subjectsPassed.includes("economics") &&
                subjectsPassed.includes("government")) ||
              (subjectsPassed.includes("biology") &&
                subjectsPassed.includes("art")) ||
              (subjectsPassed.includes("history") &&
                subjectsPassed.includes("social studies")))
          ) {
            artDepartment.push(
              {
                name: "Urban and Regional Planning",
                description: "What this department does",
                faculty: "ENVIRONMENTAL STUDIES"
              },
              {
                name: "Architecture",
                description: "What this department does",
                faculty: "ENVIRONMENTAL STUDIES"
              },
              {
                name: "Geoinformatics and Surveying",
                description: "What this department does",
                faculty: "ENVIRONMENTAL STUDIES"
              },
              {
                name: "Law",
                description: "What this department does",
                faculty: "Law"
              },
              {
                name: "Accountancy",
                description: "What this department does",
                faculty: "BUSINESS MANAGEMENT"
              },
              {
                name: "Marketing",
                description: "What this department does",
                faculty: "BUSINESS MANAGEMENT"
              },
              {
                name: "Banking and Finance",
                description: "What this department does",
                faculty: "BUSINESS MANAGEMENT"
              },
              {
                name: "Management",
                description: "What this department does",
                faculty: "BUSINESS MANAGEMENT"
              }
            );
          }

          if (subjectsPassed.length >= 5 && subjectsPassed.includes("music")) {
            artDepartment.push({
              name: "Music",
              description: "What this department does",
              faculty: "ARTS"
            });
          }

          if (
            subjectsPassed.includes("literature in english") &&
            subjectsPassed.includes("government") &&
            subjectsPassed.includes("mathematics")
          ) {
            artDepartment.push({
              name: "Mass Communication",
              description: "What this department does",
              faculty: "ARTS"
            });
          }

          if (
            subjectsPassed.length >= 5 &&
            (subjectsPassed.includes("geography") &&
              (subjectsPassed.includes("government") ||
                subjectsPassed.includes("history")))
          ) {
            artDepartment.push({
              name: "History and International Studies",
              description: "What this department does",
              faculty: "ARTS"
            });
          }
          if (
            subjectsPassed.length >= 5 &&
            (subjectsPassed.includes("religious studies") ||
              subjectsPassed.includes("geography") ||
              subjectsPassed.includes("history") ||
              subjectsPassed.includes("economics"))
          ) {
            artDepartment.push({
              name: "Archaeology and Tourism",
              description: "What this department does",
              faculty: "ARTS"
            });
          }

          if (
            subjectsPassed.length >= 5 &&
            subjectsPassed.includes("literature in english")
          ) {
            artDepartment.push({
              name: "English and Literary Studies",
              description: "What this department does",
              faculty: "ARTS"
            });
          }

          if (
            subjectsPassed.length >= 5 &&
            subjectsPassed.includes("fine arts")
          ) {
            artDepartment.push(
              {
                name: "Fine and Applied Art",
                description: "What this department does",
                faculty: "ARTS"
              },
              {
                name: "Theater and Film Studies",
                description: "What this department does",
                faculty: "ARTS"
              }
            );
          }

          if (
            subjectsPassed.length >= 5 &&
            (subjectsPassed.includes("igbo") ||
              subjectsPassed.includes("yoruba") ||
              subjectsPassed.includes("hausa"))
          ) {
            artDepartment.push({
              name: "Linguistics, Igbo and Other Nigerian Languages",
              description: "What this department does",
              faculty: "ARTS"
            });
          }

          if (artDepartment.length || subjectsPassed.length) {
            return res.json({
              message: "List of possible Course you can study",
              data: artDepartment,
              subjectsPassed
            });
          } else {
            return res.json({
              message: "You Can't Study any course",
              data: null
            });
          }
        } else {
          res
            .status(404)
            .json({ message: "Please Choose An Area Science or Arts" });
        }
      }
    });
  }
);

// @route   Post api/career/code/:riasec_code
// @desc    Get a user's Career
// @access  Private
router.get(
  "/code/:riasec",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const code = req.params.riasec;
    const careers = [];
    if (code) {
      Career.find({}).then(career => {
        const test = career[0].career;

        for (let i = 0; i < test.length; i++) {
          if (test[i].code === code) {
            careers.push(test[i]);
          }
        }
        res.json(careers);
      });
    } else {
      res.status(400).json("NO params");
    }
  }
);

// @route   Post api/career
// @desc    Post All users Career
// @access  Private

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.user.admin) {
      if (req.body) {
        return new Career(req.body)
          .save()
          .then(ca => res.json(ca))
          .catch(err => res.status(400).json(err));
      }
    } else {
      return res.status(401).json("Unauthorized");
    }
  }
);
module.exports = router;
