package com.ymt.test.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.annotation.Resource;
import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.ymt.test.dao.SceneDao;
import com.ymt.test.domain.SceneModel;


@Repository
public class SceneDaoImpl implements SceneDao{

	@Resource
	private SceneInterface sceneInterface;
	
	@Resource
	private JdbcTemplate jdbcTemplate;
	
	@Transactional
	public String saveScene(SceneModel sceneModel) {
		sceneInterface.save(sceneModel);
		return "新增成功";
	}

	@Transactional
	public Page getSceneList(Integer page, Integer size, String sort) {
		Sort sortRequest=new Sort(Sort.Direction.DESC, sort);
		Pageable pageable=new PageRequest(page, size, sortRequest);
		return sceneInterface.findAll(pageable);
	}

	public SceneModel getScenenById(Integer sceneId) {
		return sceneInterface.findOne(sceneId);
	}

	@Override
	public List<SceneModel> searchSceneByDescription(String sceneDescription) {
		String sql="select * from scene_model where scene_description like '%"+sceneDescription+"%' limit 10";
		List <SceneModel> sceneModelList=jdbcTemplate.query(sql, new RowMapper<SceneModel>()
				{
					@Override
					public SceneModel mapRow(ResultSet rs, int rowNum) throws SQLException {
						SceneModel sceneModel=new SceneModel();
						
	/*					sceneModel.setAddTime(rs.getDate("add_time"));
						sceneModel.setbDeleted(rs.getBoolean("b_deleted"));
						sceneModel.setMark(rs.getString("mark"));
						sceneModel.setModelDescription(rs.getString("model_description"));
						sceneModel.setReqMethod(rs.getString("req_method"));
						sceneModel.setSceneApi(rs.getString("scene_api"));
						sceneModel.setSceneHost(rs.getString("scene_host"));
						sceneModel.setSceneLevel(rs.getInt("scene_level"));
						sceneModel.setTemplateId(rs.getInt("template_id"));
						sceneModel.setUserId(rs.getInt("user_id"));*/
						
						sceneModel.setSceneId(rs.getInt("scene_id"));
						sceneModel.setSceneDescription(rs.getString("scene_description"));
						return sceneModel;
					}
				});
		return sceneModelList;
	}


}
