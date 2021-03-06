require.config({
	paths:{
		jquery:"./../../node_modules/jquery/dist/jquery.min",
		product:"./lib/product",
		cookie:"./lib/cookie",
		header:"./lib/header",
		fdj:"./lib/fdj",
		priceSwitch:'./lib/priceSwitch'
	},
	shim:{}
});
require(['jquery','product'],function($,product){
	$('input[name="shop-num-incar"]').on('change',function(){
		$(this).val(parseInt($(this).val()));
		if($(this).val()<0){
			$(this).val(0);
		}
	})
	$('.glyphicon-chevron-left').on('click',function(){
		if($('input[name="shop-num-incar"]').val()>0){
			$('input[name="shop-num-incar"]').val(function(){
				return --this.value;
			});
		}else{
			$('input[name="shop-num-incar"]').val(function(){
				return this.value=0;
			});
		}
	})
	$('.glyphicon-chevron-right').on('click',function(){
		$('input[name="shop-num-incar"]').val(function(){
			return ++this.value;
		});
	})
	product.render(function(id,price){
		$('.shop-car>button').on('click',function(){
			product.additem(id,price,$('input[name="shop-num-incar"]').val());
		});
	});
})
require(['jquery','fdj'],function($,fdj){
	fdj.fdj();
})
require(['jquery','header'],function($,header){
	header.replaceWith();
})
require(['jquery','header','cookie'],function($,header,cookie){
	header.replaceWith(function(){
		$('.logout').on('click',function(){
			cookie.remove('email');
			cookie.remove('password');
			location.reload();
		})
	});
})
