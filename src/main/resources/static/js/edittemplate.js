function qs2obj() {
	var obj = {};
	location.search.slice(1).split('&').forEach(function(param) {
		var p = param.split('=');
		obj[p[0]] = decodeURIComponent(p[1]);
		return obj;
	})
	
	return obj
}

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
	
	var qs = qs2obj();
	console.log(qs.tid);
	
	//get请求 获取case信息  放到对应位置
	$.get('/templateManage/getTemplateById?templateId='+qs.tid,function(data){
		
		$('#userId').val(data.userId);
		$('#templateId').val(data.templateId);
		$('#templateName').val(data.templateName);
		$('#mark').val(data.mark);
		$('#afterToDo').val(data.afterToDo);
		$('#beforeToDo').val(data.beforeToDo);
		$('#input2SqlMap').val(data.input2SqlMap);
		$('#output2SqlMap').val(data.output2SqlMap);
		$('#sql2MongoMap').val(data.sql2MongoMap);
		$('#output2MongoMap').val(data.output2MongoMap);
		$('#templateDetail').attr('href','/editjson?tid='+qs.tid); 
		
		
		
	});
	
	$("#templateDetail").click(function(){
		localStorage.shouldGet = 1;
	});
	
	
	
	$("#save_edittemplate").click(function(ev){
		ev.preventDefault();
			var v_templateName = $('#templateName').val();
		 	if (v_templateName==undefined || v_templateName==""){
		 		alert("保存失败, 模板名称 不能为空")
		 	}else{
			 	var v_templateId = $('#templateId').val();
			 	
			 	var v_mark = $('#mark').val();
			 	var v_afterToDo = $('#afterToDo').val();
			 	var v_beforeToDo = $('#beforeToDo').val();
			 	var v_input2SqlMap = $('#input2SqlMap').val();
			 	var v_output2SqlMap = $('#output2SqlMap').val();
			 	var v_sql2MongoMap = $('#sql2MongoMap').val();
			 	var v_output2MongoMap = $('#output2MongoMap').val();
			 	
		
			 	 $.ajax({
				 		type: 'POST',
				 		contentType: "application/json; charset=utf-8",
				 		url: '/templateManage/editTemplate',
				 	
				 		data: JSON.stringify({"userId":user.uid,
				 							"templateId":v_templateId,
				 							"templateName":v_templateName,
				 							"mark":v_mark,
				 							"afterToDo":v_afterToDo,
				 							"beforeToDo":v_beforeToDo,
				 							"input2SqlMap":v_input2SqlMap,
				 							"output2SqlMap":v_output2SqlMap,
				 							"sql2MongoMap":v_sql2MongoMap,
				 							"output2MongoMap":v_output2MongoMap
				 							}),
				 		dataType : 'json'
				 	}).done(function(data) {
				 		 alert("保存成功");
				 		 localStorage.shouldGet = 1;
				 		 return window.close();
				 	}).fail(function(data) {
				 		alert("保存失败")
	 			});
 			}
 			
 		 
			return false;
	})
	
	

	
})
	
	