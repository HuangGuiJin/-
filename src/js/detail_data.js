document.addEventListener('DOMContentLoaded',function(){
    var merchant=document.querySelector('.merchant_gh');
	var id = location.search;
	id=id.split('=')[1];
//	id=id.slice(1);
//	console.log(id);
$.ajax({
   	type:"get",
   	url:"../api/list.php",
   	async:true,
   	data:{
   		'id':id
   	},
   	success:function(data){
// 		console.log(data);
   		var arr = JSON.parse(data);
// 		console.log(arr);
       var res=arr.map(function(item){
       	 return `<h3 id="merchant_h3">${item.name}</h3>
		         <p>
		         	<span>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格:</span>
		         	<span id="merchant_span">${item.price}</span>
		         </p>`
       }).join('');
//         console.log(res);
         merchant.innerHTML=res;
         

       
   	}

   });
	
	
});