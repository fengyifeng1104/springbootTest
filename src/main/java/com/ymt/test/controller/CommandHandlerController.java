
package com.ymt.test.controller;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.ymt.test.service.CommandService;

@RestController
@RequestMapping("/CommandCentre")
public class CommandHandlerController {
	@Resource
	private CommandService commandService;
	
	@RequestMapping(value="/batchRunCases",method={RequestMethod.POST})
	public String batchRunCases(@RequestBody JSONObject caseIdList){
		
			
		System.out.println(caseIdList.get("userId"));
		System.out.println(caseIdList.get("env"));
		System.out.println(caseIdList.get("caseIdList"));
		System.out.println("Controller调用成功  ");
		
		commandService.batchRunCases(caseIdList);
		return "Controller调用成功";
	}
	

}
