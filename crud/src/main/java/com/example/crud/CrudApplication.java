package com.example.crud;

import com.example.crud.dto.UserDto;
import com.example.crud.model.request.UserDetailsRequestModel;
import com.example.crud.model.response.UserResponse;
import com.example.crud.service.UserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;


@SpringBootApplication
public class CrudApplication {

	public static void main(String[] args) {
        SpringApplication.run(CrudApplication.class, args);
    }
    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder(){
	    return new BCryptPasswordEncoder();
    }
    @Bean
     public SpringApplicationContext springApplicationContext(){
	return new SpringApplicationContext();
}

@RestController
@RequestMapping("")
static
class HomeController {
	    @Autowired
        UserService userService;
	@GetMapping(path = "viewProfile/{id}")
	public UserResponse viewProfile(@PathVariable String id){
		UserResponse returnValue = new UserResponse();
		UserDto userProfile =userService.getUserByUserId(id);
		BeanUtils.copyProperties(userProfile,returnValue);
		return returnValue ;
	}

	@PostMapping("/signUp")
	public UserResponse createUser( @RequestBody UserDetailsRequestModel userDetails){
	UserResponse returnValue = new UserResponse();
		UserDto userDto =new UserDto();
		BeanUtils.copyProperties(userDetails, userDto);
		UserDto createdUser =userService.createUser(userDto);
		BeanUtils.copyProperties(createdUser,returnValue);
		return returnValue;

	}


	@GetMapping("/del")
    public String delete(){
	    return "delete called";
    }
}
}
