define(['jquery','md5','cookie'],function($,md5,cookie){
	return {
		login:function(){
			$("button[type='submit']").on('click',function(ev){
				ev.preventDefault();
				let email=$("#mail");
				let password=$.md5($("#password").val());
				$.ajax({
					type: "POST",
					url: "http://localhost:8080/lib/login.php",
					dataType: "json",
					data:{
						email:email.val(),
						password:password
					},		
					success: function(res) {
						if(res.flag){
							alert('登录成功正在前往首页');
							cookie.set('email',email.val());
							cookie.set('password',$("#password").val());
							location.href="http://localhost:8080/src/html/index.html";
						}else{
							alert(res.msg);
						}
					},
					error: function(response) {
						console.log(response);
					}
				});	
			})
		},
		cookielogin:function(){
			if(cookie.get('email')&&cookie.get('password')){
				$("#mail").val(cookie.get('email'));
				$("#password").val(cookie.get('password'));		
			}
		}
	}
})
