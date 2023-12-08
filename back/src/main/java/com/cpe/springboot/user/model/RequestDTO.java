package com.cpe.springboot.user.model;

import java.io.Serializable;

public class RequestDTO implements Serializable {
    private static final long serialVersionUID = 1069270118228032171L;
    private com.cpe.springboot.user.model.UserDTO userDTO;
    private String action;

    public UserDTO getUserDTO() {
        return userDTO;
    }

    public String getAction() {
        return action;
    }

    public RequestDTO(com.cpe.springboot.user.model.UserDTO userDTO, String action) {
        this.userDTO = userDTO;
        this.action = action;
    }

    @Override
    public String toString() {
        return display();
    }

    public String display(){
        String result;
        result="Request to " + getAction() + " " + getUserDTO().toString();
        return result;
    }
}