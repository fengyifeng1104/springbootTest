package com.ymt.test.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ymt.test.domain.CaseModel;
import com.ymt.test.service.CaseService;

@RestController
@RequestMapping("/caseManage")
public class CaseManageController {
	@Resource
	private CaseService caseService;
	
	@RequestMapping(value="/addCase",method={RequestMethod.POST})
	public String addCase(@RequestBody CaseModel caseModel){
		return caseService.saveCase(caseModel);
	}
	
	@RequestMapping(value="/getCaseById",method={RequestMethod.GET})
	public CaseModel getCaseById(@RequestParam Integer caseId){
		return caseService.getCaseById(caseId);
	}
	
	@RequestMapping(value="/getCaseList",method={RequestMethod.GET})
	public Page getCaseList(@RequestParam Integer page,@RequestParam Integer size){
		return caseService.getCaseList(page-1,size);
	}
	
	@RequestMapping(value="/editCase",method={RequestMethod.POST})
	public String editCase(@RequestBody CaseModel caseModel){
		caseService.editCase(caseModel);
		return "编辑成功";
	}
	
	@RequestMapping(value="/searchCaseByDescription",method={RequestMethod.GET})
	public List<CaseModel> searchCaseByDescription(@RequestParam String caseDescription){
		return caseService.searchCaseByDescription(caseDescription);
	}
	
	
	
/*	@RequestMapping(value="/getCaseList",method={RequestMethod.GET})
	public CaseModel getCaseList(){
		
		return null;
	}*/
	
}
