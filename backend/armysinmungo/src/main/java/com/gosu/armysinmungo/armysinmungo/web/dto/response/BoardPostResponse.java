package com.gosu.armysinmungo.armysinmungo.web.dto.response;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;



@Builder
@Getter @Setter
public class BoardPostResponse {
    private Long id;
    private int postNum;
    private LocalDateTime uploadTime;
    private LocalDateTime changedTime;
    private String category;
    private String title;
    private String content;
    private String tagged;
    private int agreeNum;
    private int disagreeNum;
    private String userName;
}
