package com.tweet.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import org.springframework.stereotype.Repository;

import com.tweet.entity.UploadMedia;

@Repository
public interface UploadMediaRepository extends MongoRepository<UploadMedia, Integer> {

	public List<UploadMedia> getByUid(int uid);
}
