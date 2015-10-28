var courseRoster = angular.module('courseRoster', ['ui.router', 'ngMock']);

courseRoster.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: "partials/header.html",
        controller: 'HeadersCtrl'
      },
      'body': {
        templateUrl: "partials/home.html",
      },
    }
  });

  $stateProvider.state('courses', {
    url: "/courses",
    views: {
      'header': {
        templateUrl: "partials/header.html",
        controller: 'HeadersCtrl'
      },
      'body': {
        templateUrl: "partials/courses.html",
        controller: 'CoursesCtrl'
      },
    }
  });

  $stateProvider.state('courses.students', {
    url: "/:courseId",
    views: {
      'header': {
        templateUrl: "partials/header.html",
        controller: 'HeadersCtrl'
      },
      'body': {
        templateUrl: "partials/courses.students.html",
        controller: 'StudentsCtrl'
      },
    }
  });
});