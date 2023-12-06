package com.cpe.springboot.user.userRest.controller;

import com.cpe.springboot.user.model.UserDTO;
import com.cpe.springboot.user.model.UserModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class UserRestBus {

    final private String okSatusMessage = "Requete prise en compt";

    public ResponseEntity addUser(UserDTO user) {
        // SEND MESSAGE TO BUS
        return( new ResponseEntity( this.okSatusMessage ,HttpStatus.OK) );
    }

    /**
     * Write DB, redirected to bus
     * @param user
     * @return
     */
    public boolean updateUser(UserDTO user) {
        return false;
    }

    /**
     * Write DB, redirected to bus
     * @param user
     * @return
     */
    public boolean updateUser(UserModel user) {
        return false;
    }

    /**
     * Write DB, redirected to bus
     * @param id
     * @return
     */
    public boolean deleteUser(String id) {
        return false;
    }

}
