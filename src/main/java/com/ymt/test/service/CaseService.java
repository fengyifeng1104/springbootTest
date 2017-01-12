package com.ymt.test.service;

import java.util.List;

import javax.annotation.Resource;
import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.ymt.test.dao.CaseDao;
import com.ymt.test.domain.CaseModel;
import com.ymt.test.util.DTO;



@Service
public class CaseService {
	

	@Resource
	private CaseDao caseDao;
	

	//保存case
	@Transactional
	public String saveCase(CaseModel caseModel){
		DTO.CaseDTO(caseModel);
		return caseDao.saveCase(caseModel);
	}
	
	//根据caseId获取单个case详情
	@Transactional
	public CaseModel getCaseById(Integer caseId){
		return caseDao.getCaseById(caseId);
	}
	
	//分页查询case列表
	@Transactional
	public Page getCaseList(Integer page,Integer size){
		String sort="caseId";
		return caseDao.getCaseList(page,size,sort);
	}
	
	//编辑保存case
	@Transactional
	public String editCase(CaseModel caseModel){
		caseModel.setbDeleted(false);
		caseDao.saveCase(caseModel);
		return "编辑成功";
	}
	
	//模糊查询case
	@Transactional
	public List<CaseModel> searchCaseByDescription(String caseDescription){
		return caseDao.searchCaseByDescription(caseDescription);
	}


}
