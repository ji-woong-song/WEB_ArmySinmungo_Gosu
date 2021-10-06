package com.gosu.armysinmungo.armysinmungo.web.controller;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

import com.gosu.armysinmungo.armysinmungo.domain.BoardDebateTheme;
import com.gosu.armysinmungo.armysinmungo.domain.UserInfo;
import com.gosu.armysinmungo.armysinmungo.service.BoardDebateThemeService;
import com.gosu.armysinmungo.armysinmungo.service.UserInfoService;
import com.gosu.armysinmungo.armysinmungo.web.dto.response.BoardPostResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.gosu.armysinmungo.armysinmungo.web.dto.BasicResponse;
import com.gosu.armysinmungo.armysinmungo.web.dto.request.BoardDebateThemeRequest;



@RestController
public class BoardDebateThemeController {

    private final BoardDebateThemeService boardDebateThemeService;
    private final UserInfoService UserInfoService;

    @Autowired
    public BoardDebateThemeController(BoardDebateThemeService boardDebateThemeService, UserInfoService userInfoService) {
        this.boardDebateThemeService = boardDebateThemeService;
        this.UserInfoService = userInfoService;
    }

    @GetMapping("/board/debate/theme/all")
    public ResponseEntity<BasicResponse> getBoardDebateThemeAll() {

        List<BoardDebateTheme> boardDebateThemeList = boardDebateThemeService.findAll();
        
        List<BoardPostResponse> boardPostResponseList = boardDebateThemeList.stream().map((boardDebateTheme)-> boardDebateTheme.toBoardPostResponse()).collect(Collectors.toList());
    
        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.OK)
                    .message("조회 완료")
                    .data(boardPostResponseList)
                    .build(), HttpStatus.OK);
    }

    @GetMapping("/board/debate/theme/{num}")
    public ResponseEntity<BasicResponse> getBoardDebateTheme(@PathVariable("num") int num) {

        BoardDebateTheme boardDebateTheme = boardDebateThemeService.findByPostNum(num);

        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.OK)
                    .message("조회 완료")
                    .data(boardDebateTheme.toBoardPostResponse())
                    .build(), HttpStatus.OK);
    }

    @PostMapping("/board/debate/theme")
    public ResponseEntity<BasicResponse> postBoardDebateTheme(@RequestBody BoardDebateThemeRequest boardDebateThemeRequest) {
        
        int currentCount = boardDebateThemeService.count();        
        UserInfo userInfo = UserInfoService.findById(54321L);

        BoardDebateTheme boardDebateTheme = 
            BoardDebateTheme.builder()
            .postNum(currentCount+1)
            .title(boardDebateThemeRequest.getTitle())
            .content(boardDebateThemeRequest.getContent())
            .category(boardDebateThemeRequest.getCategory())
            .tagged(boardDebateThemeRequest.getTagged())
            .userInfo(userInfo)
            .build();

        boardDebateThemeService.save(boardDebateTheme);
        
        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.CREATED)
                    .message("등록 완료")
                    .build(), HttpStatus.CREATED);
    }

    @PutMapping("/board/debate/theme/{num}")
    public ResponseEntity<BasicResponse> putBoardDebateTheme(@RequestBody BoardDebateThemeRequest boardDebateThemeRequest, @PathVariable("num") int num) {

        boardDebateThemeService.update(num, boardDebateThemeRequest);
        
        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.CREATED)
                    .message("수정 완료")
                    .build(), HttpStatus.CREATED);
    }

    @DeleteMapping("/board/debate/theme/{num}")
    public ResponseEntity<BasicResponse> deleteBoardDebateTheme(@PathVariable("num") int num) {

        boardDebateThemeService.delete(num);

        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.OK)
                    .message("삭제 완료")
                    .build(), HttpStatus.OK);
    }

}
