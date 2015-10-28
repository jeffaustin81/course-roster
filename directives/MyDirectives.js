courseRoster.directive('sampleCourse', function() {
  return {

    restrict:"E",
    replace: true,
    template: "<span>Sailing</span>"

  };
});

courseRoster.directive('aGreatEye', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<h1>lidless, wreathed in flame, {{1 + 1}} times</h1>'
    };
});

courseRoster.directive("hometext", function() {
    return {
        template: "Back to the beginning"
    };
});

courseRoster.directive("changeClass", function() {
    return function (scope, element, attrs) {
        element.bind("click", function() {
            element.toggleClass(attrs.changeClass);
        });
    };
});
