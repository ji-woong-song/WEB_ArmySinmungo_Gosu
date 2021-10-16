package com.gosu.armysinmungo.armysinmungo.web.dto.request;

import lombok.Setter;
import lombok.Getter;

@Getter @Setter
public class BoardLetterCommentRequest {
    private Long mension = 0L;
    private String content;
    private String milNum;
    private Long id;
}
