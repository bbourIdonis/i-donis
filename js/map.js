	
	initialize();
	
	function initialize()
	{

		var idoPos = new google.maps.LatLng(43.605023,1.446437);
	    var mapOptions = {
	                    center: new google.maps.LatLng(43.605023,1.446437),
	                    zoom: 10
	                };

	    var map = new google.maps.Map(document.getElementById("mapTest"),
	                       mapOptions);

	    var height = window.innerHeight;

	    $( "#mapTest").css('height',height + 'px');

	    var pos = new google.maps.LatLng(43.605023,1.446437);

	    var image 		= './img/map-marker.png';
	  	var myLatLng 	= new google.maps.LatLng(pos.lat(), pos.lng());


	  	$('#geolocalise').click(function(){
	  		geolocalise(map, image, idoPos);
	  	});

	}

	function geolocalise(map, image, pos)
	{
		if(navigator.geolocation) {

		    navigator.geolocation.getCurrentPosition(function(position) {

				//myLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

				map.setCenter(pos);
				map.setZoom(16);
				var beachMarker = new google.maps.Marker({
					position: pos,
					icon: image, 
					map:map, 

	  			});

		    });
		}else{

			alert("Impossible de vous localiser");

		} 
	}

	