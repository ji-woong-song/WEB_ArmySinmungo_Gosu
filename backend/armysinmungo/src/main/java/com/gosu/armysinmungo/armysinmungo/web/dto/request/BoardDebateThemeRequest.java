package com.gosu.armysinmungo.armysinmungo.web.dto.request;

import lombok.Getter;

@Getter
public class BoardDebateThemeRequest {
    private String title;
    private String content;
    private String category;
    private String tagged;
    private String milNum;
}
