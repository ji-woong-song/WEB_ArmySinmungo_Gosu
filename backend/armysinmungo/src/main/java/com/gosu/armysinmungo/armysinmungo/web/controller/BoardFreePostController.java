package com.gosu.armysinmungo.armysinmungo.web.controller;

import java.util.List;
import java.util.stream.Collectors;

import com.gosu.armysinmungo.armysinmungo.domain.BoardFreePost;
import com.gosu.armysinmungo.armysinmungo.domain.UserInfo;
import com.gosu.armysinmungo.armysinmungo.service.BoardFreePostService;
import com.gosu.armysinmungo.armysinmungo.service.UserInfoService;
import com.gosu.armysinmungo.armysinmungo.web.dto.BasicResponse;
import com.gosu.armysinmungo.armysinmungo.web.dto.request.BoardFreePostRequest;
import com.gosu.armysinmungo.armysinmungo.web.dto.response.BoardPostResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


@RestController
public class BoardFreePostController {

    private final BoardFreePostService boardFreePostService;
    private final UserInfoService UserInfoService;

    @Autowired
    public BoardFreePostController(BoardFreePostService boardFreePostService, UserInfoService userInfoService) {
        this.boardFreePostService = boardFreePostService;
        this.UserInfoService = userInfoService;
    }

    @GetMapping("/board/free/post/all")
    public ResponseEntity<BasicResponse> getBoardFreePostAll() {

        List<BoardFreePost> boardFreePostList = boardFreePostService.findAll();
        
        List<BoardPostResponse> boardPostResponseList = boardFreePostList.stream().map((boardFreePost)-> boardFreePost.toBoardPostResponse()).collect(Collectors.toList());
    
        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.OK)
                    .message("조회 완료")
                    .data(boardPostResponseList)
                    .build(), HttpStatus.OK); 
    }

    @GetMapping("/board/free/post/{id}")
    public ResponseEntity<BasicResponse> getBoardFreePost(@PathVariable("id") Long id) {

        BoardFreePost boardFreePost = boardFreePostService.findById(id);

        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.OK)
                    .message("조회 완료")
                    .data(boardFreePost.toBoardPostResponse())
                    .build(), HttpStatus.OK);
    }

    @PostMapping("/board/free/post")
    public ResponseEntity<BasicResponse> postBoardFreePost(@RequestBody BoardFreePostRequest boardFreePostRequest) {
              
        UserInfo userInfo = UserInfoService.findByMilNum(boardFreePostRequest.getMilNum());

        BoardFreePost boardFreePost = 
            BoardFreePost.builder()
            .title(boardFreePostRequest.getTitle())
            .content(boardFreePostRequest.getContent())
            .category(boardFreePostRequest.getCategory())
            .tagged(boardFreePostRequest.getTagged())
            .userInfo(userInfo)
            .build();

        boardFreePostService.save(boardFreePost);
        
        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.CREATED)
                    .message("등록 완료")
                    .build(), HttpStatus.CREATED);
    }

    @PutMapping("/board/free/post/{id}")
    public ResponseEntity<BasicResponse> putBoardFreePost(@RequestBody BoardFreePostRequest boardFreePostRequest, @PathVariable("id") Long id) {

        boardFreePostService.update(id, boardFreePostRequest);
        
        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.CREATED)
                    .message("수정 완료")
                    .build(), HttpStatus.CREATED);
    }

    @DeleteMapping("/board/free/post/{id}")
    public ResponseEntity<BasicResponse> deleteBoardFreePost(@PathVariable("id") Long id) {

        boardFreePostService.delete(id);

        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.OK)
                    .message("삭제 완료")
                    .build(), HttpStatus.OK);
    }
}