package com.ymt.test.controller;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONArray;
import com.ymt.test.service.CommandService;

@RestController
@RequestMapping("/CommendCentre")
public class CommandHandlerController {
	@Resource
	private CommandService commandService;
	
	@RequestMapping(value="/batchRunCases",method={RequestMethod.POST})
	public String batchRunCases(@RequestBody JSONArray caseIdList){
		commandService.batchRunCases(caseIdList);
		System.out.println("Controller调用成功");	
		return "Controller调用成功";
	}
	

}
