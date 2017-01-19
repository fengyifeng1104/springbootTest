package com.ymt.test.controller;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.ymt.test.service.CommandService;
import com.ymt.test.util.HttpClientUtil;

@RestController
@RequestMapping("/CommandCentre")
public class CommandHandlerController {
	@Resource
	private CommandService commandService;
	
	@RequestMapping(value="/batchRunCases",method={RequestMethod.POST})
	public String batchRunCases(@RequestBody JSONArray caseIdList){
		commandService.batchRunCases(caseIdList);
		System.out.println("Controller调用成功");	

		try {
			JSONObject jsonObject = new JSONObject();
			jsonObject.put("caseIdList", caseIdList);
			HttpClientUtil.requestPostJson("http://localhost:9092/RunningController/getRunningDataByCasesIdList",jsonObject );
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "Controller调用成功";
	}
	

}
