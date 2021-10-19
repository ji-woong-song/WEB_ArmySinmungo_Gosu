package com.gosu.armysinmungo.armysinmungo.web.dto.request;

import lombok.Setter;
import lombok.Getter;

@Getter @Setter
public class LoginRequest {
    private String milNum;
    private String password;
}
