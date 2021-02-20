package com.example.crud.security;

import com.example.crud.SpringApplicationContext;
import com.example.crud.dto.UserDto;
import com.example.crud.model.request.UserLoginRequest;
import com.example.crud.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.Authentication;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

public class AuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private final AuthenticationManager authenticationManager;

    public AuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }
    @Override
    public Authentication attemptAuthentication(HttpServletRequest req, HttpServletResponse res)throws AuthenticationException{
        try{
            UserLoginRequest creds =new ObjectMapper().readValue(req.getInputStream(),UserLoginRequest.class);
            return authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    creds.getEmail(),creds.getPassword(),new ArrayList<>()));
        }
        catch(IOException e){
            throw new RuntimeException();
        }
    }
    protected void successfulAuthentication(HttpServletRequest req , HttpServletResponse res, FilterChain chain,
                                            Authentication auth)throws IOException, ServletException{
        String username = ((User) auth.getPrincipal()).getUsername();

        String token = Jwts.builder().setSubject(username).setExpiration(
                new Date(System.currentTimeMillis()+ SecurityConstant.EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512,SecurityConstant.TOKEN_SECRET).compact();
        UserService userService= (UserService) SpringApplicationContext.getBean("userServiceImpl");
        UserDto userDto=userService.getUser(username);
        res.addHeader(SecurityConstant.HEADER_STRING,SecurityConstant.TOKEN_PREFIX+token);
        res.addHeader("UserId",userDto.getUserId());
    }
}
