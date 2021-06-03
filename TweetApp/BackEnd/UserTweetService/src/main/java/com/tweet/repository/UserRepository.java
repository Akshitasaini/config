package com.tweet.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.tweet.entity.User;

@Repository
public interface UserRepository extends MongoRepository<User, Integer> {

	public User findByUsername(String username);
}
