$(document).on('ready', function(e){
	e.preventDefault();
		
		$("nav").show();
		$(".page").hide();



		$("nav a").on('click',function(e){
			console.log("clicked!");

			// $("nav").hide();
			// $(".page1").show();
			
			var $target = $(this);
			console.log($target);
			var targetName = $target.attr('href');
			console.log(targetName)
			$("nav").hide();
			$(targetName).show();

		});


	

});


	
	
	

	
		


