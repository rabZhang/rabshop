require.config({
	paths:{
		jquery:"./../../node_modules/jquery/dist/jquery.min",
		product:"./lib/product"
	},
	shim:{}
});
require(['jquery','product'],function($,product){
	product.render();
})