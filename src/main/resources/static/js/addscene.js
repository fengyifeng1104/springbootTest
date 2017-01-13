	function getCookie(name)
		{
		var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
		if(arr=document.cookie.match(reg))
		return unescape(arr[2]);
		else
		return null;
		}

	function formatRepo (repo) {
		console.log("ff",repo);
		console.log("gg",repo.mark);
      //if (repo.loading) return repo.text;
			
    
		//var markup ='<span>'+repo.templateName+'</span>';
		var markup ="<div class='select2-result-repository__title'>模板Id: " + repo.templateId + " - 模板名称:["+repo.templateName+"]</div>";
      	return markup;
    }

    function formatRepoSelection (repo) {
		$('#select2-templateId-container').attr('data-id',repo.templateId)
      return repo.templateId;
    }
    
    
    
$(function() {
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
	
	
	

	$('.J_menus li > a').on('click', function(ev) {
		$('#reqMethod').text($(this).text());
	})
	
	$('#save_addscene').on('click', function(ev) {
			ev.preventDefault();
			
		 	var v_templateId = $('#select2-templateId-container').attr('data-id');
		 	var v_sceneDescription = $('#sceneDescription').val();
		 	
		 	if (v_templateId==undefined || v_sceneDescription==""){
		 		alert("保存失败, 模板Id or 场景描述 不能为空")
		 	}else{
		 	
			 	var v_reqMethod = $('#reqMethod').text();
			 	var v_sceneHost = $('#sceneHost').val();
			 	var v_sceneApi = $('#sceneApi').val();
			 	var v_modelDescription = $('#modelDescription').val();
			 	var v_mark = $('#mark').val();
	
			 	
		
				 $.ajax({
				 		type: 'POST',
				 		contentType: "application/json; charset=utf-8",
				 		url: '/sceneManage/addScene',
				 	
				 		data: JSON.stringify({"userId":user.uid,
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
				 		alert("保存失败,服务端返回失败")
				 });
			 }
		 		
		 	
		 
		 
		return false;
	})
	
	
	
})