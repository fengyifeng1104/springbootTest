package com.ymt.test.service;

import java.util.Calendar;
import java.util.List;

import javax.annotation.Resource;
import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.ymt.test.dao.SceneDao;
import com.ymt.test.domain.SceneModel;

@Service
public class SceneService {
	
	
	@Resource
	private SceneDao sceneDao;
	
	//新增
	@Transactional
	public String addScene(SceneModel sceneModel){
		sceneModel.setSceneId(null);
		sceneModel.setAddTime(Calendar.getInstance().getTime());
		sceneModel.setbDeleted(false);
		sceneDao.saveScene(sceneModel);
		return "新增成功";
	}
	
	//查询
	@Transactional
	public Page getSceneList(Integer page,Integer size){
		String sort="sceneId";
		return sceneDao.getSceneList(page, size, sort);
	}
	
	//编辑
	@Transactional
	public String editScene(SceneModel sceneModel){
		sceneModel.setbDeleted(false);
		sceneDao.saveScene(sceneModel);
		return "编辑成功";
	}
	
	//根据Id查询场景信息
	@Transactional
	public SceneModel getSceneById(Integer sceneId){
		return sceneDao.getScenenById(sceneId);
	}
	
	//模糊查询场景
	public List<SceneModel> searchSceneByDescription(String sceneDescription){
		return sceneDao.searchSceneByDescription(sceneDescription);
	}
	
	

}
