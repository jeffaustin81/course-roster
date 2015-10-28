describe('CoursesController test', function() {
  beforeEach(module('courseRoster'));

  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('assigns a course to CoursesController', function() {
    var course = { name: "PHP/JavaScript/Drupal", id: 1, students: [] };
    var $scope = {};
    var controller = $controller('CoursesCtrl', { $scope: $scope });
    $scope.course = course;
    expect($scope.course.name).toBe("PHP/JavaScript/Drupal");
  })
});

describe('StudentsController test', function() {
  beforeEach(module('courseRoster'));

  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('adds a student using the method .addStudent()', function() {
    var course = { name: "PHP/JavaScript/Drupal", id: 1, students: [] };
    var $scope = {};
    var controller = $controller('StudentsCtrl', { $scope: $scope });
    $scope.course = course;
    $scope.studentName = "Jeff";
    $scope.addStudent();

    expect($scope.course.students[0].name).toBe("Jeff");
  });
});