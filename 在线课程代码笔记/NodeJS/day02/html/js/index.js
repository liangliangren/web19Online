$(function(){
	$.ajax({
		type:"get",
		url:"data/data.json",
		async:true,
		success:function(res){
			console.log(res.listDatas[0].name)
			$("#header h2").html(res.listDatas[0].name)
		}
	});
})
