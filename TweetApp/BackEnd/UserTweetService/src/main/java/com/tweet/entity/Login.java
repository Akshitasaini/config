package com.tweet.entity;

import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "Login")
public class Login {

	@Id
	private int id;
	private String username;
	private String password;
	private String profilepic;
	
	
		
	
}
