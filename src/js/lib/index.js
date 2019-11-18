let baseUrl ="http://localhost:8080/";
function priceSwitch(x) {
    //强制保留两位小数
    var f = parseFloat(x);
    if (isNaN(f)) return false;
    var f = Math.round(x * 100) / 100;
    var s = f.toString();
    var rs = s.indexOf('.');
    if (rs < 0) {
        rs = s.length;
        s += '.';
    }
    while (s.length < (rs + 1) + 2) {
        s += '0';
    }
    //每三位用一个逗号隔开
    var leftNum=s.split(".")[0];
    var rightNum="."+s.split(".")[1];
    var result;
    //定义数组记录截取后的价格
    var resultArray=new Array();
    if(leftNum.length>3){
        var i=true;
        while (i){
            resultArray.push(leftNum.slice(-3));
            leftNum=leftNum.slice(0,leftNum.length-3);
            if(leftNum.length<4){
                i=false;
            }
        }
        //由于从后向前截取，所以从最后一个开始遍历并存到一个新的数组，顺序调换
        var sortArray=new Array();
        for(var i=resultArray.length-1;i>=0;i--){
            sortArray.push(resultArray[i]);
        }
        result=leftNum+","+sortArray.join(",")+rightNum;
    }else {
        result=s;
    }
    return result;
}
define(['jquery'],function($){
	return {
		render:function(){
			 $.ajax({
				type: "GET",
				url: `${baseUrl}/lib/getall.php`,
				dataType: "json",	
				success: function(response) {
				console.log(response);
				let img=[];
				response.forEach((value,key)=>{
					img.push((JSON.parse(value.pic))[0].src);
				})
				 let temp=`
		    <div class="col-md-2 col-xs-6 my-col-md-2">
		      	<a href="${baseUrl}/src/html/shop.html?id=${response[0].id}">
				<div class="thumbnail thumb-border">
					<img src="${baseUrl}/src/${img[0]}" alt="...">
					<div class="caption">
						<h6>${response[0].title}</h6>
						<p>${response[0].Keyword}</p>
					</div>
					<div class="red-buy">
						<span>售价：<strong>¥ ${priceSwitch(response[0].price)}</strong>&nbsp;起</span></div>
				</div>
				</a>
			</div>
			<div class="col-md-2 col-xs-6 my-col-md-2">
				<a href="${baseUrl}/src/html/shop.html?id=${response[1].id}">
				<div class="thumbnail thumb-border">
					<img src="${baseUrl}/src/${img[1]}" alt="...">
					<div class="caption">
						<h6>${response[1].title}</h6>
						<p>${response[1].Keyword}</p>
					</div>
					<div class="red-buy">
						<span>售价：<strong>¥ ${priceSwitch(response[1].price)}</strong>&nbsp;起</span></div>
					<span class='hidden-sm hidden-xs' style="background-color: #ffd800;color: #000000;">认证翻新</span>
				</div>
				</a>
			</div>
			<div class="col-md-2 col-xs-6 my-col-md-2">
			 <a href="${baseUrl}/src/html/shop.html?id=${response[2].id}">
				<div class="thumbnail thumb-border">
					<img src="${baseUrl}/src/${img[2]}" alt="...">
					<div class="caption">
						<h6>${response[2].title}</h6>
						<p>${response[2].Keyword}</p>
					</div>
					<div class="red-buy">
						<span>售价：<strong>¥ ${priceSwitch(response[2].price)}</strong>&nbsp;起</span></div>
				</div>
				</a>
			</div>
			<div class="col-md-2 col-xs-6 my-col-md-2">
			 <a href="${baseUrl}/src/html/shop.html?id=${response[3].id}">
				<div class="thumbnail thumb-border">
					<img src="${baseUrl}/src/${img[3]}" alt="...">
					<div class="caption">
						<h6>${response[3].title}</h6>
						<p>${response[3].Keyword}</p>
					</div>
					<div class="red-buy">
						<span>售价：<strong>¥ ${priceSwitch(response[3].price)}</strong>&nbsp;起</span></div>
				</div>
				</a>
			</div>
			<div class="col-md-2 col-xs-6 my-col-md-2">
			 <a href="${baseUrl}/src/html/shop.html?id=${response[4].id}">
				<div class="thumbnail thumb-border">
					<img src="${baseUrl}/src/${img[4]}" alt="...">
					<div class="caption">
						<h6>${response[4].title}</h6>
						<p>${response[4].Keyword}</p>
					</div>
					<div class="red-buy">
						<span>售价：<strong>¥ ${priceSwitch(response[4].price)}</strong>&nbsp;起</span>
					</div>
					<span class='hidden-sm hidden-xs' style="background-color: #e71224;">新品</span>
				</div>
				</a>
			</div>
					`
					$('.my-row').append(temp);
				},
				error: function(response) {
					console.log(response);
				}
			});
		
		}
	}
});