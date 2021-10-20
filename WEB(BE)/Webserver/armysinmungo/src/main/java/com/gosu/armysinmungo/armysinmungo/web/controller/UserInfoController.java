package com.gosu.armysinmungo.armysinmungo.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.gosu.armysinmungo.armysinmungo.service.UserInfoService;
import com.gosu.armysinmungo.armysinmungo.domain.UserInfo;

import java.time.LocalDate;
import java.util.List;

import com.gosu.armysinmungo.armysinmungo.web.dto.BasicResponse;
import com.gosu.armysinmungo.armysinmungo.web.dto.response.UserInfoResponse;
import com.gosu.armysinmungo.armysinmungo.web.dto.request.LoginRequest;
import com.gosu.armysinmungo.armysinmungo.web.dto.request.SignupRequest;

@RestController
public class UserInfoController {

    private final UserInfoService userInfoService;

    @Autowired
    public UserInfoController(UserInfoService userInfoService) {
        this.userInfoService = userInfoService;
    }

    @PostMapping("/board/login")
    public ResponseEntity<BasicResponse> postLogin(@RequestBody LoginRequest loginRequest) {
    
        List<UserInfo> userInfoList = userInfoService.findAll();

        for(int i=0; i<userInfoList.size(); i++) {
            
            UserInfo userinfo = userInfoList.get(i);
            
            if(userinfo.getMilNum().equals(loginRequest.getMilNum()) &&
                userinfo.getUserPw().equals(loginRequest.getPassword())) {
                    UserInfoResponse userInfoResponse = 
                        UserInfoResponse.builder()
                            .milNum(userinfo.getMilNum())
                            .rank(userinfo.getUserRank())
                            .unitBelong(userinfo.getBranchUnit1())
                            .unitName(userinfo.getBranchUnit2())
                            .userName(userinfo.getUserName())
                            .build();

                    return new ResponseEntity<>(
                        BasicResponse.builder()
                                .status(HttpStatus.OK)
                                .message("로그인 완료")
                                .data(userInfoResponse)
                                .build(), HttpStatus.OK);
                }
        }

        // 실패 응답으로 바꾸기
        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.UNAUTHORIZED)
                    .message("군번 또는 비밀번호가 일치하지 않습니다.")
                    .build(), HttpStatus.UNAUTHORIZED);
    }
    
    @PostMapping("/board/signup")
    public ResponseEntity<BasicResponse> postSignup(@RequestBody SignupRequest signupRequest) {

        // 회원가입 로직 및 응답 dto
        // 지휘관과 병사를 어떻게 구분할 것인지
        // userRank 필드를 활용하기

        List<UserInfo> userInfoList = userInfoService.findAll();

        // 군번 중복 체크
        for(int i=0; i<userInfoList.size(); i++) {
            if(userInfoList.get(i).getMilNum().equals(signupRequest.getMilNum())) {
                return new ResponseEntity<>(
                    BasicResponse.builder()
                            .status(HttpStatus.CONFLICT)
                            .message("이미 가입된 유저입니다.")
                            .build(), HttpStatus.CONFLICT);
            }
        }

        // 패스워드 == 패스워드 확인 체크
        if(!signupRequest.getPassword().equals(signupRequest.getPasswordCheck())) {
            return new ResponseEntity<>(
                    BasicResponse.builder()
                            .status(HttpStatus.CONFLICT)
                            .message("비밀번호와 비밀번호 확인을 같게 입력하세요.")
                            .build(), HttpStatus.CONFLICT);
        }


        // 정상가입

        String userRank = "";
        if(signupRequest.getMilNum().length() == 8) userRank = "COMMANDER";
        else userRank = "SOLDIER";

        UserInfo userInfo = 
            UserInfo.builder()
            .branchUnit1("공군 정보체계관리단")
            .branchUnit2("체계개발대")
            .userRank(userRank)
            .milNum(signupRequest.getMilNum())
            .userPw(signupRequest.getPassword())
            .userName(signupRequest.getUserName())
            .enlistDate(LocalDate.now())
            .birth(LocalDate.now())
            .cellphone("010-1234-5678")
            .unitCode(3L)
            .build();

        userInfoService.save(userInfo);

        return new ResponseEntity<>(
            BasicResponse.builder()
                    .status(HttpStatus.CREATED)
                    .message("가입 완료")
                    .build(), HttpStatus.CREATED);
    }

}
