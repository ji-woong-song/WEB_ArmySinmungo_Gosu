package com.gosu.armysinmungo.armysinmungo.web.dto.response;

import java.time.LocalDateTime;

import java.util.List;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;



@Builder
@Getter @Setter
public class BoardCommentResponse {
    
    private Long id;
    private String content;
    private int agreeNum;
    private int disagreeNum;
    private String userName;
    private LocalDateTime uploadTime;
    private LocalDateTime changedTime;
    private List<BoardCommentResponse> mensionList;
    private Long mension;
    private int postNum;
    private String agreeDisagree;
}
