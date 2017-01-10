	function getCookie(name)
		{
		var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
		if(arr=document.cookie.match(reg))
		return unescape(arr[2]);
		else
		return null;
		}


$(function() {
	var user = JSON.parse(localStorage.user) || {uid: 0};
	$('#curUserId').html(user.uid);
	
	
	$('#save_addscene').on('click', function(ev) {
			ev.preventDefault();
		 	
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
			 		url: '/sceneManage/addScene',
			 	
			 		data: JSON.stringify({"userId":user.uid,
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