package com.ymt.test.controller;

import javax.annotation.Resource;

import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ymt.test.service.RunResultService;

@RestController
@RequestMapping("/runResult")
public class RunResultController {
	@Resource
	private RunResultService runResultService;
	
	
	@RequestMapping(value="/getResultList",method={RequestMethod.GET})
	public Page getTemplateList(@RequestParam Integer page,@RequestParam Integer size){
		return runResultService.getRunResultRecordList(page-1, size);
	}
}
