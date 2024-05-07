var details = {
    data: [],
    addStudent: function (nam, math, sci, eng) {
      var obj = {};
      obj.name = nam;
      obj.maths = math;
      obj.science = sci;
      obj.english = eng;
  
      this.data.push(obj);
    },
    lowScore: function () {
      var pad_min = Infinity;
      var lowStudent;
      for (var i = 0; i < this.data.length; i++) {
        // console.log(this.data[i]);
        var current = this.data[i];
        var total = current.maths + current.science + current.english;
        console.log(total);
        if (total < pad_min) {
          pad_min = total;
          lowStudent = current;
        }
      }
      console.log(lowStudent);
    },
  };
  
  details.addStudent("priya", 10, 50, 30);
  details.addStudent("ram", 15, 35, 40);
  details.addStudent("ramu", 23, 8, 41);
  details.addStudent("raml", 22, 50, 40);
  // console.log(details.data);
  
  details.lowScore();