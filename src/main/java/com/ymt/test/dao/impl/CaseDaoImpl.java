package com.ymt.test.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.management.Query;
import javax.transaction.Transactional;

import org.hibernate.engine.jdbc.spi.ResultSetReturn;
import org.hibernate.validator.constraints.Email;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.simple.ParameterizedBeanPropertyRowMapper;
import org.springframework.stereotype.Repository;

import com.ymt.test.dao.CaseDao;
import com.ymt.test.domain.CaseModel;
import com.ymt.test.domain.Demo;



@Repository
public class  CaseDaoImpl  implements CaseDao{

	private static final Object rowMapper = null;

	private static final int CaseModel = 0;

	@Resource
	private CaseInterface caseInterface;
	
	@Resource
	private JdbcTemplate jdbcTemplate;

	@Transactional
	public String saveCase(CaseModel caseModel) {
		caseInterface.save(caseModel);
		return "保存成功";
	}


	@Transactional
	public Page getCaseList(Integer page,Integer size,String sort) {
		Sort sortRequest=new Sort(Sort.Direction.DESC, sort);
		Pageable pageable=new PageRequest(page, size, sortRequest);
		return caseInterface.findAll(pageable);
	}

	@Transactional
	public CaseModel getCaseById(Integer caseId) {
		String sql="select * from case_model where case_id=?";
		RowMapper<CaseModel> rowMapper=new BeanPropertyRowMapper<CaseModel>(CaseModel.class);
		return jdbcTemplate.queryForObject(sql, rowMapper,caseId);
	}



	@Override
	@Transactional
	public List<CaseModel> searchCaseByDescription(String caseDescription) {
		String sql="select * from case_model where case_description like '%"+caseDescription+"%' limit 10";
		List<CaseModel> casemodelList=jdbcTemplate.query(sql,new RowMapper<CaseModel>()
			{
				@Override
				public CaseModel mapRow(ResultSet rs,int rowNum)throws SQLException
				{
					CaseModel caseModel=new CaseModel();
					
					/*caseModel.setAddTime(rs.getDate("add_time"));
					caseModel.setbDeleted(rs.getBoolean("b_deleted"));
					caseModel.setCaseDescription(rs.getString("case_description"));
					caseModel.setCaseId(rs.getInt("case_id"));
					caseModel.setCheckPointDescription(rs.getString("check_point_description"));
					caseModel.setDefaultCheckType(rs.getInt("default_check_type"));
					caseModel.setExtraCheckList(rs.getString("extra_check_list"));
					caseModel.setExtraInputList(rs.getString("extra_input_list"));
					caseModel.setModelDescription(rs.getString("model_description"));
					caseModel.setSceneDescription(rs.getString("scene_description"));*/
					
					caseModel.setCaseId(rs.getInt("case_id"));
					caseModel.setCaseDescription(rs.getString("case_description"));
					return caseModel;
				}
			});
		return casemodelList;
	}


	@Override
	public List<CaseModel> getCaseListByUserId() {
		// TODO Auto-generated method stub
		return null;
	}



	
	
	
}

