package com.ymt.test.service;

import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONArray;

@Service
public class CommandService {
	
	public String batchRunCases(JSONArray  caseIdList){
		//TODO 在这里调用运行的方法
		System.out.println(caseIdList.get(0));
		System.err.println("service调用成功");
		return "运行成功";
	}
	
	
	public String getAllCaseData(){
		
		
		return null;	
	}

}
