package com.tweet.service;

import java.util.List;
import java.util.Optional;

import com.tweet.entity.UploadMedia;

public interface UploadMediaService {

	UploadMedia createMedia(UploadMedia uploadMedia);

	List<UploadMedia> getMediaByUid(int userId);

	Optional<UploadMedia> getMediaById(int userId);
}
