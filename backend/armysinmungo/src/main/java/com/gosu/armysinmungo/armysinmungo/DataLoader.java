package com.gosu.armysinmungo.armysinmungo;

import com.gosu.armysinmungo.armysinmungo.domain.BoardFreeComment;
import com.gosu.armysinmungo.armysinmungo.domain.BoardFreePost;
import com.gosu.armysinmungo.armysinmungo.domain.UserInfo;
import com.gosu.armysinmungo.armysinmungo.repository.BoardFreeCommentRepository;
import com.gosu.armysinmungo.armysinmungo.repository.BoardFreePostRepository;
import com.gosu.armysinmungo.armysinmungo.repository.UserInfoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;


@Component
public class DataLoader implements ApplicationRunner {
    
    @Autowired
    private BoardFreeCommentRepository boardFreeCommentRepository;
    
    @Autowired
    private UserInfoRepository userInfoRepository;

    @Autowired
    private BoardFreePostRepository boardFreePostRepository;

    public void run(ApplicationArguments args) throws Exception {
        
        UserInfo userInfo = userInfoRepository.findById(54321L).get();
        BoardFreePost boardFreePost = boardFreePostRepository.findByPostNum(6).get();

        BoardFreeComment boardFreeComment = 
            BoardFreeComment.builder()
            .content("댓그르으르으르르를를ㄹ르ㅡㄹ")
            .userInfo(userInfo)
            .mension(13L)
            .boardFreePost(boardFreePost)
            .build();
        
        boardFreeCommentRepository.save(boardFreeComment);
    }

}
