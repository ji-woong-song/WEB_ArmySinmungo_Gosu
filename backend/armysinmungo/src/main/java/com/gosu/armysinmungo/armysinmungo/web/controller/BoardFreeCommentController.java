package com.gosu.armysinmungo.armysinmungo.web.controller;

import com.gosu.armysinmungo.armysinmungo.domain.UserInfo;
import com.gosu.armysinmungo.armysinmungo.domain.BoardFreeComment;
import com.gosu.armysinmungo.armysinmungo.domain.BoardFreePost;
import com.gosu.armysinmungo.armysinmungo.service.BoardFreeCommentService;
import com.gosu.armysinmungo.armysinmungo.service.BoardFreePostService;
import com.gosu.armysinmungo.armysinmungo.service.UserInfoService;
import com.gosu.armysinmungo.armysinmungo.web.dto.BasicResponse;
import com.gosu.armysinmungo.armysinmungo.web.dto.request.BoardFreeCommentRequest;
import com.gosu.armysinmungo.armysinmungo.web.dto.response.BoardCommentResponse;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
public class BoardFreeCommentController {
    
    private final BoardFreeCommentService boardFreeCommentService;
    private final UserInfoService userInfoService;
    private final BoardFreePostService boardFreePostService;

    @Autowired
    public BoardFreeCommentController(
        BoardFreeCommentService boardFreeCommentService, 
        UserInfoService userInfoService,
        BoardFreePostService boardFreePostService) {
        this.boardFreeCommentService = boardFreeCommentService;
        this.userInfoService = userInfoService;
        this.boardFreePostService = boardFreePostService;
    }

    @PostMapping("/board/free/comment")
    public ResponseEntity<BasicResponse> postBoardFreeComment(@RequestBody BoardFreeCommentRequest boardFreeCommentRequest) {

        UserInfo userInfo = userInfoService.findById(54321L);
        BoardFreePost boardFreePost = boardFreePostService.findById(boardFreeCommentRequest.getId());

        BoardFreeComment boardFreeComment =
            BoardFreeComment.builder()
            .mension(boardFreeCommentRequest.getMension())
            .content(boardFreeCommentRequest.getContent())
            .userInfo(userInfo)
            .boardFreePost(boardFreePost)
            .build();

        boardFreeCommentService.save(boardFreeComment);

        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.CREATED)
                    .message("등록 완료")
                    .build(), HttpStatus.CREATED);
    }

    @GetMapping("/board/free/comment/{id}")
    public ResponseEntity<BasicResponse> getBoardFreeComment(@PathVariable("id") Long id) {
        
        BoardFreePost boardFreePost = boardFreePostService.findById(id);
        List<BoardFreeComment> boardFreeCommentList = boardFreeCommentService.findByBoardFreePost_Id(boardFreePost.getId());

        List<BoardCommentResponse> boardCommentResponseList = boardFreeCommentService.toBoardCommentResponseList(boardFreeCommentList);

        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.OK)
                    .message("조회 완료")
                    .data(boardCommentResponseList)
                    .build(), HttpStatus.OK);
    }

    @DeleteMapping("/board/free/comment/{id}")
    public ResponseEntity<BasicResponse> deleteBoardFreeComment(@PathVariable("id") Long id) {
            
        boardFreeCommentService.delete(id);

        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.OK)
                    .message("삭제 완료")
                    .build(), HttpStatus.OK);
    }

}