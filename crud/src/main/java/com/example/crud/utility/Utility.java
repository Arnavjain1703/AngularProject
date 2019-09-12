package com.example.crud.utility;

import org.springframework.stereotype.Component;

import java.security.SecureRandom;
import java.util.Random;

@Component
public class Utility {
    private final Random RANDOM=new SecureRandom();
    private final String ALPHABET="kfsdcmkmwklmDKMSM459086450kmlkKSMD";
    public String generatedUserId(int length){
        return generatedRandomString(length);

    }
    private String generatedRandomString(int length){
        StringBuilder returnValue=new  StringBuilder(length);
        for(int i=0;i<length;i++){
            returnValue.append(ALPHABET.charAt(RANDOM.nextInt(ALPHABET.length())));
        }
        return new String(returnValue);
    }
}
