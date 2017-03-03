function getCookie(name)
		{
		var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
		if(arr=document.cookie.match(reg))
		return unescape(arr[2]);
		else
		return null;
		}
//点击tab响应事件
	function selectCase(ev,pageNum) {
		ev.preventDefault();
		//Url to do 
		pageNum = pageNum ||  1;
		$.get("/caseManage/getCaseList?page="+pageNum+"&size=10",function(data){
			console.log('catalog data: ', data);
			
			localStorage.page_case=JSON.stringify({"totalPage_case":data.totalPages});
			
			$("#case_table tbody").empty();
			var $tbody = $('#case_table tbody');
			var htmlStr = '';
			$.each(data.content, function(i,item){
				htmlStr += '<tr><td><input class="checkbox_selectcase" data-id='+item.caseId +' type="checkbox"></td><td><a href="/editcase?cid='+item.caseId+'" target="_blank">'+
							item.caseId+
							'</a></td><td>'+
							item.caseDescription+
							'</td><td><a href="/editscene?sid='+item.sceneId+'" target="_blank" >'+
							item.sceneId+
							'</a></td><td>'+
							item.extraInputList+
							'</td><td>'+
							item.checkPointDescription+
							'</td><td>'+
							item.extraCheckList+
							'</td><td>'+
							item.defaultCheckType+
							'</td><td>'+
							item.userId+
							'</td></tr>';
			});
			$tbody.append(htmlStr);
			
			
	    });
	    $(ev.target).tab('show');	
	    
	    	//分页
		 var element = $('#case_page');//获得数据装配的位置
	     var pageN = JSON.parse(localStorage.page_case).totalPage_case;
	     element.bootstrapPaginator(pageInit('selectCase',pageN));	//进行初始化
    
	}
	
	function selectTemplate(ev,pageNum) {
		ev.preventDefault();
		pageNum = pageNum ||  1;
		//Url to do 
		$.get("/templateManage/getTemplateList?page="+pageNum+"&size=10",function(data){
			localStorage.page_template=JSON.stringify({"totalPage_template":data.totalPages});
			$("#template_table tbody").empty();
			var $tbody = $('#template_table tbody');
			var htmlStr = '';
			//数据在content节点下面
			$.each(data.content, function(i,item){
				htmlStr += '<tr><td><a href="/edittemplate?tid='+item.templateId+'" target="_blank">'+
							item.templateId+
							'</a></td><td>'+
							item.templateName+
							'<td><a data-ref="detail" href="/editjson?tid='+item.templateId+'" target="_blank">单击查看</a></td><td>'+
							item.mark+
							'</td><td>'+
							item.afterToDo+
							'</td><td>'+
							item.beforeToDo+
							'</td><td>'+
							item.input2SqlMap+
							'</td><td>'+
							item.output2SqlMap+
							'</td><td>'+
							item.sql2MongoMap+
							'</td><td>'+
							item.output2MongoMap+
							'</td><td>'+
							item.userId+
							'</td></tr>';
			});
		$tbody.append(htmlStr);	
		});
		   $(ev.target).tab('show');
		    var element = $('#template_page');//获得数据装配的位置
	        var pageN = JSON.parse(localStorage.page_template).totalPage_template;
	       element.bootstrapPaginator(pageInit('selectTemplate',pageN));	//进行初始化	
	}
	
	function selectScene(ev,pageNum) {
		ev.preventDefault();
		pageNum = pageNum ||  1;
		//Url to do 
		$.get("/sceneManage/getSceneList?page="+pageNum+"&size=10",function(data){
			localStorage.page_scene=JSON.stringify({"totalPage_scene":data.totalPages});
			$("#scene_table tbody").empty();
			var $tbody = $('#scene_table tbody');
			var htmlStr = '';
			//数据在content节点下面
			$.each(data.content, function(i,item){
				htmlStr += '<tr><td><a href="/editscene?sid='+item.sceneId+'" target="_blank" >'+
							item.sceneId+
							'</a></td><td>'+
							item.sceneDescription+
							'</td><td>'+
							item.reqMethod+
							'</td><td>'+
							item.sceneHost+
							'</td><td>'+
							item.sceneApi+
							'</td><td>'+
							item.modelDescription+
							'</td><td><a href="/edittemplate?tid='+item.templateId+'" target="_blank">'+
							item.templateId+
							'</a></td><td>'+
							item.mark+
							'</td><td>'+
							item.userId+
							'</td></tr>';
			});
		$tbody.append(htmlStr);	
		});
		   $(ev.target).tab('show');
		    var element = $('#scene_page');//获得数据装配的位置
	     	var pageN = JSON.parse(localStorage.page_scene).totalPage_scene;
	     element.bootstrapPaginator(pageInit('selectScene',pageN));	//进行初始化
    	
	}
	
	
	function selectResult(ev,pageNum) {
		ev.preventDefault();
		//Url to do 
		pageNum = pageNum ||  1;
		$.get("/runResult/getResultList?page="+pageNum+"&size=20",function(data){
			console.log('runresult data: ', data);
			
			localStorage.page_case=JSON.stringify({"totalPage_result":data.totalPages});
			
			$("#runResult_table tbody").empty();
			var $tbody = $('#runResult_table tbody');
			var htmlStr = '';
			$.each(data.content, function(i,item){
				htmlStr += '<tr><td>'+
							item.resultId+
							'</td><td><a href="http://better.ymatou.com/home/testsuiteresult.html?tpid='+item.passId+'" target="_blank" >'+
							item.hostName+
							'</a></td><td>'+
							item.runRecordName+
							'</td><td>'+
							item.uerName+
							'</td></tr>';
			});
			$tbody.append(htmlStr);
			
			
	    });
	    $(ev.target).tab('show');	
	    
	    	//分页
		 var element = $('#runResult_page');//获得数据装配的位置
	     var pageN = JSON.parse(localStorage.page_case).totalPage_result;
	     element.bootstrapPaginator(pageInit('selectResult',pageN));	//进行初始化
    
	}
	
	
	
	
	function pageInit(funType,totalPage){

		var nP = 5
		if (totalPage){
			nP = totalPage;
		}
		//初始化所需数据
       var options = {
       		showNext:false,
       		next:false,
       		showPrevious:false,
       		prev:false,
            bootstrapMajorVersion:3,//版本号。3代表的是第三版本
            currentPage: 1, //当前页数
            numberOfPages: nP, //显示页码数标个数
            totalPages:totalPage, //总共的数据所需要的总页数
            itemTexts: function (type, page, current) {  
            		//图标的更改显示可以在这里修改。
            switch (type) {  
                    case "first":  
                        return "首页";  
                    case "last":  
                        return "末页";  
                    case "page":  
                        return  page;  
                }                 
            }, 
            tooltipTitles: function (type, page, current) {
				//如果想要去掉页码数字上面的预览功能，则在此操作。例如：可以直接return。
                switch (type) {
		            case "first":
		                return "Go to first page";
		            case "last":
		                return "Go to last page";
		            case "page":
		                return (page === current) ? "Current page is " + page : "Go to page " + page;
		        }
            },
            onPageClicked: function (e, originalEvent, type, page) {
            	$('.pagination li > a:empty').hide();  
            	if (funType=='selectCase'){
                 	selectCase(e,page);
                }
                else if (funType=='selectTemplate'){
                	selectTemplate(e, page);
                }
                else if (funType=='selectScene'){
                	selectScene(e, page);
                }
                 else if (funType=='selectResult'){
                	selectResult(e, page);
                }
            }
        };
        return options;
	}
