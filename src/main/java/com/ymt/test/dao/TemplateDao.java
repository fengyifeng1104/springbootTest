package com.ymt.test.dao;

import java.util.List;

import org.springframework.data.domain.Page;

import com.ymt.test.domain.TemplateModel;

public interface TemplateDao {
	public String saveTemplate(TemplateModel templateModel);
	
	public Page getTemplateList(Integer page,Integer size,String sort);
	
	public TemplateModel getTemplateById(Integer templateId);
	
	public List<TemplateModel> searchTemplateByName(String templateName);
	
}
