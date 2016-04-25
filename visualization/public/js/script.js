// js

// customized heatmap configuration
var heatmapInstance = h337.create({
  // required container
  container: document.querySelector('.heatmap'),
  // backgroundColor to cover transparent areas
  backgroundColor: 'rgba(0,0,0,.95)',
  // custom gradient colors
  gradient: {
    // enter n keys between 0 and 1 here
    // for gradient color customization
    '.5': 'blue',
    '.8': 'red',
    '.95': 'white'
  },
  // the maximum opacity (the value with the highest intensity will have it)
  maxOpacity: .9,
  // minimum opacity. any value > 0 will produce 
  // no transparent gradient transition
  minOpacity: .3
});

// now generate some random data
var points = [];
var max = 0;
var width = 840;
var height = 400;
var len = 300;

while (len--) {
  var val = Math.floor(Math.random()*100);
  var radius = Math.floor(Math.random()*70);

  max = Math.max(max, val);
  var point = {
    x: Math.floor(Math.random()*width),
    y: Math.floor(Math.random()*height),
    value: val,
    radius: radius
  };
  points.push(point);
}
// heatmap data format
var data = { 
  max: max, 
  data: points 
};
// if you have a set of datapoints always use setData instead of addData
// for data initialization
heatmapInstance.setData(data);