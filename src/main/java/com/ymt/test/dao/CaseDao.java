package com.ymt.test.dao;

import java.util.List;

import org.springframework.data.domain.Page;

import com.ymt.test.domain.CaseModel;



public interface CaseDao{
	
	/*
	 * 添加case
	 */
	public String saveCase(CaseModel caseModel);
	
	/*
	 * 获取所有case的列表
	 */
	public Page getCaseList(Integer page,Integer size,String sort);
	
	public CaseModel getCaseById(Integer caseId);
	
	public List<CaseModel> getCaseListByUserId();
	
	public List<CaseModel> searchCaseByDescription(String caseDescription);
	

	
}
