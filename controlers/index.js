const physicalSciencies = require("../model/Physical-Science");

exports.general = (req, res, next) => {
  const subjects = req.body.upload;

  if (subjects.area.toLowerCase() === "science") {
    console.log(subjects.physics.toLowerCase());
    physicalSciencies
      .find({})
      .then(result => {
        console.log(result[0].minimumGrade.toLowerCase());
        if (
          subjects.mathematics.toLowerCase() <=
            result[0].minimumGrade.toLowerCase() &&
          subjects.english.toLowerCase() <=
            result[0].minimumGrade.toLowerCase() &&
          subjects.physics.toLowerCase() <= result[0].minimumGrade.toLowerCase()
        ) {
          if (
            (subjects.chemistry.toLowerCase() <=
              result[0].minimumGrade.toLowerCase() &&
              subjects.biology.toLowerCase() <=
                result[0].minimumGrade.toLowerCase()) ||
            (subjects.agriculture.toLowerCase() <=
              result[0].minimumGrade.toLowerCase() &&
              subjects.chemistry.toLowerCase() <=
                result[0].minimumGrade.toLowerCase()) ||
            (subjects.agriculture.toLowerCase() <=
              result[0].minimumGrade.toLowerCase() &&
              subjects.biology.toLowerCase() <=
                result[0].minimumGrade.toLowerCase())
          ) {
            res.json({ message: "You can study computer science" });
          }
        }
        res.json({ message: "You can't study computer science" });
      })
      .catch(err => res.status(400).json(err));
  }
  if (subjects.area.toLowerCase() === "arts") {
    model
      .find({})
      .then(result => res.json(result))
      .catch(err => res.status(400).json(err));
  }
  if (subjects.area.toLowerCase() === "commercial") {
    console.log("commercial");
  }
};
