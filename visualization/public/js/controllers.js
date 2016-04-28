app.controller('vizController', ['$scope', '$http', function($scope, $http) {
	$http.get('./assets/compiled_file.json').success(function(final_data) {
		$scope.play_bool = false;
		$scope.toggleObject = {item: 0};
		$scope.key_count = final_data[0].key_data.length;
		$scope.active_image = "./assets/screenshots/screenshort_0.png";
		$scope.mouse_count = final_data[0].mouse_data.length;
		$scope.click_count = final_data[0].click_data.length;

		for(var heatmapInstance=h337.create({container:document.querySelector(".heatmap"),backgroundColor:"rgba(255,255,255,0)",gradient:{".5":"red"},maxOpacity:.7,minOpacity:.1}),points=[],max=0,width=840,height=400,len=300;len--;){var val=Math.floor(100*Math.random()),radius=Math.floor(70*Math.random());max=Math.max(max,val);var point={x:Math.floor(Math.random()*width),y:Math.floor(Math.random()*height),value:val,radius:radius};points.push(point)}var data={max:max,data:points};
		var temp = {data: final_data[0].mouse_data};
		heatmapInstance.setData(temp);
		
		for(var heatmapInstance=h337.create({container:document.querySelector(".heatmap"),backgroundColor:"rgba(255,255,255,0)",gradient:{".5":"yellow"},maxOpacity:.7,minOpacity:.1}),points=[],max=0,width=840,height=400,len=300;len--;){var val=Math.floor(100*Math.random()),radius=Math.floor(70*Math.random());max=Math.max(max,val);var point={x:Math.floor(Math.random()*width),y:Math.floor(Math.random()*height),value:val,radius:radius};points.push(point)}var data={max:max,data:points};
		var temp = {data: final_data[0].click_data};
		heatmapInstance.setData(temp);


		for(var heatmapInstance=h337.create({container:document.querySelector(".heatmap1"),backgroundColor:"rgba(255,255,255,0)",gradient:{".5":"red"},maxOpacity:.7,minOpacity:.1}),points=[],max=0,width=840,height=400,len=300;len--;){var val=Math.floor(100*Math.random()),radius=Math.floor(70*Math.random());max=Math.max(max,val);var point={x:Math.floor(Math.random()*width),y:Math.floor(Math.random()*height),value:val,radius:radius};points.push(point)}var data={max:max,data:points};
		//data = {'data': [{'y': 118, 'x': 212, 'radius': 30, 'value': 30}, {'y': 90, 'x': 120, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 90, 'x': 288, 'radius': 30, 'value': 30}, {'y': 146, 'x': 252, 'radius': 30, 'value': 30}, {'y': 90, 'x': 205, 'radius': 30, 'value': 30}, {'y': 146, 'x': 224, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 146, 'x': 252, 'radius': 30, 'value': 30}, {'y': 90, 'x': 120, 'radius': 30, 'value': 30}, {'y': 90, 'x': 260, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 146, 'x': 224, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 90, 'x': 205, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 212, 'radius': 30, 'value': 30}, {'y': 118, 'x': 212, 'radius': 30, 'value': 30}, {'y': 118, 'x': 212, 'radius': 30, 'value': 30}, {'y': 90, 'x': 120, 'radius': 30, 'value': 30}, {'y': 118, 'x': 212, 'radius': 30, 'value': 30}, {'y': 118, 'x': 212, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 212, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 268, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 268, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 268, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 268, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 268, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 268, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}]}
		var temp = {data: final_data[0].key_data};
		heatmapInstance.setData(temp);

		$scope.screens = final_data;

		$scope.set = function(screen, index){
			$scope.toggleObject.item = index;

			$scope.key_count = screen.key_data.length;
			$scope.mouse_count = screen.mouse_data.length;
			$scope.click_count = screen.click_data.length;
			$scope.active_image = "./assets/screenshots/screenshort_" + (index * 1) + ".png"
			$('canvas').remove();
			for(var heatmapInstance=h337.create({container:document.querySelector(".heatmap"),backgroundColor:"rgba(255,255,255,0)",gradient:{".5":"red"},maxOpacity:.7,minOpacity:.1}),points=[],max=0,width=840,height=400,len=300;len--;){var val=Math.floor(100*Math.random()),radius=Math.floor(70*Math.random());max=Math.max(max,val);var point={x:Math.floor(Math.random()*width),y:Math.floor(Math.random()*height),value:val,radius:radius};points.push(point)}var data={max:max,data:points};
			var temp = {data: screen.mouse_data};
			heatmapInstance.setData(temp);

			for(var heatmapInstance=h337.create({container:document.querySelector(".heatmap"),backgroundColor:"rgba(255,255,255,0)",gradient:{".5":"yellow"},maxOpacity:.7,minOpacity:.1}),points=[],max=0,width=840,height=400,len=300;len--;){var val=Math.floor(100*Math.random()),radius=Math.floor(70*Math.random());max=Math.max(max,val);var point={x:Math.floor(Math.random()*width),y:Math.floor(Math.random()*height),value:val,radius:radius};points.push(point)}var data={max:max,data:points};
			var temp = {data: screen.click_data};
			heatmapInstance.setData(temp);

			for(var heatmapInstance=h337.create({container:document.querySelector(".heatmap1"),backgroundColor:"rgba(255,255,255,0)",gradient:{".5":"red"},maxOpacity:.7,minOpacity:.1}),points=[],max=0,width=840,height=400,len=300;len--;){var val=Math.floor(100*Math.random()),radius=Math.floor(70*Math.random());max=Math.max(max,val);var point={x:Math.floor(Math.random()*width),y:Math.floor(Math.random()*height),value:val,radius:radius};points.push(point)}var data={max:max,data:points};
			//data = {'data': [{'y': 118, 'x': 212, 'radius': 30, 'value': 30}, {'y': 90, 'x': 120, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 90, 'x': 288, 'radius': 30, 'value': 30}, {'y': 146, 'x': 252, 'radius': 30, 'value': 30}, {'y': 90, 'x': 205, 'radius': 30, 'value': 30}, {'y': 146, 'x': 224, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 146, 'x': 252, 'radius': 30, 'value': 30}, {'y': 90, 'x': 120, 'radius': 30, 'value': 30}, {'y': 90, 'x': 260, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 146, 'x': 224, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 90, 'x': 205, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 212, 'radius': 30, 'value': 30}, {'y': 118, 'x': 212, 'radius': 30, 'value': 30}, {'y': 118, 'x': 212, 'radius': 30, 'value': 30}, {'y': 90, 'x': 120, 'radius': 30, 'value': 30}, {'y': 118, 'x': 212, 'radius': 30, 'value': 30}, {'y': 118, 'x': 212, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 212, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 268, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 268, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 268, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 268, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 268, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 268, 'radius': 30, 'value': 30}, {'y': 118, 'x': 296, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}, {'y': 118, 'x': 70, 'radius': 30, 'value': 30}, {'y': 118, 'x': 100, 'radius': 30, 'value': 30}, {'y': 118, 'x': 128, 'radius': 30, 'value': 30}]}
			var temp = {data: screen.key_data};
			heatmapInstance.setData(temp);


		}

		function play_helper(){
			setTimeout(function(){
		        if($scope.play_bool){
		        	var curr = $scope.toggleObject.item;
		        	$scope.toggleObject.item = curr+1;
		        	$scope.set(final_data[curr+1], curr+1);
		        	var currTop = $('#timeline').scrollTop();
					$('#timeline').scrollTop(currTop + 120);

					$scope.$apply();
					if($scope.toggleObject.item == $scope.screens.length - 1){
						$scope.pause()
					}
					else{
						play_helper();
					}
		       		
		        }
		    }, 1000);
		}

		$scope.play = function(){

			if(!$scope.play_bool && $scope.toggleObject.item < $scope.screens.length - 1){
				$scope.play_bool = true;
				$('#play').css('font-weight', 'bold');
				$('#pause').css('font-weight', 'normal');
				play_helper();
			}
		}

		$scope.pause = function(){
			$scope.play_bool = false;
			$('#play').css('font-weight', 'normal');
				$('#pause').css('font-weight', 'bold');
		}
	});
	
}]);