  // create the angular app
var app = angular.module('myApp', []);

app.directive('bubbles', bubbles);

function bubbles(){
  return {
    scope: {
      values: '='
    },
    template: '<svg width="900" height="300"></svg>',
    restrict: 'E',
    controller: () +> {},
    bindToController: true,
    controllerAs: 'viz'
  };
}


d3.select('body')
    .append('svg')
    .selectAll('circle')
    .data([1000, 10000, 250000, 15000])
    .enter()
    .append('circle')
    .attr('r', d => Math.log(d))
    .attr('fill', '#5fc')
    .attr('stroke', '#333')
    .attr('transform', (d, i) => {
        var offset = i * 20 + 2 * Math.log(d);
        return `translate(${offset}, ${offset})`;
    });
