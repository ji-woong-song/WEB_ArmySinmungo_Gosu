package com.gosu.armysinmungo.armysinmungo.web.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class BoardFreeCommentRequest {
    private Long mension = 0L;
    private String content;
    private int postNum;
}
