package com.tweet.entity;


import java.time.LocalDate;
import java.util.Random;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@Document(collection = "Media")
public class UploadMedia {

	@Id
	private int uid;
	private String title;
	private String description;
	private String tags;
	private String date;
	private String username;
	
	
	public UploadMedia( int uid, String title, String description, String tags, String strDate,
			String username) {
		super();
		
		this.uid = uid;
		this.title = title;
		this.description = description;
		this.tags = tags;
		this.date = strDate;
		this.username = username;
	}
	
	  
     
	

	
	
	
	
}
