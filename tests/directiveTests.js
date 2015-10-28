describe("sampleCourse Directive test", function() {
  var element, scope;

  // Load the app module
  beforeEach(module('courseRoster'));

  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function($compile, $rootScope) {
    // The injector unwraps the underscores (_) from around
    // the parameter names when matching
    element = angular.element("<sample-course></sample-course>");
    scope = $rootScope.$new();
    $compile(element)(scope);
    scope.$digest();
  }));

  it("directive sampleCourse returns a div with Sailing inside", function() {
    expect(element.text()).toBe("Sailing");
  });
});

describe('aGreatEye directive test', function() {
  var element, scope;

  // Load the app module
  beforeEach(module('courseRoster'));

  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function($compile, $rootScope) {
    // The injector unwraps the underscores (_) from around
    // the parameter names when matching
    element = angular.element("<a-great-eye></a-great-eye>");
    scope = $rootScope.$new();
    $compile(element)(scope);
    scope.$digest();
  }));

  it('element contains "lidless, wreathed in flame, 2 times"', function() {
    expect(element.text()).toBe("lidless, wreathed in flame, 2 times");
  });
});

describe("hometext Directive test", function() {
  var element, scope;

  // Load the app module
  beforeEach(module('courseRoster'));

  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function($compile, $rootScope) {
    // The injector unwraps the underscores (_) from around
    // the parameter names when matching
    element = angular.element("<hometext></hometext>");
    scope = $rootScope.$new();
    $compile(element)(scope);
    scope.$digest();
  }));

  it("is a directive that returns 'Back to the beginning'", function() {
    expect(element.text()).toBe("Back to the beginning");
  });
});

describe("changeClass Directive test", function() {
  var element, scope;

  // Load the app module
  beforeEach(module('courseRoster'));

  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function($compile, $rootScope) {
    // The injector unwraps the underscores (_) from around
    // the parameter names when matching
    element = angular.element("<change-class></change-class>");
    scope = $rootScope.$new();
    $compile(element)(scope);
    scope.$digest();
  }));

  it("is a directive that toggles classes on element with the attribute change-class", function() {
    element.triggerHandler('click');
    expect(element.class("bg-danger text-danger text-center")).toBe(true);
  });
});