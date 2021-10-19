package com.gosu.armysinmungo.armysinmungo.web.controller;


import com.gosu.armysinmungo.armysinmungo.domain.UserInfo;
import com.gosu.armysinmungo.armysinmungo.domain.enums.AgreeDisagree;
import com.gosu.armysinmungo.armysinmungo.domain.BoardDebateComment;
import com.gosu.armysinmungo.armysinmungo.domain.BoardDebateTheme;
import com.gosu.armysinmungo.armysinmungo.service.BoardDebateCommentService;
import com.gosu.armysinmungo.armysinmungo.service.BoardDebateThemeService;
import com.gosu.armysinmungo.armysinmungo.service.UserInfoService;
import com.gosu.armysinmungo.armysinmungo.web.dto.BasicResponse;
import com.gosu.armysinmungo.armysinmungo.web.dto.request.BoardDebateCommentRequest;
import com.gosu.armysinmungo.armysinmungo.web.dto.response.BoardCommentResponse;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
public class BoardDebateCommentController {
    private final BoardDebateCommentService boardDebateCommentService;
    private final UserInfoService userInfoService;
    private final BoardDebateThemeService boardDebateThemeService;

    @Autowired
    public BoardDebateCommentController(
        BoardDebateCommentService boardDebateCommentService, 
        UserInfoService userInfoService,
        BoardDebateThemeService boardDebateThemeService) {
        this.boardDebateCommentService = boardDebateCommentService;
        this.userInfoService = userInfoService;
        this.boardDebateThemeService = boardDebateThemeService;
    }

    @PostMapping("/board/debate/comment")
    public ResponseEntity<BasicResponse> postBoardDebateComment(@RequestBody BoardDebateCommentRequest boardDebateCommentRequest) {

        UserInfo userInfo = userInfoService.findById(54321L);
        BoardDebateTheme boardDebateTheme = boardDebateThemeService.findById(boardDebateCommentRequest.getId());

        BoardDebateComment boardDebateComment =
            BoardDebateComment.builder()
            .mension(boardDebateCommentRequest.getMension())
            .content(boardDebateCommentRequest.getContent())
            .agreeDisagree(AgreeDisagree.valueOf(boardDebateCommentRequest.getAgreeDisagree()))
            .userInfo(userInfo)
            .boardDebateTheme(boardDebateTheme)
            .build();

        boardDebateCommentService.save(boardDebateComment);

        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.CREATED)
                    .message("등록 완료")
                    .build(), HttpStatus.CREATED);
    }

    @GetMapping("/board/debate/comment/{id}")
    public ResponseEntity<BasicResponse> getBoardDebateComment(@PathVariable("id") Long id) {
        
        BoardDebateTheme boardDebateTheme = boardDebateThemeService.findById(id);
        List<BoardDebateComment> boardDebateCommentList = boardDebateCommentService.findByBoardDebateTheme_Id(boardDebateTheme.getId());

        List<BoardCommentResponse> boardCommentResponseList = boardDebateCommentService.toBoardCommentResponseList(boardDebateCommentList);

        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.OK)
                    .message("조회 완료")
                    .data(boardCommentResponseList)
                    .build(), HttpStatus.OK);
    }

    @DeleteMapping("/board/debate/comment/{id}")
    public ResponseEntity<BasicResponse> deleteBoardDebateComment(@PathVariable("id") Long id) {
            
        boardDebateCommentService.delete(id);

        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.OK)
                    .message("삭제 완료")
                    .build(), HttpStatus.OK);
    }
}
