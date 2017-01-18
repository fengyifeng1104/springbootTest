package com.ymt.test.service;

import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;

@Service
public class CommandService {
	
	public String batchRunCases(JSONObject  caseIdList){
		//TODO 在这里调用运行的方法
		
		
		System.out.println(caseIdList.get("userId"));
		System.out.println(caseIdList.get("env"));
		System.out.println(caseIdList.get("caseIdList"));

		System.out.println("service调用成功");
		
		return "运行成功";
	}
	
	
	public String getAllCaseData(){
		
		
		return null;	
	}

}
