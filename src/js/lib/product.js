let baseUrl ="http://localhost:8080/";

define(['jquery'],function($){
	return {
		render:function(){
			let id=location.search.split('=')[1];
			$.ajax({
				type: "GET",
				url: `${baseUrl}/lib/getitem.php`,
				dataType: "json",
				data:{
					id:`${id}`
				},		
				success: function(response) {
					console.log(response);
				},
				error: function(response) {
					console.log(response);
				}
			});

		}
	}
})