package com.ymt.test.service;

import org.springframework.stereotype.Service;

@Service
public class CommandService {
	
	public String batchRunCases(Integer[]  caseIdList){
		System.out.println(caseIdList.length);
		//System.out.println(caseIdList.);
		System.err.println("service调用成功");
		return "运行成功";
	}

}
