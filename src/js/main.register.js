require.config({
	paths:{
		jquery:"./../../node_modules/jquery/dist/jquery.min",
		reg:"./lib/register",
		md5:"./lib/jquery.md5"
	},
	shim:{
		md5:['jquery']
	}
});
require(['jquery','reg'],function($,reg){
	reg.register();
})