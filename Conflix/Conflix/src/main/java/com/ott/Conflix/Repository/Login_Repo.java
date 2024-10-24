package com.ott.Conflix.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ott.Conflix.Entity.Login;

import jakarta.transaction.Transactional;

@Repository
public interface Login_Repo extends JpaRepository<Login, String>{
	
	@Query(value="select * from Login where user_name= :name", nativeQuery=true)
	public Login findbyname(@Param("name") String name);

	@Modifying
	@Transactional
	@Query(value="update Login set user_password= :np where user_password= :op",nativeQuery=true)
	public int  changepassword(@Param("np") String np,@Param("op") String op);
	
	@Query(value="select * from Login where user_password=:pw",nativeQuery=true)
	public Login selectuserbypassword(@Param("pw") String pw);
}
