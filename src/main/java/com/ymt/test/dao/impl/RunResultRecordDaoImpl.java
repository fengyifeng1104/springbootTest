package com.ymt.test.dao.impl;

import javax.annotation.Resource;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Repository;

import com.ymt.test.dao.RunResultRecordDao;
import com.ymt.test.domain.RunResultRecordModel;



@Repository
public class RunResultRecordDaoImpl implements RunResultRecordDao{
	@Resource
	private RunResultRecordInterface runResultRecordInterface;
	
	@Override
	public Page<RunResultRecordModel> getRunResultRecordList(Integer page, Integer size, String sort) {
		Sort sortRequest=new Sort(Sort.Direction.DESC, sort);
		Pageable pageable=new PageRequest(page, size, sortRequest);
		Page<RunResultRecordModel> ret = runResultRecordInterface.findAll(pageable);
		return ret;
	}



}
