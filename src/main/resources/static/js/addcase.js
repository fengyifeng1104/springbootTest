	function getCookie(name)
		{
		var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
		if(arr=document.cookie.match(reg))
		return unescape(arr[2]);
		else
		return null;
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
	
	
	
	
	$('#save_addcase').on('click', function(ev) {
			ev.preventDefault();
			
			var v_caseDescription = $('#caseDescription').val();
			var v_sceneId = $('#select2-sceneId-container').attr('data-id');
		 	
		 	if (v_sceneId==undefined || v_caseDescription==""){
		 		alert("保存失败, 场景Id or用例描述 不能为空")
		 	}else{
			 	var v_extraInputList = $('#extraInputList').val();
			 	var v_checkPointDescription = $('#checkPointDescription').val();
			 	var v_extraCheckList = $('#extraCheckList').val();
			 	var v_defaultCheckType = $('#defaultCheckType').val();
			 	
		
				 $.ajax({
				 		type: 'POST',
				 		contentType: "application/json; charset=utf-8",
				 		url: '/caseManage/addCase',
				 	
				 		data: JSON.stringify({"userId":user.uid,
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