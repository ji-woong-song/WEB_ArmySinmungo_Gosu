package com.gosu.armysinmungo.armysinmungo.web.dto;

import lombok.*;
import org.springframework.http.HttpStatus;

@Getter @Builder
@AllArgsConstructor
@NoArgsConstructor
public class BasicResponse {
    private HttpStatus status;
    private String message;
    private Object data;
}
