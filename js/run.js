$(document).ready(function(){
	
	slideAll();

	function slideAll()
	{
		
		$('#menu li a').click(function(e){
			var lien = $(this).data('lien');
			e.preventDefault();
			$('#page').fadeOut(500).delay(500, function(){
				window.location = lien;
			});
			
			
		});
	}



});