package com.cpe.springboot.user.userMicroService.controller;

import com.cpe.springboot.user.model.RequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.EnableJms;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Component;

import javax.jms.Message;

@Component
public class UserMicroServiceListener {

    @Autowired
    JmsTemplate jmsTemplate;

    @JmsListener(destination = "userBus", containerFactory = "connectionFactory")
    public void receiveMessageResult(RequestDTO request, Message message) {

        System.out.println("[BUSLISTENER] [CHANNEL RESULT_BUS_MNG] RECEIVED Request MSG=["+request+"]");

    }
}
