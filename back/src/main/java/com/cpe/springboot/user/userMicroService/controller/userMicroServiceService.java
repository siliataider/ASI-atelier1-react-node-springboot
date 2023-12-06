package com.cpe.springboot.user.userMicroService.controller;

import com.cpe.springboot.card.Controller.CardModelService;
import com.cpe.springboot.card.model.CardModel;
import com.cpe.springboot.common.tools.DTOMapper;
import com.cpe.springboot.user.model.UserDTO;
import com.cpe.springboot.user.model.UserModel;
import com.cpe.springboot.user.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class userMicroServiceService {
    // TODO anotation

    private final UserRepository userRepository;

    private final CardModelService cardModelService;

    public userMicroServiceService(UserRepository userRepository, CardModelService cardModelService) {
        this.userRepository = userRepository;
        this.cardModelService = cardModelService;
    }

    public void addUser(UserDTO user){
        UserModel u = fromUDtoToUModel(user);
        // needed to avoid detached entity passed to persist error
        userRepository.save(u);
        List<CardModel> cardList = cardModelService.getRandCard(5);
        for (CardModel card : cardList) {
            u.addCard(card);
        }
        UserModel uBd = userRepository.save(u);
        // TODO what to do with the result ?
        //return DTOMapper.fromUserModelToUserDTO(uBd);
    }



    /**
     * Write DB, redirected to bus
     * @param user
     * @return
     */
    public UserDTO updateUser(UserDTO user) {
        return null;
    }

    /**
     * Write DB, redirected to bus
     * @param user
     * @return
     */
    public UserDTO updateUser(UserModel user) {
        return null;
    }

    /**
     * Write DB, redirected to bus
     * @param id
     * @return
     */
    public void deleteUser(String id) {
    }

    private UserModel fromUDtoToUModel(UserDTO user) {
        UserModel u = new UserModel(user);
        List<CardModel> cardList = new ArrayList<CardModel>();
        for (Integer cardId : user.getCardList()) {
            Optional<CardModel> card = cardModelService.getCard(cardId);
            if (card.isPresent()) {
                cardList.add(card.get());
            }
        }
        return u;
    }
}
