package com.ymt.test.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.ymt.test.util.HttpClientUtil;

@Service
public class CommandService {
	
	@Value("${spring.executeserver.url}")
	private String serverUrl;
	
	
	public String batchRunCases(JSONObject  caseIdList){
		//TODO 在这里调用运行的方法
		
		
		System.out.println(caseIdList.get("userId"));
		System.out.println(caseIdList.get("env"));
		System.out.println(caseIdList.get("caseIdList"));

		System.out.println("service调用成功");
		
		try {
			JSONObject jsonObject = new JSONObject();
			jsonObject.put("caseIdList", caseIdList.getJSONArray("caseIdList"));
//			HttpClientUtil.requestPostJson("http://localhost:9092/RunningController/getRunningDataByCasesIdList",jsonObject );
			HttpClientUtil.requestPostJson(serverUrl +"/RunningController/getRunningDataByCasesIdList",jsonObject );
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return "运行成功";
	}
	
	
	public String getAllCaseData(){
		
		
		return null;	
	}

}
