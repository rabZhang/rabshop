let baseUrl ="http://localhost:8080";
define(['jquery','cookie'],function($,cookie){
	return {
		render:function(){
			let shop =cookie.get('shop');
			shop=JSON.parse(shop);
			let idList=shop.map(elm=>elm.id).join();
			console.log()
			$.ajax({
				type: "GET",
				url: `${baseUrl}/lib/shop.php`,
				dataType:"json",
				data:{
					idlist:idList
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