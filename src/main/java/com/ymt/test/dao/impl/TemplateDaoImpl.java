package com.ymt.test.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.ymt.test.dao.TemplateDao;
import com.ymt.test.domain.TemplateModel;

@Repository
public class TemplateDaoImpl implements TemplateDao{
	
	@Resource
	private TemplateInterface templateInterface;
	
	@Resource
	private JdbcTemplate jdbcTemplate;

	@Transactional
	public String saveTemplate(TemplateModel templateModel) {
		templateInterface.save(templateModel);
		return "保存成功";
	}

	@Transactional
	public Page getTemplateList(Integer page, Integer size, String sort) {
		Sort sortRequest=new Sort(Sort.Direction.DESC, sort);
		Pageable pageable=new PageRequest(page, size, sortRequest);
		return templateInterface.findAll(pageable);
	}

	public TemplateModel getTemplateById(Integer templateId) {
		return templateInterface.findOne(templateId);
	}

	@Override
	public List<TemplateModel> searchTemplateByName(String templateName) {
		String sql="select * from template_model where template_name like '%"+templateName+"%' limit 10";
		List<TemplateModel> templateModelList=jdbcTemplate.query(sql,new RowMapper<TemplateModel>()
				{
					@Override
					public TemplateModel mapRow(ResultSet rs, int rowNum) throws SQLException {
						TemplateModel templateModel=new TemplateModel();
						
		/*				templateModel.setAddTime(rs.getDate("add_time"));
						templateModel.setAfterToDo(rs.getString("after_to_do"));
						templateModel.setbDeleted(rs.getBoolean("b_deleted"));
						templateModel.setBeforeToDo(rs.getString("before_to_do"));
						templateModel.setInput2SqlMap(rs.getString("input2sql_map"));
						templateModel.setMark(rs.getString("mark"));
						templateModel.setOutput2MongoMap(rs.getString("output2mongo_map"));
						templateModel.setOutput2SqlMap(rs.getString("output2sql_map"));
						templateModel.setSql2MongoMap(rs.getString("sql2mongo_map"));
						templateModel.setTemplateDetail(rs.getString("template_detail"));*/
						
						templateModel.setTemplateId(rs.getInt("template_id"));
						templateModel.setTemplateName(rs.getString("template_name"));
						return templateModel;
					}
			
		});
		return templateModelList;
	}




}
