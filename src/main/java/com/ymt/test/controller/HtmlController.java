package com.ymt.test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HtmlController {
	
	
    //get 参数在？
	
	
    //测试用例编辑界面
    @RequestMapping("/editcase")
    public String editcase(@RequestParam("cid") String cid, Model model) {
        model.addAttribute("cid", cid);
        return "editcase";
    }
    
    //测试用例添加界面
    @RequestMapping("/addcase")
    public String addcase() {
        return "addcase";
    }
    
    //测试场景编辑界面
    @RequestMapping("/editscene")
    public String editscene(@RequestParam("sid") String sid, Model model) {
        model.addAttribute("sid", sid);
        return "editscene";
    }
    
    
    //测试场景添加界面
    @RequestMapping("/addscene")
    public String addscene() {
        return "addscene";
    }
    
    
    
    //测试模板编辑界面
    @RequestMapping("/edittemplate")
    public String edittemplate(@RequestParam("tid") String tid, Model model) {
        model.addAttribute("tid", tid);
        return "edittemplate";
    }
    
    
    //json模板编辑界面
    @RequestMapping("/editjson")
    public String editjson(@RequestParam("tid") String tid, Model model) {
        model.addAttribute("tid", tid);
        return "editjson";
    }
    
    
    //主界面
    @RequestMapping("/main")
    public String indexPage() {return "main";}
    
}

