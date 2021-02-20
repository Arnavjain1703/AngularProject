package com.example.crud.service.impl;

import com.example.crud.UserRepository;
import com.example.crud.dto.UserDto;
import com.example.crud.entity.UserEntity;
import com.example.crud.service.UserService;
import com.example.crud.utility.Utility;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    Utility utility;
    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;
    @Override
    public UserDto createUser(UserDto user) {
        if(userRepository.findByEmail(user.getEmail())!=null)throw new RuntimeException(
                "record already exist please login to continue");
        UserEntity userEntity= new UserEntity();
        BeanUtils.copyProperties(user,userEntity);
        userEntity.setEncryptedPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        String publicUserId=utility.generatedUserId(25);
        userEntity.setUserId(publicUserId);
        UserEntity storedUserDetails= userRepository.save(userEntity);
        UserDto returnValue= new UserDto();
        BeanUtils.copyProperties(storedUserDetails, returnValue);

        return returnValue;
    }
    @Override
    public UserDto getUser(String email){
        UserEntity userEntity=userRepository.findByEmail(email);
        if(userEntity== null)throw  new UsernameNotFoundException(email);
        UserDto returnValue = new UserDto();
      BeanUtils.copyProperties(userEntity,returnValue);
      return returnValue;
    }

    @Override
    public UserDto getUserByUserId(String userId) {
        UserDto returnValue=new UserDto();
        UserEntity userEntity = userRepository.findByUserId(userId);
        if(userEntity== null)throw  new UsernameNotFoundException(userId);
        BeanUtils.copyProperties(userEntity,returnValue);
        return returnValue;
    }

    /* load user details from database */
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserEntity userEntity=userRepository.findByEmail(email);
        if(userEntity== null)throw  new UsernameNotFoundException(email);
        return new User(userEntity.getEmail(),userEntity.getEncryptedPassword(),new ArrayList<>());
    }
}
