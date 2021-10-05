package com.gosu.armysinmungo.armysinmungo.service;

import com.gosu.armysinmungo.armysinmungo.repository.BoardFreePostRepository;
import com.gosu.armysinmungo.armysinmungo.domain.BoardFreePost;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;



@Service
@Transactional(readOnly = true)
public class BoardFreePostService {

    private final BoardFreePostRepository boardFreePostRepository;

    @Autowired
    public BoardFreePostService(BoardFreePostRepository boardFreePostRepository) {
        this.boardFreePostRepository = boardFreePostRepository;
    }

    @Transactional
    public int save(BoardFreePost boardFreePost) {
        BoardFreePost savedBoardFreePost = boardFreePostRepository.save(boardFreePost);
        return savedBoardFreePost.getPostNum();
    }

    public BoardFreePost findByPostNum(int num) {
        BoardFreePost boardFreePost = boardFreePostRepository.findByPostNum(num).get();
        return boardFreePost;
    }

    public int count() {
        return (int)boardFreePostRepository.count();
    }

}