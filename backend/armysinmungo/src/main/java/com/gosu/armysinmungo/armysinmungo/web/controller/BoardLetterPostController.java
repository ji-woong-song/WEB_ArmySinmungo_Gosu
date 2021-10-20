package com.gosu.armysinmungo.armysinmungo.web.controller;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;


import com.gosu.armysinmungo.armysinmungo.domain.BoardLetterPost;
import com.gosu.armysinmungo.armysinmungo.domain.UserInfo;
import com.gosu.armysinmungo.armysinmungo.service.BoardLetterPostService;
import com.gosu.armysinmungo.armysinmungo.service.UserInfoService;
import com.gosu.armysinmungo.armysinmungo.web.dto.response.BoardPostResponse;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.gosu.armysinmungo.armysinmungo.web.dto.BasicResponse;
import com.gosu.armysinmungo.armysinmungo.web.dto.request.BoardLetterPostRequest;


@RestController
public class BoardLetterPostController {

    private final BoardLetterPostService boardLetterPostService;
    private final UserInfoService UserInfoService;

    @Autowired
    public BoardLetterPostController(BoardLetterPostService boardLetterPostService, UserInfoService userInfoService) {
        this.boardLetterPostService = boardLetterPostService;
        this.UserInfoService = userInfoService;
    }

    @GetMapping("/board/letter/post/all")
    public ResponseEntity<BasicResponse> getBoardLetterPostAll() {

        List<BoardLetterPost> boardLetterPostList = boardLetterPostService.findAll();
        
        List<BoardPostResponse> boardPostResponseList = boardLetterPostList.stream().map((boardLetterPost)-> boardLetterPost.toBoardPostResponse()).collect(Collectors.toList());
    
        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.OK)
                    .message("조회 완료")
                    .data(boardPostResponseList)
                    .build(), HttpStatus.OK); 
    }

    @GetMapping("/board/letter/post/{id}")
    public ResponseEntity<BasicResponse> getBoardLetterPost(@PathVariable("id") Long id) {

        BoardLetterPost boardLetterPost = boardLetterPostService.findById(id);

        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.OK)
                    .message("조회 완료")
                    .data(boardLetterPost.toBoardPostResponse())
                    .build(), HttpStatus.OK);
    }

    @PostMapping("/board/letter/post")
    public ResponseEntity<BasicResponse> postBoardLetterPost(@RequestBody BoardLetterPostRequest boardLetterPostRequest) {
         
        UserInfo userInfo = UserInfoService.findByMilNum(boardLetterPostRequest.getMilNum());

        BoardLetterPost boardLetterPost = 
            BoardLetterPost.builder()
            .title(boardLetterPostRequest.getTitle())
            .content(boardLetterPostRequest.getContent())
            .category(boardLetterPostRequest.getCategory())
            .tagged(boardLetterPostRequest.getTagged())
            .userInfo(userInfo)
            .build();

        boardLetterPostService.save(boardLetterPost);
        
        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.CREATED)
                    .message("등록 완료")
                    .build(), HttpStatus.CREATED);
    }

    @PutMapping("/board/letter/post/{id}")
    public ResponseEntity<BasicResponse> putBoardLetterPost(@RequestBody BoardLetterPostRequest boardLetterPostRequest, @PathVariable("id") Long id) {

        boardLetterPostService.update(id, boardLetterPostRequest);
        
        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.CREATED)
                    .message("수정 완료")
                    .build(), HttpStatus.CREATED);
    }

    @DeleteMapping("/board/letter/post/{id}")
    public ResponseEntity<BasicResponse> deleteBoardLetterPost(@PathVariable("id") Long id) {

        boardLetterPostService.delete(id);

        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.OK)
                    .message("삭제 완료")
                    .build(), HttpStatus.OK);
    }

}
