package com.ymt.test.dao;

import java.util.List;

import org.springframework.data.domain.Page;

import com.ymt.test.domain.SceneModel;

public interface SceneDao {
	public String saveScene(SceneModel sceneModel);
	
	public Page getSceneList(Integer page,Integer size,String sort);
	
	public SceneModel getScenenById(Integer sceneId);
	
	public List<SceneModel> searchSceneByDescription(String sceneDescription);

}
