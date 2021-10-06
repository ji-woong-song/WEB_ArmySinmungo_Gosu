package com.gosu.armysinmungo.armysinmungo.web.controller;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

import com.gosu.armysinmungo.armysinmungo.domain.BoardCommunicatePost;
import com.gosu.armysinmungo.armysinmungo.domain.UserInfo;
import com.gosu.armysinmungo.armysinmungo.service.BoardCommunicatePostService;
import com.gosu.armysinmungo.armysinmungo.service.UserInfoService;
import com.gosu.armysinmungo.armysinmungo.web.dto.response.BoardPostResponse;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.gosu.armysinmungo.armysinmungo.web.dto.BasicResponse;
import com.gosu.armysinmungo.armysinmungo.web.dto.request.BoardCommunicatePostRequest;


@RestController
public class BoardCommunicatePostController {

    private final BoardCommunicatePostService boardCommunicatePostService;
    private final UserInfoService UserInfoService;

    @Autowired
    public BoardCommunicatePostController(BoardCommunicatePostService boardCommunicatePostService, UserInfoService userInfoService) {
        this.boardCommunicatePostService = boardCommunicatePostService;
        this.UserInfoService = userInfoService;
    }

    @GetMapping("/board/communicate/post/all")
    public ResponseEntity<BasicResponse> getBoardCommunicatePostAll() {

        List<BoardCommunicatePost> boardCommunicatePostList = boardCommunicatePostService.findAll();
        
        List<BoardPostResponse> boardPostResponseList = boardCommunicatePostList.stream().map((boardCommunicatePost)-> boardCommunicatePost.toBoardPostResponse()).collect(Collectors.toList());
    
        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.OK)
                    .message("조회 완료")
                    .data(boardPostResponseList)
                    .build(), HttpStatus.OK); 
    }

    @GetMapping("/board/communicate/post/{num}")
    public ResponseEntity<BasicResponse> getBoardCommunicatePost(@PathVariable("num") int num) {

        BoardCommunicatePost boardCommunicatePost = boardCommunicatePostService.findByPostNum(num);

        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.OK)
                    .message("조회 완료")
                    .data(boardCommunicatePost.toBoardPostResponse())
                    .build(), HttpStatus.OK);
    }

    @PostMapping("/board/communicate/post")
    public ResponseEntity<BasicResponse> postBoardCommunicatePost(@RequestBody BoardCommunicatePostRequest boardCommunicatePostRequest) {
        
        int currentCount = boardCommunicatePostService.count();        
        UserInfo userInfo = UserInfoService.findById(54321L);

        BoardCommunicatePost boardCommunicatePost = 
            BoardCommunicatePost.builder()
            .postNum(currentCount+1)
            .title(boardCommunicatePostRequest.getTitle())
            .content(boardCommunicatePostRequest.getContent())
            .category(boardCommunicatePostRequest.getCategory())
            .tagged(boardCommunicatePostRequest.getTagged())
            .userInfo(userInfo)
            .build();

        boardCommunicatePostService.save(boardCommunicatePost);
        
        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.CREATED)
                    .message("등록 완료")
                    .build(), HttpStatus.CREATED);
    }

    @PutMapping("/board/communicate/post/{num}")
    public ResponseEntity<BasicResponse> putBoardCommunicatePost(@RequestBody BoardCommunicatePostRequest boardCommunicatePostRequest, @PathVariable("num") int num) {

        boardCommunicatePostService.update(num, boardCommunicatePostRequest);
        
        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.CREATED)
                    .message("수정 완료")
                    .build(), HttpStatus.CREATED);
    }

    @DeleteMapping("/board/communicate/post/{num}")
    public ResponseEntity<BasicResponse> deleteBoardCommunicatePost(@PathVariable("num") int num) {

        boardCommunicatePostService.delete(num);

        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.OK)
                    .message("삭제 완료")
                    .build(), HttpStatus.OK);
    }

}
