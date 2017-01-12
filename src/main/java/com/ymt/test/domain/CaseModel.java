package com.ymt.test.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class CaseModel {
	@Id @GeneratedValue
	private Integer caseId;
	private Integer userId;
	private String modelDescription;
	private Integer sceneId;
	private String sceneDescription;
	private String caseDescription;
	private String checkPointDescription;
	private Integer templateId;
	private String templateName;
	private String extraInputList;
	private Integer defaultCheckType;
	private String extraCheckList;
	private Boolean bDeleted;
	private Date addTime;
	public Integer getCaseId() {
		return caseId;
	}
	public void setCaseId(Integer caseId) {
		this.caseId = caseId;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public String getModelDescription() {
		return modelDescription;
	}
	public void setModelDescription(String modelDescription) {
		this.modelDescription = modelDescription;
	}
	public Integer getSceneId() {
		return sceneId;
	}
	public void setSceneId(Integer sceneId) {
		this.sceneId = sceneId;
	}
	public String getSceneDescription() {
		return sceneDescription;
	}
	public void setSceneDescription(String sceneDescription) {
		this.sceneDescription = sceneDescription;
	}
	public String getCaseDescription() {
		return caseDescription;
	}
	public void setCaseDescription(String caseDescription) {
		this.caseDescription = caseDescription;
	}

	public String getCheckPointDescription() {
		return checkPointDescription;
	}
	public void setCheckPointDescription(String checkPointDescription) {
		this.checkPointDescription = checkPointDescription;
	}
	public Integer getTemplateId() {
		return templateId;
	}
	public void setTemplateId(Integer templateId) {
		this.templateId = templateId;
	}
	public String getTemplateName() {
		return templateName;
	}
	public void setTemplateName(String templateName) {
		this.templateName = templateName;
	}
	public String getExtraInputList() {
		return extraInputList;
	}
	public void setExtraInputList(String extraInputList) {
		this.extraInputList = extraInputList;
	}
	public Integer getDefaultCheckType() {
		return defaultCheckType;
	}
	public void setDefaultCheckType(Integer defaultCheckType) {
		this.defaultCheckType = defaultCheckType;
	}
	public String getExtraCheckList() {
		return extraCheckList;
	}
	public void setExtraCheckList(String extraCheckList) {
		this.extraCheckList = extraCheckList;
	}
	public Boolean getbDeleted() {
		return bDeleted;
	}
	public void setbDeleted(Boolean bDeleted) {
		this.bDeleted = bDeleted;
	}
	public Date getAddTime() {
		return addTime;
	}
	public void setAddTime(Date addTime) {
		this.addTime = addTime;
	} 
	
}
