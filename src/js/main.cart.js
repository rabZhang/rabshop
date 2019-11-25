require.config({
	paths:{
		jquery:"./../../node_modules/jquery/dist/jquery.min",
		product:"./lib/product",
		cookie:"./lib/cookie",
		header:"./lib/header",
		cart:"./lib/cart"
	},
	shim:{}
});

require(['jquery','cart'],function($,cart){
	cart.render();
})