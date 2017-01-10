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
	$.get('/caseManage/getCaseById?caseId='+qs.cid,function(data){
		
		$('#userId').val(data.userId);
		$('#caseId').val(data.caseId);
		$('#caseDescription').val(data.caseDescription);
		$('#modelDescription').val(data.modelDescription);
		$('#templateId').val(data.templateId);
		$('#templateName').val(data.templateName);
		$('#sceneId').val(data.sceneId);
		$('#sceneDescription').val(data.sceneDescription);
		$('#extraInputList').val(data.extraInputList);
		$('#checkPoinDescription').val(data.checkPoinDescription);
		$('#extraCheckList').val(data.extraCheckList);
		$('#defaultCheckType').val(data.defaultCheckType);	
		
	});
	
	
	
	
	
	
	$('#save_editcase').on('click', function(ev) {
			ev.preventDefault();
		 	
		 	var v_caseId = $('#caseId').val();
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
			 		url: '/caseManage/editCase',
			 	
			 		data: JSON.stringify({"userId":user.uid,
			 							"caseId":v_caseId,
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
	
	