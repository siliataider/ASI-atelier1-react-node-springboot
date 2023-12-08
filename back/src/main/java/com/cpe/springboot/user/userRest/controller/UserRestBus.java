package com.cpe.springboot.user.userRest.controller;

import com.cpe.springboot.user.model.RequestDTO;
import com.cpe.springboot.user.model.UserDTO;
import com.cpe.springboot.user.model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jms.annotation.EnableJms;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseStatus;

@Service
public class UserRestBus {

    final private String okSatusMessage = "Requête prise en compte";

    @Autowired
    JmsTemplate jmsTemplate;

    public void sendMsg(RequestDTO msg, String busName) {
        System.out.println("[BUSSERVICE] SEND String Request=["+msg+"] to Bus=["+busName+"]");
        System.out.println(jmsTemplate);
        jmsTemplate.convertAndSend(busName,msg);
    }

    public ResponseEntity addUser(UserDTO user) {
        // SEND MESSAGE TO BUS
        sendMsg(new RequestDTO(user,"add"), "userBus");
        return( new ResponseEntity( this.okSatusMessage ,HttpStatus.OK) );
    }

    /**
     * Write DB, redirected to bus
     * @param user
     * @return
     */
    public ResponseEntity updateUser(UserDTO user) {
        // send to bus
        sendMsg(new RequestDTO(user,"update"), "userBus");
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
        sendMsg(new RequestDTO(new UserDTO(Integer.parseInt(id)),"delete"),
                "userBus");
        return( new ResponseEntity( this.okSatusMessage ,HttpStatus.OK) );
    }

    public ResponseEntity deleteUser(UserDTO user) {
        sendMsg(new RequestDTO(user,"delete"), "userBus");
        return( new ResponseEntity( this.okSatusMessage ,HttpStatus.OK) );
    }


}
