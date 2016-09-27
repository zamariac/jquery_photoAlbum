$(document).on('ready', function(e){
	e.preventDefault();
		
		$("nav a").show();
		$(".page").hide();
		$(".side-nav-menu").hide();
		$("button").hide();
		



		$("nav a").on('click',function(e){
			console.log("clicked!");
			e.preventDefault();


			$(".titles").hide();

			// $("nav").hide();
			// $(".page1").show();
			
			var $target = $(this);
			console.log($target);

			var targetName = $target.attr('href');
			console.log(targetName);

			$(".side-nav-menu").toggle('show');
			$("nav ").hide();
		    $(targetName).show();
			$("header").hide();
		
		});

		$(".titles").on('click', function(e){
			console.log ("titles");

			$("nav").show();
			$(".page").hide();
			$("header").show();

		});

		$("section a").on('click',function(e){
			console.log("clicked!");
			e.preventDefault();

			var $target = $(this);
			console.log($target);

			var targetName = $target.attr('href');
			console.log(targetName);

			
			$(".page").hide();
		    $(targetName).show();
		
		
		});

		$(".page img").on('click', function(e){
			console.log("image was clicked");

			$(".side-nav-menu").hide();
			var imageClicked = $(this).attr('src');
			console.log(imageClicked);


	
			$(".page").hide();

			$('<img src="' + imageClicked + '">').prependTo('.single-image');

			$("button").show();
			

		});

		$("button").click(function(e){
			e.preventDefault();

			window.location.reload();


});



		



			


	

});


	
	
	

	
		


