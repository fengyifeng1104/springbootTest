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
		$.get("/caseManage/getCaseList?page="+pageNum+"&size=2",function(data){
			console.log('catalog data: ', data);
			
			localStorage.page=JSON.stringify({"totalPage":data.totalPages});
			
			$("#case_table tbody").empty()
			var $tbody = $('#case_table tbody');
			var htmlStr = '';
			$.each(data.content, function(i,item){
				htmlStr += '<tr><td><a href="/editcase?cid='+item.caseId+'" >编辑</a></td><td>'+
							item.userId+
							'</td><td>'+
							item.caseId+
							'</td><td>'+
							item.caseDescription+
							'</td><td>'+
							item.modelDescription+
							'</td><td>'+
							item.templateId+
							'</td><td>'+
							item.templateName+
							'</td><td>'+
							item.sceneId+
							'</td><td>'+
							item.sceneDescription+
							'</td><td>'+
							item.extraInputList+
							'</td><td>'+
							item.checkPoinDescription+
							'</td><td>'+
							item.extraCheckList+
							'</td><td>'+
							item.defaultCheckType+
							'</td></tr>';
			});
			$tbody.append(htmlStr);
			
			
	    });
	    $(ev.target).tab('show');	
	    
	    	//分页
		var element = $('#case_page');//获得数据装配的位置
	     var pageN = JSON.parse(localStorage.page).totalPage;
	     element.bootstrapPaginator(pageInit(pageN));	//进行初始化
    
	}
	
	function selectTemplate(ev) {
		ev.preventDefault();
		
		//Url to do 
		$.get("/templateManage/getTemplateList?page=0&size=3",function(data){
			$("#template_table tbody").empty()
			var $tbody = $('#template_table tbody');
			var htmlStr = '';
			//数据在content节点下面
			$.each(data.content, function(i,item){
				htmlStr += '<tr><td><a href="/edittemplate?tid='+item.templateId+'">编辑</a></td><td>'+
							item.userId+
							'</td><td>'+
							item.templateId+
							'</td><td>'+
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
							'</td></tr>';
			});
		$tbody.append(htmlStr);	
		});
		   $(ev.target).tab('show');	
	}
	
	function selectScene(ev) {
		ev.preventDefault();
		//Url to do 
		$.get("/sceneManage/getSceneList?page=0&size=1",function(data){
			$("#scene_table tbody").empty()
			var $tbody = $('#scene_table tbody');
			var htmlStr = '';
			//数据在content节点下面
			$.each(data.content, function(i,item){
				htmlStr += '<tr><td><a href="/editscene?sid='+item.sceneId+'" >编辑</a></td><td>'+
							item.userId+
							'</td><td>'+
							item.sceneId+
							'</td><td>'+
							item.sceneDescription+
							'</td><td>'+
							item.sceneLevel+
							'</td><td>'+
							item.sceneHost+
							'</td><td>'+
							item.sceneApi+
							'</td><td>'+
							item.modelDescription+
							'</td><td>'+
							item.templateId+
							'</td><td>'+
							item.mark+
							'</td></tr>';
			});
		$tbody.append(htmlStr);	
		});
		   $(ev.target).tab('show');	
	}
	
	function pageInit(totalPage){

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
                 selectCase(e,page);
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
	
	$('#templateMge').on('click', selectTemplate);
	$('#templateRefresh').on('click', selectTemplate);
	
	$('#sceneMge').on('click',selectScene );
	$('#sceneRefresh').on('click', selectScene);
	

	
		
	//默认tab
	$('#myTabs > li').eq(localStorage.currentTab).children('a').click();
	$(document).on('click', '[data-ref=detail]', function(ev) {
		localStorage.shouldGet = String(1);
	})
	
	
	


	 
})

