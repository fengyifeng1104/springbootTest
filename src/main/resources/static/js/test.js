$(document).ready(function() {
	


	function formatRepo (repo) {
		console.log("ff",repo);
		console.log("gg",repo.mark);
      //if (repo.loading) return repo.text;
			
    
		//var markup ='<span>'+repo.templateName+'</span>';
		var markup ="<div class='select2-result-repository__title'>" + repo.templateName + "(templateId:"+repo.templateId+")</div>";
      	return markup;
    }

    function formatRepoSelection (repo) {
		localStorage.templageSelectedId = repo.templateId;
		localStorage.templageSelectedName = repo.templateName;
      return repo.templateName;
    }
    
    
    
    
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
})
	    
		
