package com.ymt.test.controller;

import javax.annotation.Resource;

import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ymt.test.domain.TemplateModel;
import com.ymt.test.service.TemplateService;

@RestController
@RequestMapping("/templateManage")
public class templateManageController {
	
	@Resource
	private TemplateService templateService;
	
	@RequestMapping(value="/addTemplate",method={RequestMethod.POST})
	public String addTemplate(@RequestBody TemplateModel templateModel){
		templateService.addTemplate(templateModel);
		return "添加成功";
	}
	
	@RequestMapping(value="/getTemplateList",method={RequestMethod.GET})
	public Page getTemplateList(@RequestParam Integer page,@RequestParam Integer size){
		return templateService.getTemplateList(page-1, size);
	}
	
	
	@RequestMapping(value="/editTemplate",method={RequestMethod.POST})
	public String editTemplate (@RequestBody TemplateModel templateModel){
		templateService.editTemplate(templateModel);
		return "修改成功";
	}
	
	@RequestMapping(value="/getTemplateById",method={RequestMethod.GET})
	public TemplateModel getTemplateById(@RequestParam Integer templateId){
		return templateService.getTemplateById(templateId);
	}
	
	@RequestMapping(value="/editTemplateDetailById",method={RequestMethod.POST})
	public String  editTemplateDetailById(@RequestBody TemplateModel templateModel){
		templateService.editTemplateDetailById(templateModel);
		return "仅编辑模版详情成功";
	}

}
