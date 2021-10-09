package com.gosu.armysinmungo.armysinmungo;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gosu.armysinmungo.armysinmungo.web.dto.request.BoardFreeCommentRequest;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.transaction.annotation.Transactional;

@Disabled
@Transactional
@SpringBootTest
@AutoConfigureMockMvc
public class BoardFreeCommentControllerTest {

    @Autowired
    protected MockMvc mockMvc;

    @Autowired
    protected ObjectMapper objectMapper;

    @Test
    void insertCommentSuccess() throws Exception {

        BoardFreeCommentRequest boardFreeCommentRequest = new BoardFreeCommentRequest();
        boardFreeCommentRequest.setContent("댓글내용 ㅎㅎㅎㅎ");
        boardFreeCommentRequest.setPostNum(4);

        RequestBuilder requestBuilder = MockMvcRequestBuilders.post("/board/free/comment")
        .contentType(MediaType.APPLICATION_JSON)
        .accept(MediaType.APPLICATION_JSON, MediaType.TEXT_PLAIN)
        .content(objectMapper.writeValueAsString(boardFreeCommentRequest));

        mockMvc.perform(requestBuilder)
            .andExpect(MockMvcResultMatchers.status().isOk())
            .andReturn().getResponse();
    
    }

}

