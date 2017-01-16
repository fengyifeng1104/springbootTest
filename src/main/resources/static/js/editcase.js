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
		var markup ="<div class='select2-result-repository__title'>场景Id: " + repo.sceneId + " - 场景描述:["+repo.sceneDescription+"]</div>";
      	return markup;
    }

    function formatRepoSelection (repo) {
		$('#select2-sceneId-container').attr('data-id',repo.sceneId)
      return repo.sceneId;
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
			url: "/sceneManage/searchSceneByDescription",
			dataType: 'json',
			delay: 250,
			data: function (params) {
				console.log('params',params);
			  return {
				sceneDescription:params.term, // search term
			  };
			},
				
	
			processResults: function (data, params) {
				var list = data.map(function(item) {
					item.id = item.sceneId;
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
	$.get('/caseManage/getCaseById?caseId='+qs.cid,function(data){
		
		$('#userId').val(data.userId);
		$('#caseId').val(data.caseId);
		$('#caseDescription').val(data.caseDescription);
		$('#select2-sceneId-container').html(data.sceneId);
		$('#select2-sceneId-container').attr('data-id',data.sceneId)
		
		$('#extraInputList').val(data.extraInputList);
		$('#checkPointDescription').val(data.checkPointDescription);
		$('#extraCheckList').val(data.extraCheckList);
		$('#defaultCheckType').val(data.defaultCheckType);	
		
	});
	
	
	
	
	
	
	$('#save_editcase').on('click', function(ev) {
			ev.preventDefault();
		 	
		 	var v_caseDescription = $('#caseDescription').val();
			var v_sceneId = $('#select2-sceneId-container').attr('data-id');
		 	
		 	if (v_sceneId==undefined || v_caseDescription==""){
		 		alert("保存失败, 场景Id or用例描述 不能为空")
		 	}else{
		 	
			 	var v_caseId = $('#caseId').val();
			 	var v_extraInputList = $('#extraInputList').val();
			 	var v_checkPointDescription = $('#checkPointDescription').val();
			 	var v_extraCheckList = $('#extraCheckList').val();
			 	var v_defaultCheckType = $('#defaultCheckType').val();
			 	
		
				 $.ajax({
				 		type: 'POST',
				 		contentType: "application/json; charset=utf-8",
				 		url: '/caseManage/editCase',
				 	
				 		data: JSON.stringify({"userId":user.uid,
				 							"caseId":v_caseId,
				 							"caseDescription":v_caseDescription,
				 							"sceneId":v_sceneId,
				 							"extraInputList":v_extraInputList,
				 							"checkPointDescription":v_checkPointDescription,
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
			}
		 		
		 	
		 
		 
		return false;
	})
	
})
	
	