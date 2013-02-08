'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['d3js.directive']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/areachart', {templateUrl: 'partials/areachart.html', controller: AreachartCtrl});
    $routeProvider.when('/linechart', {templateUrl: 'partials/linechart.html', controller: LinechartCtrl});
    $routeProvider.when('/bivariateareachart', {templateUrl: 'partials/bivariateareachart.html', controller: BivariateareachartCtrl});
    $routeProvider.when('/multiserieslinechart', {templateUrl: 'partials/multiserieslinechart.html', controller: MultiserieslinechartCtrl});
    $routeProvider.when('/stackedareachart', {templateUrl: 'partials/stackedareachart.html', controller: StackedareachartCtrl});
    $routeProvider.when('/barchart', {templateUrl: 'partials/barchart.html', controller: BarchartCtrl});
    $routeProvider.when('/stackedbarchart', {templateUrl: 'partials/stackedbarchart.html', controller: StackedbarchartCtrl});
    $routeProvider.when('/normalizedstackedbarchart', {templateUrl: 'partials/normalizedstackedbarchart.html', controller: NormalizedstackedbarchartCtrl});
    $routeProvider.when('/groupedbarchart', {templateUrl: 'partials/groupedbarchart.html', controller: GroupedbarchartCtrl});
    $routeProvider.when('/scatterplot', {templateUrl: 'partials/scatterplot.html', controller: ScatterplotCtrl});
    $routeProvider.when('/donutchart', {templateUrl: 'partials/donutchart.html', controller: DonutchartCtrl});
    $routeProvider.when('/piechart', {templateUrl: 'partials/piechart.html', controller: PiechartCtrl});
    $routeProvider.when('/donutmultiples', {templateUrl: 'partials/donutmultiples.html', controller: DonutmultiplesCtrl});
    $routeProvider.when('/barchartwithnegativevalues', {templateUrl: 'partials/barchartwithnegativevalues.html', controller: BarchartwithnegativevaluesCtrl});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
