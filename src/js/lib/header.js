define(['jquery','cookie'],function($,cookie){
	return {
		replaceWith:function(callback){
			if(cookie.get('email')&&cookie.get('password')){
				let mark=$('#cookielogin');
				let logout=$('#cookielogin+ul>div');
				mark.html(cookie.get('email'));
				logout.html(`<div><a class="logout">注销</a></div>`);
				callback&&callback();
			}
		}
	}
})