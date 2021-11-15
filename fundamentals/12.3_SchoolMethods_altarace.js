const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
  findPerson: function (category, id) {
    return this[category].find(function (el) {
      return el.id === id;
    });
  },
  assignStudent: function (subject, id) {
    this.teachers.subject.find(function (el) {
      if (el === subject) {
        console.log("match");
      }
    });
  },
};

console.log(school.findPerson("teachers", 1));
console.log(school.assignStudent("history", 10));
