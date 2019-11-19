require.config({
	paths:{
		jquery:"./../../node_modules/jquery/dist/jquery.min",
		login:"./lib/login",
		md5:"./lib/jquery.md5",
		cookie:"./lib/cookie"
	},
	shim:{
		md5:['jquery']
	}
});
require(['jquery','login'],function($,login){
	login.cookielogin();
})

require(['jquery','login'],function($,login){
	login.login();
})

