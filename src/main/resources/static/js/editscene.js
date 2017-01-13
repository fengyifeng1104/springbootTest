function qs2obj() {
	var obj = {};
	location.search.slice(1).split('&').forEach(function(param) {
		var p = param.split('=');
		obj[p[0]] = decodeURIComponent(p[1]);
		return obj;
	})
	
	return obj
}

	function formatRepo (repo) {
			
		var markup ="<div class='select2-result-repository__title'>模板Id: " + repo.templateId + " - 模板名称:["+repo.templateName+"]</div>";
      	return markup;
    }

    function formatRepoSelection (repo) {
		$('#select2-templateId-container').attr('data-id',repo.templateId)
      return repo.templateId;
    }
    
    
    
		
$(function() {
	var qs = qs2obj();
	//$('#caseid').val(qs.cid);
	console.log(qs.cid);
	
	var user = JSON.parse(localStorage.user) || {uid: 0};
	$('#curUserId').html(user.uid);
	
	$(".js-data-example-ajax").select2({
	  ajax: {
	 type: 'GET',
		url: "/templateManage/searchTemplateByName",
		dataType: 'json',
		delay: 250,
		data: function (params) {
			console.log('params',params);
		  return {
			templateName:params.term, // search term
		  };
		},
			

		processResults: function (data, params) {
			console.log("content",data);
			var list = data.map(function(item) {
				item.id = item.templateId;
				return item;
			})
		  return {
			results: list
		  };
		},
		cache: true
	  },
	  escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
	 minimumInputLength: 1,
	templateResult: formatRepo, // omitted for brevity, see the source of this page
	templateSelection: formatRepoSelection
	});
	
	
	//get请求 获取case信息  放到对应位置
	$.get('/sceneManage/getSceneById?sceneId='+qs.sid,function(data){
		
		$('#userId').val(data.userId);
		$('#sceneId').val(data.sceneId);
		$('#sceneDescription').val(data.sceneDescription);
		$('#reqMethod').text(data.reqMethod);
		$('#sceneHost').val(data.sceneHost);
		$('#sceneApi').val(data.sceneApi);
		$('#modelDescription').val(data.modelDescription);
		
		$('#select2-templateId-container').html(data.templateId);
		$('#select2-templateId-container').attr('data-id',data.templateId)
		
		$('#mark').val(data.mark);
		
	});
	
	
	
	$('.J_menus li > a').on('click', function(ev) {
		$('#reqMethod').text($(this).text());
	})
	
	
	$('#save_editscene').on('click', function(ev) {
			ev.preventDefault();
		 	
		 	var v_templateId = $('#select2-templateId-container').attr('data-id');
		 	var v_sceneDescription = $('#sceneDescription').val();
		 	
		 	if (v_templateId==undefined || v_sceneDescription==""){
		 		alert("保存失败, 模板Id or 场景描述 不能为空")
		 	}else{
			 	var v_userId = $('#userId').val();
			 	var v_sceneId = $('#sceneId').val();
			 	var v_reqMethod = $('#reqMethod').text();
			 	var v_sceneHost = $('#sceneHost').val();
			 	var v_sceneApi = $('#sceneApi').val();
			 	var v_modelDescription = $('#modelDescription').val();
			 	var v_mark = $('#mark').val();
		
				 $.ajax({
				 		type: 'POST',
				 		contentType: "application/json; charset=utf-8",
				 		url: '/sceneManage/editScene',
				 	
				 		data: JSON.stringify({"userId":user.uid,
				 							"sceneId":v_sceneId,
				 							"sceneDescription":v_sceneDescription,
				 							"reqMethod":v_reqMethod,
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
			 }
		 		
		 	
		 
		 
		return false;
	})
	
})
	
	