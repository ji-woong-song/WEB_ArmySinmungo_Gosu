package com.gosu.armysinmungo.armysinmungo.web.controller;

import com.gosu.armysinmungo.armysinmungo.domain.UserInfo;
import com.gosu.armysinmungo.armysinmungo.domain.BoardCommunicateComment;
import com.gosu.armysinmungo.armysinmungo.domain.BoardCommunicatePost;
import com.gosu.armysinmungo.armysinmungo.service.BoardCommunicateCommentService;
import com.gosu.armysinmungo.armysinmungo.service.BoardCommunicatePostService;
import com.gosu.armysinmungo.armysinmungo.service.UserInfoService;
import com.gosu.armysinmungo.armysinmungo.web.dto.BasicResponse;
import com.gosu.armysinmungo.armysinmungo.web.dto.request.BoardCommunicateCommentRequest;
import com.gosu.armysinmungo.armysinmungo.web.dto.response.BoardCommentResponse;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public class BoardCommunicateCommentController {
    private final BoardCommunicateCommentService boardCommunicateCommentService;
    private final UserInfoService userInfoService;
    private final BoardCommunicatePostService boardCommunicatePostService;

    @Autowired
    public BoardCommunicateCommentController(
        BoardCommunicateCommentService boardCommunicateCommentService, 
        UserInfoService userInfoService,
        BoardCommunicatePostService boardCommunicatePostService) {
        this.boardCommunicateCommentService = boardCommunicateCommentService;
        this.userInfoService = userInfoService;
        this.boardCommunicatePostService = boardCommunicatePostService;
    }

    @PostMapping("/board/communicate/comment")
    public ResponseEntity<BasicResponse> postBoardCommunicateComment(@RequestBody BoardCommunicateCommentRequest boardCommunicateCommentRequest) {

        UserInfo userInfo = userInfoService.findById(54321L);
        BoardCommunicatePost boardCommunicatePost = boardCommunicatePostService.findById(boardCommunicateCommentRequest.getId());

        BoardCommunicateComment boardCommunicateComment =
            BoardCommunicateComment.builder()
            .mension(boardCommunicateCommentRequest.getMension())
            .content(boardCommunicateCommentRequest.getContent())
            .userInfo(userInfo)
            .boardCommunicatePost(boardCommunicatePost)
            .build();

        boardCommunicateCommentService.save(boardCommunicateComment);

        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.CREATED)
                    .message("등록 완료")
                    .build(), HttpStatus.CREATED);
    }

    @GetMapping("/board/communicate/comment/{id}")
    public ResponseEntity<BasicResponse> getBoardCommunicateComment(@PathVariable("id") Long id) {
        
        BoardCommunicatePost boardCommunicatePost = boardCommunicatePostService.findById(id);
        List<BoardCommunicateComment> boardCommunicateCommentList = boardCommunicateCommentService.findByBoardCommunicatePost_Id(boardCommunicatePost.getId());

        List<BoardCommentResponse> boardCommentResponseList = boardCommunicateCommentService.toBoardCommentResponseList(boardCommunicateCommentList);

        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.OK)
                    .message("조회 완료")
                    .data(boardCommentResponseList)
                    .build(), HttpStatus.OK);
    }

    @DeleteMapping("/board/communicate/comment/{id}")
    public ResponseEntity<BasicResponse> deleteBoardCommunicateComment(@PathVariable("id") Long id) {
            
        boardCommunicateCommentService.delete(id);

        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.OK)
                    .message("삭제 완료")
                    .build(), HttpStatus.OK);
    }
}
