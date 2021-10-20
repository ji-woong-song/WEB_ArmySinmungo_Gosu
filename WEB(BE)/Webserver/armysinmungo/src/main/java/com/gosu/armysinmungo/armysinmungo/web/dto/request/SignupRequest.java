package com.gosu.armysinmungo.armysinmungo.web.dto.request;

import lombok.Setter;
import lombok.Getter;

@Getter @Setter
public class SignupRequest {
    private String milNum;
    private String password;
    private String passwordCheck;
    private String userName;
}
