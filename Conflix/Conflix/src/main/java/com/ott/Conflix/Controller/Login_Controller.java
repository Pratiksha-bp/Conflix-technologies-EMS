package com.ott.Conflix.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ott.Conflix.Entity.Login;
import com.ott.Conflix.service.Login_Service;

@CrossOrigin(allowedHeaders = "*")
@RestController
public class Login_Controller {

	@Autowired
	private Login_Service service;
	
	@PostMapping("/Add-user")
	public String adduser(@RequestBody Login login)
	{
		service.Adduser(login);
		
		
		return "the user with the name and id : "+login.getUser_id()+ " " +login.getUser_name()+ " is saved successfully";
	}
	
	    @GetMapping("/Get-user-by-name")
		public Login getuserwithname(@RequestParam("name") String name) 
		{
			return service.Find_user_by_name(name);
		}
	
	
	@DeleteMapping("/Delete-by-id")
	public String deleteuserwithname(@RequestParam("id") String id)
	{
		service.deletebyid(id);
		return "the user with user id :"+id+" is deleted successfully";
	}
	
	    @PutMapping("/update-user-names")
		public String updateuserpassword(@RequestParam("np") String np, @RequestParam("op") String op)
		{
			service.updatepassword(np, op);
			
			String str="";
			for(int i=0;i<np.length();i++)
			{
				str+="*";
			}
			return "your password changed from: "+op+"to :"+str;
		}
	    
	    @PutMapping("/update-user-names-with-object")
	    public String updateuserpassword(@RequestBody Login login)
	    {
	    	service.updatepassword2(login);
	    	return("the user "+login.getUser_name()+" is updated successfully");
	    }
	    
	    @GetMapping("/get-all")
	    public List<Login> get()
	    {
	    	return(service.getall1());
	    }
	    @GetMapping("/get-user-by-password")
		public Login getuserbypassword(@RequestParam("pw") String pw)
		{
			return(service.getbypassword(pw));
		}
		
	   
	}
	
