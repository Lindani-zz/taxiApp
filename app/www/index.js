$(function () 
{
	 $("body").load("pages/loginScreen.html", function () {

        alert('whats cookin!!!');
        
        $("#register").click(function(){
        	//check details
        	// check if username is bruno & password is 12345
        	//alert("aol!");
        	$("body").load("pages/register.html", function ()
		        {
		          alert('currentPage');
		          return false;
		        });
      	});

	    $('#login').click(function(){
	    	var x = document.getElementById("demo");
			function getLocation() {
    		if (navigator.geolocation) {
        	navigator.geolocation.getCurrentPosition(showPosition);
    } 		else {
        	x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
			function showPosition(position) {
    		x.innerHTML = "Latitude: " + position.coords.latitude + 
   			 "<br>Longitude: " + position.coords.longitude; 
}
		    $('body').load("pages/driverLocation.html")  	
		}); 
	          
    });

});




