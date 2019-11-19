define(['jquery','md5'],function($,md5){
	return {
		register:function(){
			$("button[type='submit']").on('click',function(ev){
				ev.preventDefault();
				let email=$("#name");
				let password=$.md5($("#password").val());
				$.ajax({
					type: "POST",
					url: "http://localhost:8080/lib/register.php",
					data:{
						email:email.val(),
						password:password
					},		
					success: function(response) {
					let res=JSON.parse(response);
						if(res.flag){
							alert('注册成功，跳转至登录页面');
							location.href="http://localhost:8080/src/html/login.html";
						}else{
							alert(res.msg);
						}
					},
					error: function(response) {
						console.log(response);
					}
				});	
			})
		}
	}
})