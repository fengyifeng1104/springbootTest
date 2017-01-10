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
	
	
	$('#save_addcase').on('click', function(ev) {
			ev.preventDefault();
		 	
		 	var v_caseDescription = $('#caseDescription').val();
		 	var v_modelDescription = $('#modelDescription').val();
		 	var v_templateId = $('#templateId').val();
		 	var v_templateName = $('#templateName').val();
		 	var v_sceneId = $('#sceneId').val();
		 	var v_sceneDescription = $('#sceneDescription').val();
		 	var v_extraInputList = $('#extraInputList').val();
		 	var v_checkPoinDescription = $('#checkPoinDescription').val();
		 	var v_extraCheckList = $('#extraCheckList').val();
		 	var v_defaultCheckType = $('#defaultCheckType').val();
		 	
	
			 $.ajax({
			 		type: 'POST',
			 		contentType: "application/json; charset=utf-8",
			 		url: '/caseManage/addCase',
			 	
			 		data: JSON.stringify({"userId":user.uid,
			 							"caseDescription":v_caseDescription,
			 							"modelDescription":v_modelDescription,
			 							"templateId":v_templateId,
			 							"templateName":v_templateName,
			 							"sceneId":v_sceneId,
			 							"sceneDescription":v_sceneDescription,
			 							"extraInputList":v_extraInputList,
			 							"checkPoinDescription":v_checkPoinDescription,
			 							"extraCheckList":v_extraCheckList,
			 							"defaultCheckType":v_defaultCheckType,
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