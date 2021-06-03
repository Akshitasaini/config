package com.tweet.service;

import java.util.Optional;

import com.tweet.entity.Login;
import com.tweet.entity.User;

public interface UserService {

	Login createLogin(Login login);

	User createUser(User user);

	User findByName(String name);

	Login getByUsername(String name);

	Optional<User> findById(int id);

	Optional<Login> findLoginById(int id);

}
