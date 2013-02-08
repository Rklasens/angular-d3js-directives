/*
    Angularjs directives to use d3js basic charts.

    Implemented directives:
        
     - AreaChart
     - LineChart
     - BivariateAreaChart
     - Multi-SeriesLineChart
     - StackedAreaChart
     - BarChart
     - StackedBarChart
     - NormalizedStackedBarChart
     - GroupedBarChart
     - Scatterplot
     - DonutChart
     - PieChart
     - DonutMultiples
     - BarChartwithNegative Values
        

    To see some examples: https://github.com/mbostock/d3/wiki/Gallery
*/

var d3js = angular.module('d3js.directive', []);

d3js.directive('areachart', function ( /* dependencies */ ) {
  // define constants and helpers used for the directive
  // ...
  return {
    restrict: 'E', // the directive can be invoked only by using  tag in the template
    scope: { // attributes bound to the scope of the directive
      val: '='
    },
    link: function (scope, element, attrs) {
        var data_url = attrs['tsv'];

        var margin = {top: 20, right: 20, bottom: 30, left: 50},
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var parseDate = d3.time.format("%d-%b-%y").parse;

        var x = d3.time.scale()
            .range([0, width]);

        var y = d3.scale.linear()
            .range([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        var area = d3.svg.area()
            .x(function(d) { return x(d.date); })
            .y0(height)
            .y1(function(d) { return y(d.close); });

        var svg = d3.select("body").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        d3.tsv(data_url, function(error, data) {
          data.forEach(function(d) {
            d.date = parseDate(d.date);
            d.close = +d.close;
          });

          x.domain(d3.extent(data, function(d) { return d.date; }));
          y.domain([0, d3.max(data, function(d) { return d.close; })]);

          svg.append("path")
              .datum(data)
              .attr("class", "area")
              .attr("d", area);

          svg.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate(0," + height + ")")
              .call(xAxis);

          svg.append("g")
              .attr("class", "y axis")
              .call(yAxis)
            .append("text")
              .attr("transform", "rotate(-90)")
              .attr("y", 6)
              .attr("dy", ".71em")
              .style("text-anchor", "end")
              .text("Price ($)");
        });
      // initialization, done once per my-directive tag in template. If my-directive is within an
      // ng-repeat-ed template then it will be called every time ngRepeat creates a new copy of the template.
      
      // ...
      
      // whenever the bound 'exp' expression changes, execute this 
      scope.$watch('exp', function (newVal, oldVal) {
        // ...
      });
    }
  };
});


d3js.directive('linechart', function ( /* dependencies */ ) {
  // define constants and helpers used for the directive
  // ...
  return {
    restrict: 'E', // the directive can be invoked only by using  tag in the template
    scope: { // attributes bound to the scope of the directive
      val: '='
    },
    link: function (scope, element, attrs) {
        var data_url = attrs['tsv'];
        var margin = {top: 20, right: 20, bottom: 30, left: 50},
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var parseDate = d3.time.format("%d-%b-%y").parse;

        var x = d3.time.scale()
            .range([0, width]);

        var y = d3.scale.linear()
            .range([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        var line = d3.svg.line()
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y(d.close); });

        var svg = d3.select("body").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        d3.tsv(data_url, function(error, data) {
          data.forEach(function(d) {
            d.date = parseDate(d.date);
            d.close = +d.close;
          });

          x.domain(d3.extent(data, function(d) { return d.date; }));
          y.domain(d3.extent(data, function(d) { return d.close; }));

          svg.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate(0," + height + ")")
              .call(xAxis);

          svg.append("g")
              .attr("class", "y axis")
              .call(yAxis)
            .append("text")
              .attr("transform", "rotate(-90)")
              .attr("y", 6)
              .attr("dy", ".71em")
              .style("text-anchor", "end")
              .text("Price ($)");

          svg.append("path")
              .datum(data)
              .attr("class", "line")
              .attr("d", line);
        });
      // initialization, done once per my-directive tag in template. If my-directive is within an
      // ng-repeat-ed template then it will be called every time ngRepeat creates a new copy of the template.
      
      // ...
      
      // whenever the bound 'exp' expression changes, execute this 
      scope.$watch('exp', function (newVal, oldVal) {
        // ...
      });
    }
  };
});


d3js.directive('BivariateAreaChart', function() {

});

d3js.directive('MultiSeriesLineChart', function() {

});

d3js.directive('stackedareachart', function() {
  // define constants and helpers used for the directive
  // ...
  return {
    restrict: 'E', // the directive can be invoked only by using  tag in the template
    scope: { // attributes bound to the scope of the directive
      val: '='
    },
    link: function (scope, element, attrs) {
        var data_url = attrs['tsv'];
        var margin = {top: 20, right: 20, bottom: 30, left: 50},
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var parseDate = d3.time.format("%y-%b-%d").parse,
            formatPercent = d3.format(".0%");

        var x = d3.time.scale()
            .range([0, width]);

        var y = d3.scale.linear()
            .range([height, 0]);

        var color = d3.scale.category20();

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .tickFormat(formatPercent);

        var area = d3.svg.area()
            .x(function(d) { return x(d.date); })
            .y0(function(d) { return y(d.y0); })
            .y1(function(d) { return y(d.y0 + d.y); });

        var stack = d3.layout.stack()
            .values(function(d) { return d.values; });

        var svg = d3.select("body").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        d3.tsv(data_url, function(error, data) {
          color.domain(d3.keys(data[0]).filter(function(key) { return key !== "date"; }));

          data.forEach(function(d) {
            d.date = parseDate(d.date);
          });

          var browsers = stack(color.domain().map(function(name) {
            return {
              name: name,
              values: data.map(function(d) {
                return {date: d.date, y: d[name] / 100};
              })
            };
          }));

          x.domain(d3.extent(data, function(d) { return d.date; }));

          var browser = svg.selectAll(".browser")
              .data(browsers)
            .enter().append("g")
              .attr("class", "browser");

          browser.append("path")
              .attr("class", "area")
              .attr("d", function(d) { return area(d.values); })
              .style("fill", function(d) { return color(d.name); });

          browser.append("text")
              .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
              .attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.y0 + d.value.y / 2) + ")"; })
              .attr("x", -6)
              .attr("dy", ".35em")
              .text(function(d) { return d.name; });

          svg.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate(0," + height + ")")
              .call(xAxis);

          svg.append("g")
              .attr("class", "y axis")
              .call(yAxis);
        });

      // initialization, done once per my-directive tag in template. If my-directive is within an
      // ng-repeat-ed template then it will be called every time ngRepeat creates a new copy of the template.
      
      // ...
      
      // whenever the bound 'exp' expression changes, execute this 
      scope.$watch('exp', function (newVal, oldVal) {
        // ...
      });
    }
  };
});

d3js.directive('BarChart', function() {

});

d3js.directive('StackedBarChart', function() {

});

d3js.directive('NormalizedStackedBarChart', function() {

});

d3js.directive('GroupedBarChart', function() {

});

d3js.directive('Scatterplot', function() {

});

d3js.directive('DonutChart', function() {

});

d3js.directive('PieChart', function() {

});

d3js.directive('DonutMultiples', function() {

});

d3js.directive('BarChartwithNegativeValues', function() {

});
