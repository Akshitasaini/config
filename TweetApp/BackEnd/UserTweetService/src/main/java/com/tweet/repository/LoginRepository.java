package com.tweet.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.tweet.entity.Login;

public interface LoginRepository extends MongoRepository<Login, Integer>{

	public Login getByUsername(String username);
	public Login findByUsernameAndPassword(String username, String password);
}
