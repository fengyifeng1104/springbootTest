package com.ymt.test.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class SceneModel {
	@Id @GeneratedValue
	private Integer sceneId;
	private String modelDescription;
	private String sceneDescription;
	private String sceneHost;
	private String sceneApi;
	private Integer templateId;
	private String templateName;
	private Date addTime;
	private Integer userId;
	private boolean bDeleted;
	private Integer sceneLevel;
	private String ReqMethod;

	private String mark;
	public Integer getSceneId() {
		return sceneId;
	}
	public void setSceneId(Integer sceneId) {
		this.sceneId = sceneId;
	}
	public String getModelDescription() {
		return modelDescription;
	}
	public void setModelDescription(String modelDescription) {
		this.modelDescription = modelDescription;
	}
	public String getSceneDescription() {
		return sceneDescription;
	}
	public void setSceneDescription(String sceneDescription) {
		this.sceneDescription = sceneDescription;
	}
	public String getSceneHost() {
		return sceneHost;
	}
	public void setSceneHost(String sceneHost) {
		this.sceneHost = sceneHost;
	}
	public String getSceneApi() {
		return sceneApi;
	}
	public void setSceneApi(String sceneApi) {
		this.sceneApi = sceneApi;
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
	public Date getAddTime() {
		return addTime;
	}
	public void setAddTime(Date addTime) {
		this.addTime = addTime;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public boolean isbDeleted() {
		return bDeleted;
	}
	public void setbDeleted(boolean bDeleted) {
		this.bDeleted = bDeleted;
	}
	public Integer getSceneLevel() {
		return sceneLevel;
	}
	public void setSceneLevel(Integer sceneLevel) {
		this.sceneLevel = sceneLevel;
	}
	public String getMark() {
		return mark;
	}
	public void setMark(String mark) {
		this.mark = mark;
	}
	public String getReqMethod() {
		return ReqMethod;
	}
	public void setReqMethod(String reqMethod) {
		ReqMethod = reqMethod;
	}
	
	

}
