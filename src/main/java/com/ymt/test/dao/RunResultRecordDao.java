package com.ymt.test.dao;

import org.springframework.data.domain.Page;



public interface RunResultRecordDao{
		public Page getRunResultRecordList(Integer page,Integer size,String sort);
}
