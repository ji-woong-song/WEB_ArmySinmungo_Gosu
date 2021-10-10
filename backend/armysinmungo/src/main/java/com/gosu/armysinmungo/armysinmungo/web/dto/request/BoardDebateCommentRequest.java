package com.gosu.armysinmungo.armysinmungo.web.dto.request;

import lombok.Setter;
import lombok.Getter;

@Getter @Setter

public class BoardDebateCommentRequest {
    private Long mension = 0L;
    private String content;
    private int postNum;
    private String agreeDisagree;
}
