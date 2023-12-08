package com.cpe.springboot.user.userRest.controller;

import com.cpe.springboot.user.model.UserDTO;
import com.cpe.springboot.user.model.UserModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ResponseStatus;

public class UserRestBus {

    final private String okSatusMessage = "Requête prise en compte";

    public ResponseEntity addUser(UserDTO user) {
        // SEND MESSAGE TO BUS
        return( new ResponseEntity( this.okSatusMessage ,HttpStatus.OK) );
    }

    /**
     * Write DB, redirected to bus
     * @param user
     * @return
     */
    public ResponseEntity updateUser(UserDTO user) {
        // send to bus
        return( new ResponseEntity( this.okSatusMessage ,HttpStatus.OK) );
    }

    /**
     * Write DB, redirected to bus
     * @param user
     * @return
     */
    public ResponseEntity updateUser(UserModel user) {
        return( new ResponseEntity( this.okSatusMessage ,HttpStatus.OK) );
    }

    /**
     * Write DB, redirected to bus
     * @param id
     * @return
     */
    public ResponseEntity deleteUser(String id) {
        return( new ResponseEntity( this.okSatusMessage ,HttpStatus.OK) );
    }

}
