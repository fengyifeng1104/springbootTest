package com.ymt.test.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ymt.test.domain.SceneModel;
import com.ymt.test.service.SceneService;

@RestController
@RequestMapping("/sceneManage")
public class SceneManageController {
	@Resource
	private SceneService sceneService;
	
	@RequestMapping(value="/addScene" ,method={RequestMethod.POST})
	public String addScene(@RequestBody SceneModel sceneModel){
		sceneService.addScene(sceneModel);
		return"新增场景成功";
	}
	
	@RequestMapping(value="/getSceneList" ,method={RequestMethod.GET})
	public Page getSceneList(@RequestParam Integer page,@RequestParam Integer size){
		return sceneService.getSceneList(page-1, size);
	}
	
	@RequestMapping(value="/editScene" ,method={RequestMethod.POST})
	public String editScene(@RequestBody SceneModel sceneModel){
		sceneService.editScene(sceneModel);
		return "编辑成功";
	}
	
	@RequestMapping(value="/getSceneById",method={RequestMethod.GET})
	public SceneModel getSceneById(@RequestParam Integer sceneId){
		return sceneService.getSceneById(sceneId);
	}
	
	@RequestMapping(value="/searchSceneByDescription",method={RequestMethod.GET})
	public List<SceneModel> searchSceneByDescription(@RequestParam String sceneDescription){
		return sceneService.searchSceneByDescription(sceneDescription);
	}

}
