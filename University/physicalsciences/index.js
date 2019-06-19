const dept = [
  "Computer Science",
  "Chemistry",
  "Geology",
  "Mathematics",
  "Physics",
  "Statistics"
];
module.exports = dept.map(data => ({
  dept: data,
  minimumGrade: "C",
  subjects: {
    mathematics: "C",
    english: "C",
    physics: "C",
    chemistry: "C",
    biology: "C"
  }
}));
