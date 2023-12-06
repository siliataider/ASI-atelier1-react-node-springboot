package com.cpe.springboot.user.userMicroService.controller;

import com.cpe.springboot.user.model.UserDTO;
import com.cpe.springboot.user.userRest.controller.UserService;

public class userMicroServiceController {
    private final userMicroServiceService userService;

    public userMicroServiceController(userMicroServiceService userService){
        this.userService = userService;
    }

    public void root(){
        // Read ESB
        // methode acording to needs


    }

}
