function qs2obj() {
	var obj = {};
	location.search.slice(1).split('&').forEach(function(param) {
		var p = param.split('=');
		obj[p[0]] = decodeURIComponent(p[1]);
		return obj;
	})
	
	return obj
}


		
$(function() {
	var qs = qs2obj();
	//$('#caseid').val(qs.cid);
	console.log(qs.cid);
	
	var user = JSON.parse(localStorage.user) || {uid: 0};
	$('#curUserId').html(user.uid);
	
	
	//get请求 获取case信息  放到对应位置
	$.get('/sceneManage/getSceneById?sceneId='+qs.sid,function(data){
		
		$('#userId').val(data.userId);
		$('#sceneId').val(data.sceneId);
		$('#sceneDescription').val(data.sceneDescription);
		$('#sceneLevel').val(data.sceneLevel);
		$('#sceneHost').val(data.sceneHost);
		$('#sceneApi').val(data.sceneApi);
		$('#modelDescription').val(data.modelDescription);
		$('#templateId').val(data.templateId);
		$('#mark').val(data.mark);
		
	});
	
	
	
	
	
	
	$('#save_editscene').on('click', function(ev) {
			ev.preventDefault();
		 	
		 	var v_userId = $('#userId').val();
		 	var v_sceneId = $('#sceneId').val();
		 	var v_sceneDescription = $('#sceneDescription').val();
		 	var v_sceneLevel = $('#sceneLevel').val();
		 	var v_sceneHost = $('#sceneHost').val();
		 	var v_sceneApi = $('#sceneApi').val();
		 	var v_modelDescription = $('#modelDescription').val();
		 	var v_templateId = $('#templateId').val();
		 	var v_mark = $('#mark').val();
	
			 $.ajax({
			 		type: 'POST',
			 		contentType: "application/json; charset=utf-8",
			 		url: '/sceneManage/editScene',
			 	
			 		data: JSON.stringify({"userId":user.uid,
			 							"sceneId":v_sceneId,
			 							"sceneDescription":v_sceneDescription,
			 							"sceneLevel":v_sceneLevel,
			 							"sceneHost":v_sceneHost,
			 							"sceneApi":v_sceneApi,
			 							"modelDescription":v_modelDescription,
			 							"templateId":v_templateId,
			 							"mark":v_mark
			 							}),
			 		dataType : 'json'
			 	}).done(function(data) {
			 		 alert("保存成功");
			 		 return window.close();
			 	}).fail(function(data) {
			 		alert("保存失败")
			 });
		 		
		 	
		 
		 
		return false;
	})
	
})
	
	