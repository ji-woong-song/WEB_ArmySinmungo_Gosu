package com.gosu.armysinmungo.armysinmungo.web.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter @Setter
public class UserInfoResponse {
    private String userName;
    private String milNum;
    private String rank;
    private String unitBelong;
    private String unitName;
}
