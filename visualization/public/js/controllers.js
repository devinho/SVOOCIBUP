app.controller('vizController', ['$scope', '$http', function($scope, $http) {
	$http.get('./assets/compiled_file.json').success(function(final_data) {
		 for(var heatmapInstance=h337.create({container:document.querySelector(".heatmap"),backgroundColor:"rgba(255,255,255,0)",gradient:{".5":"red"},maxOpacity:.7,minOpacity:.1}),points=[],max=0,width=840,height=400,len=300;len--;){var val=Math.floor(100*Math.random()),radius=Math.floor(70*Math.random());max=Math.max(max,val);var point={x:Math.floor(Math.random()*width),y:Math.floor(Math.random()*height),value:val,radius:radius};points.push(point)}var data={max:max,data:points};
			var temp = {data: final_data[0].click_data};
		    heatmapInstance.setData(temp);

		    for(var heatmapInstance=h337.create({container:document.querySelector(".heatmap1"),backgroundColor:"rgba(255,255,255,0)",gradient:{".5":"red"},maxOpacity:.7,minOpacity:.1}),points=[],max=0,width=840,height=400,len=300;len--;){var val=Math.floor(100*Math.random()),radius=Math.floor(70*Math.random());max=Math.max(max,val);var point={x:Math.floor(Math.random()*width),y:Math.floor(Math.random()*height),value:val,radius:radius};points.push(point)}var data={max:max,data:points};
		    //data = {'data': [{'y': 118, 'x': 212, 'radius': 30, 'value': 30}, {'y': 90, 'x': 120, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 90, 'x': 288, 'radius': 30, 'value': 30}, {'y': 146, 'x': 252, 'radius': 30, 'value': 30}, {'y': 90, 'x': 205, 'radius': 30, 'value': 30}, {'y': 146, 'x': 224, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 146, 'x': 252, 'radius': 30, 'value': 30}, {'y': 90, 'x': 120, 'radius': 30, 'value': 30}, {'y': 90, 'x': 260, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 146, 'x': 224, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 90, 'x': 205, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 212, 'radius': 30, 'value': 30}, {'y': 118, 'x': 212, 'radius': 30, 'value': 30}, {'y': 118, 'x': 212, 'radius': 30, 'value': 30}, {'y': 90, 'x': 120, 'radius': 30, 'value': 30}, {'y': 118, 'x': 212, 'radius': 30, 'value': 30}, {'y': 118, 'x': 212, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 212, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 268, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 268, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 268, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 268, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 268, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 268, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}]}
		    var temp = {data: final_data[0].key_data};
		    heatmapInstance.setData(temp);

		    $scope.screens = final_data;

		    $scope.set = function(screen){
		    	$('canvas').remove();
		    	for(var heatmapInstance=h337.create({container:document.querySelector(".heatmap"),backgroundColor:"rgba(255,255,255,0)",gradient:{".5":"red"},maxOpacity:.7,minOpacity:.1}),points=[],max=0,width=840,height=400,len=300;len--;){var val=Math.floor(100*Math.random()),radius=Math.floor(70*Math.random());max=Math.max(max,val);var point={x:Math.floor(Math.random()*width),y:Math.floor(Math.random()*height),value:val,radius:radius};points.push(point)}var data={max:max,data:points};
				var temp = {data: screen.click_data};
			    heatmapInstance.setData(temp);

			    for(var heatmapInstance=h337.create({container:document.querySelector(".heatmap1"),backgroundColor:"rgba(255,255,255,0)",gradient:{".5":"red"},maxOpacity:.7,minOpacity:.1}),points=[],max=0,width=840,height=400,len=300;len--;){var val=Math.floor(100*Math.random()),radius=Math.floor(70*Math.random());max=Math.max(max,val);var point={x:Math.floor(Math.random()*width),y:Math.floor(Math.random()*height),value:val,radius:radius};points.push(point)}var data={max:max,data:points};
			    //data = {'data': [{'y': 118, 'x': 212, 'radius': 30, 'value': 30}, {'y': 90, 'x': 120, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 90, 'x': 288, 'radius': 30, 'value': 30}, {'y': 146, 'x': 252, 'radius': 30, 'value': 30}, {'y': 90, 'x': 205, 'radius': 30, 'value': 30}, {'y': 146, 'x': 224, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 146, 'x': 252, 'radius': 30, 'value': 30}, {'y': 90, 'x': 120, 'radius': 30, 'value': 30}, {'y': 90, 'x': 260, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 146, 'x': 224, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 90, 'x': 205, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 212, 'radius': 30, 'value': 30}, {'y': 118, 'x': 212, 'radius': 30, 'value': 30}, {'y': 118, 'x': 212, 'radius': 30, 'value': 30}, {'y': 90, 'x': 120, 'radius': 30, 'value': 30}, {'y': 118, 'x': 212, 'radius': 30, 'value': 30}, {'y': 118, 'x': 212, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 212, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 268, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 268, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 268, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 268, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 268, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 268, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}]}
			    var temp = {data: screen.key_data};
			    heatmapInstance.setData(temp);

		    }
	});
	
}]);