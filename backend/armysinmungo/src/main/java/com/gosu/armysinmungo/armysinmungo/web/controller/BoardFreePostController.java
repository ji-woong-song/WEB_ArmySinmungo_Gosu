package com.gosu.armysinmungo.armysinmungo.web.controller;

import com.gosu.armysinmungo.armysinmungo.domain.BoardFreePost;
import com.gosu.armysinmungo.armysinmungo.domain.UserInfo;
import com.gosu.armysinmungo.armysinmungo.service.BoardFreePostService;
import com.gosu.armysinmungo.armysinmungo.service.UserInfoService;
import com.gosu.armysinmungo.armysinmungo.web.dto.BasicResponse;
import com.gosu.armysinmungo.armysinmungo.web.dto.request.BoardFreePostRequest;

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

    @GetMapping("/board/free/post/{num}")
    public ResponseEntity<BasicResponse> getBoardFreePost(@PathVariable("num") int num) {

        BoardFreePost boardFreePost = boardFreePostService.findByPostNum(num);

        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.OK)
                    .message("조회 완료")
                    .data(boardFreePost.toBoardPostResponse())
                    .build(), HttpStatus.OK);
    }

    @PostMapping("/board/free/post")
    public ResponseEntity<BasicResponse> postBoardFreePost(@RequestBody BoardFreePostRequest boardFreePostRequest) {
        
        int currentCount = boardFreePostService.count();        
        UserInfo userInfo = UserInfoService.findById(54321L);

        BoardFreePost boardFreePost = 
            BoardFreePost.builder()
            .postNum(currentCount+1)
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

    @PutMapping("/board/free/post/{num}")
    public ResponseEntity<BasicResponse> putBoardFreePost(@RequestBody BoardFreePostRequest boardFreePostRequest, @PathVariable("num") int num) {

        boardFreePostService.update(num, boardFreePostRequest);
        
        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.CREATED)
                    .message("수정 완료")
                    .build(), HttpStatus.CREATED);
    }
}