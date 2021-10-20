package com.gosu.armysinmungo.armysinmungo.web.controller;

import com.gosu.armysinmungo.armysinmungo.domain.UserInfo;
import com.gosu.armysinmungo.armysinmungo.domain.BoardLetterComment;
import com.gosu.armysinmungo.armysinmungo.domain.BoardLetterPost;
import com.gosu.armysinmungo.armysinmungo.service.BoardLetterCommentService;
import com.gosu.armysinmungo.armysinmungo.service.BoardLetterPostService;
import com.gosu.armysinmungo.armysinmungo.service.UserInfoService;
import com.gosu.armysinmungo.armysinmungo.web.dto.BasicResponse;
import com.gosu.armysinmungo.armysinmungo.web.dto.request.BoardLetterCommentRequest;
import com.gosu.armysinmungo.armysinmungo.web.dto.response.BoardCommentResponse;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class BoardLetterCommentController {
    private final BoardLetterCommentService boardLetterCommentService;
    private final UserInfoService userInfoService;
    private final BoardLetterPostService boardLetterPostService;

    @Autowired
    public BoardLetterCommentController(
        BoardLetterCommentService boardLetterCommentService, 
        UserInfoService userInfoService,
        BoardLetterPostService boardLetterPostService) {
        this.boardLetterCommentService = boardLetterCommentService;
        this.userInfoService = userInfoService;
        this.boardLetterPostService = boardLetterPostService;
    }

    @PostMapping("/board/letter/comment")
    public ResponseEntity<BasicResponse> postBoardLetterComment(@RequestBody BoardLetterCommentRequest boardLetterCommentRequest) {

        UserInfo userInfo = userInfoService.findByMilNum(boardLetterCommentRequest.getMilNum());
        BoardLetterPost boardLetterPost = boardLetterPostService.findById(boardLetterCommentRequest.getId());

        BoardLetterComment boardLetterComment =
            BoardLetterComment.builder()
            .mension(boardLetterCommentRequest.getMension())
            .content(boardLetterCommentRequest.getContent())
            .userInfo(userInfo)
            .boardLetterPost(boardLetterPost)
            .build();

        boardLetterCommentService.save(boardLetterComment);

        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.CREATED)
                    .message("등록 완료")
                    .build(), HttpStatus.CREATED);
    }

    @GetMapping("/board/letter/comment/{id}")
    public ResponseEntity<BasicResponse> getBoardLetterComment(@PathVariable("id") Long id) {
        
        BoardLetterPost boardLetterPost = boardLetterPostService.findById(id);
        List<BoardLetterComment> boardLetterCommentList = boardLetterCommentService.findByBoardLetterPost_Id(boardLetterPost.getId());

        List<BoardCommentResponse> boardCommentResponseList = boardLetterCommentService.toBoardCommentResponseList(boardLetterCommentList);

        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.OK)
                    .message("조회 완료")
                    .data(boardCommentResponseList)
                    .build(), HttpStatus.OK);
    }

    @DeleteMapping("/board/letter/comment/{id}")
    public ResponseEntity<BasicResponse> deleteBoardLetterComment(@PathVariable("id") Long id) {
            
        boardLetterCommentService.delete(id);

        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.OK)
                    .message("삭제 완료")
                    .build(), HttpStatus.OK);
    }
}
