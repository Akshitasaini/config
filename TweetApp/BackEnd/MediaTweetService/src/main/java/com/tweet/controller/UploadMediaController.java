package com.tweet.controller;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tweet.entity.UploadMedia;
import com.tweet.service.UploadMediaService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UploadMediaController {

	@Autowired
	UploadMediaService uploadMediaService;
	@Autowired
	KafkaTemplate<String, UploadMedia> kafkaTemplate;
	private static final String TOPIC="media_topic";
	@PostMapping("/media/create/{userId}/{userName}")
	public UploadMedia createMedia(@RequestBody UploadMedia media,@PathVariable int userId, @PathVariable String userName) throws IOException {
		
		 Date date = Calendar.getInstance().getTime();  
         DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd  hh:mm:ss ");  
         String strDate = dateFormat.format(date); 
		
		UploadMedia uploadMedia=new UploadMedia(userId, media.getTitle(), media.getDescription(), media.getTags(),strDate,userName);
		uploadMediaService.createMedia(uploadMedia);
		kafkaTemplate.send(TOPIC,uploadMedia);
		return uploadMedia;
    }

	 @GetMapping("/media/uid/{userId}")
	 public List<UploadMedia> getAllUserMedia(@PathVariable int userId) throws IOException {	 
		 return uploadMediaService.getMediaByUid(userId);
	 }
	 @GetMapping("/media/id/{userId}")
	 public Optional<UploadMedia> getUserMedia(@PathVariable int userId) throws IOException {	 
		 return uploadMediaService.getMediaById(userId);
	 }
 
	
}