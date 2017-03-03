package com.ymt.test.service;

import javax.annotation.Resource;
import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.ymt.test.dao.RunResultRecordDao;

@Service
public class RunResultService {
	@Resource
	private RunResultRecordDao runResultRecordDao;
	

	@Transactional
	public Page getRunResultRecordList(Integer page,Integer size){
		String sort="resultId";
		return runResultRecordDao.getRunResultRecordList(page,size,sort);
	}
	
}