$(function() {

	
	//userid  注册
	window.localStorage.user = JSON.stringify({uid: 3383});
	var user = JSON.parse(localStorage.user) || {uid: 0};
	$('#curUserId').html(user.uid);
	
	
	//current tab 设置默认值
	window.localStorage.currentTab = localStorage.currentTab || 0;

	$('#myTabs > li > a').on('click', function(ev) {
		var index = $(this).parent().index();
		localStorage.currentTab = index;
	})
	
	
	
	$('#caseMge').on('click', selectCase);
	$('#caseRefresh').on('click', selectCase);
	
	$('#caseExecute').on('click',function(ev){
		ev.preventDefault();
		var selector = $('input:checkbox').map(function(){ 
		    return this.checked ? this.getAttribute('data-id') : ''; 
		}).get().filter(String);
		console.log(selector);
	
		if (selector!=""){
			 $.ajax({
				 		type: 'POST',
				 		contentType: "application/json; charset=utf-8",
				 		url: '/CommandCentre/batchRunCases',
				 	
				 		data: JSON.stringify({"userId":user.uid,
				 							"env":"sit",
				 							"caseIdList":selector
				 							}),
				 		dataType : 'json'
				 	}).done(function(data) {
				 		 alert("执行成功");
				 	}).fail(function(data) {
				 		alert("执行失败")
				 });
		
		
		}else{
			alert("请选择执行的case");
			
		}
	
	})
	
	$('#templateMge').on('click', selectTemplate);
	$('#templateRefresh').on('click', selectTemplate);
	
	$('#sceneMge').on('click',selectScene );
	$('#sceneRefresh').on('click', selectScene);
	
	$('#resultRecord').on('click', selectResult);
	$('#runResultRefresh').on('click', selectResult);
	
		
	//默认tab
	$('#myTabs > li').eq(localStorage.currentTab).children('a').click();
	$(document).on('click', '[data-ref=detail]', function(ev) {
		localStorage.shouldGet = String(1);
	})
	
	
	$(document).on('change', '.checkbox_selectcase', function(ev) {
		$(this).prop('checked');
		console.log($(this).prop('checked'))
	})

	
	 
})
