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
	
	
	$('#save_addtemplate').on('click', function(ev) {
			ev.preventDefault();
		 	
		 	var v_templateName = $('#templateName').val();
		 	if (v_templateName==undefined || v_templateName==""){
		 		alert("保存失败, 模板名称 不能为空")
		 	}else{
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
				 		url: '/templateManage/addTemplate',
				 	
				 		data: JSON.stringify({"userId":user.uid,
				 							"templateName":v_templateName,
				 							//"templateDetail":v_templateDetail,
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
				 		 return window.close();
				 	}).fail(function(data) {
				 		alert("保存失败")
				 });
				}
		 		
		 	
		 
		 
		return false;
	})
	
	
	
})