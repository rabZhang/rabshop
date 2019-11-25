let baseUrl ="http://localhost:8080";

define(['jquery','priceSwitch','cookie'],function($,priceSwitch,cookie){
	return {
		render:function(callback){
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
					let img=JSON.parse(response.pic);
					let level=JSON.parse(response.level);
					let temp='';
					console.log(level);
					for(let i=0;i<level.length;i++){
						temp+=`<div class="my-col-lg-5 col-xs-12 btn-default "><p class="shop-cs">${level[i].level}</p></div>`;
					}
					$('div.row.btn-group').append(temp);
					$('.small>img').attr({ src: `${baseUrl}/src${img[0].src}`, alt: "Test Image" });
					$('.shop-item>h3').html(`${response.title} ${response.Keyword}`);
					$('.shop-item>h3+span strong').html(`${priceSwitch(response.price)}`);
					$('.rest-pro').html(response.num);
					$('.big>img').attr({ src: `${baseUrl}/src${img[0].src}`, alt: "Test Image" });
					$('.list-group>.list-group-item>img').each(function(i){
						this.src=`${baseUrl}/src/${img[i+1].src}`;
					});
					$('.list-group>.list-group-item>img').on('click',function(){
						$('.small>img').attr("src",this.src);
						$('.big>img').attr("src",this.src);
					});
					callback&&callback(response.id,response.price);
				},
				error: function(response) {
					console.log(response);
				}
			});

		},
		additem:function(id,price,num){
			let shop =cookie.get('shop');
			let  product={
				id:id,
				price:price,
				num:num
			}; 
			if(shop){
				shop= JSON.parse(shop);
				if(shop.some(elm=>elm.id==id)){
					shop.forEach(elm=>{
					 return elm.id==id?elm.num=num:null;
					});
				}
				else{
					shop.push(product);
				}
			}else{
				shop =[];
				shop.push(product);
				
			}
			cookie.set('shop',JSON.stringify(shop));
			location.href='http://localhost:8080/src/html/cart.html';
		}
	}
})