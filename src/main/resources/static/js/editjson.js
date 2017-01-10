function qs2obj() {
	var obj = {};
	location.search.slice(1).split('&').forEach(function(param) {
		var p = param.split('=');
		obj[p[0]] = decodeURIComponent(p[1]);
		return obj;
	})
	
	return obj
}


function isJson(str){
	try{
		var c=JSON.parse(str);
		return true;
	}catch(err){
	return false;
	}

}



	
$(function() {
	var qs = qs2obj();
	$('#jsonId').html(qs.tid);
	
	var user = JSON.parse(localStorage.user) || {uid: 0};
	$('#curUserId').html(user.uid);
	
	
	
	//存放json
	if (localStorage.shouldGet == 1){
		$.get('/templateManage/getTemplateById?templateId='+qs.tid,function(data){
			$('#jsonPre').html(JSON.stringify(JSON.parse(data.templateDetail), null, 2));
			$('#jsonText').val(JSON.stringify(JSON.parse(data.templateDetail), null, 2));
			localStorage.shouldGet = 0;
			
		});
	}
	
	$('#edit_editjson').on('click',function(ev){
		ev.preventDefault();
		$('#jsonPre').hide();
		$('#jsonText').show();
		return false;
	});

	$('#save_editjson').on('click', function(ev) {
			ev.preventDefault();
		 	
		 	var v_templateId = $('#jsonId').html();
		 	var jsonStr= $('#jsonText').val();
		 	if (isJson(jsonStr)){
			 	$.ajax({
			 		type: 'POST',
			 		contentType: "application/json; charset=utf-8",
			 		url: '/templateManage/editTemplateDetailById',
			 	
			 		data: JSON.stringify({"templateId":v_templateId,
			 								"userId":user.uid,
			 								"templateDetail":jsonStr}),
			 		dataType : 'json'
			 	}).done(function(data) {
			 		 alert("保存成功");
			 		 localStorage.shouldGet = 1;
			 		 return window.close();
			 	}).fail(function(data) {
			 		alert("保存失败")
			 	})
		 		
		 	}else{
		 		alert("json 报文格式有误，请修改后保存");
		 	}
		 	
		 
		 
		return false;
	})


	
})
