/*
Template Name: Xtreamer
Author: UXLiner
*/
$(function() {
    "use strict";

// ======
// Yearly Earning Starts
// ======

var day_data = [
  {"elapsed": "2012", "iPhones": 70, "iPads": 120, "iPods": 200},
  {"elapsed": "2013", "iPhones": 150, "iPads": 200, "iPods": 60},
  {"elapsed": "2014", "iPhones": 130, "iPads": 180, "iPods": 250},
  {"elapsed": "2015", "iPhones": 250, "iPads": 200, "iPods": 80},
  {"elapsed": "2016", "iPhones": 230, "iPads": 180, "iPods": 130},
  {"elapsed": "2017", "iPhones": 200, "iPads": 150, "iPods": 100},
  {"elapsed": "2018", "iPhones": 250, "iPads": 160, "iPods": 70}
];
Morris.Line({
  element: 'earning',
  data: day_data,
  xkey: 'elapsed',
  ykeys: ['iPhones', 'iPads', 'iPods'],
  labels: ['iPhones', 'iPads', 'iPods'],
  fillOpacity: 0,
  pointStrokeColors: ['#716aca', '#0077d3', '#00a65a'],
  behaveLikeLine: true,
  gridLineColor: '#f1f1f1',
  lineWidth: 1,
  hideHover: 'auto',
  lineColors: ['#716aca', '#0077d3', '#00a65a'],
  resize: true
});

// ======
// Yearly Earning Ending
// ======

// ======
// Area Chart Starts
// ======

Morris.Area({
  element: 'area',
  data: [
    {x: '2013', india: 5500, usa: 3200, uk: 2000},
    {x: '2014', india: 3500, usa: 2000, uk: 1200},
    {x: '2015', india: 5000, usa: 4500, uk: 3500},
    {x: '2016', india: 2800, usa: 2000, uk: 1300},
    {x: '2017', india: 4500, usa: 4000, uk: 3000},
    {x: '2018', india: 3000, usa: 1800, uk: 1000}
  ],
  xkey: 'x',
  ykeys: ['india', 'usa' , 'uk'],
  labels: ['India', 'USA', 'UK'],
  fillOpacity:0.9,
  pointStrokeColors: ['#aba7de', '#82bbe8', '#7aecb8'],
  behaveLikeLine: true,
  gridLineColor: '#f1f1f1',
  lineWidth: 0,
  smooth: true,
  hideHover: 'auto',
  lineColors: ['#aba7de', '#82bbe8' , '#7aecb8'],
  resize: true
});

// ======
// Area chart End
// ======

// ======
// Donut Chart Starts
// ======

Morris.Donut({
      element: 'donut',
      data: [
        {value: 40, label: 'In-Store Sales'},
        {value: 25, label: 'Mail-Order Sales'},
        {value: 20, label: 'Download Sales'},
        {value: 15, label: 'Latest Order'}
      ],
      backgroundColor: '#fff',
      labelColor: '#404e67',
      colors: [
        '#ff4558',
        '#ff7d4d',
        '#00a5a8',
        '#626e82'
      ],
      formatter: function (x) { return x + "%"}
    });

// ======
// Donut chart End
// ======

// ======
// Bar chart Start
// ======
Morris.Bar({
  element: 'bar-chart',
  data: [
    {x: '2015', y: 60, z: 20, a: 40},
    {x: '2016', y: 20, z: 50, a: 10},
    {x: '2017', y: 10, z: 50, a: 35},
    {x: '2018', y: 20, z: 40, a: 20}
  ],
  xkey: 'x',
  ykeys: ['y', 'z', 'a'],
  labels: ['Y', 'Z', 'A']
}).on('click', function(i, row){
  console.log(i, row);
  resize: true
});
// ======
// Bar chart End
// ======

})(jQuery);