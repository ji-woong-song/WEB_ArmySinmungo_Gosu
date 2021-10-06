package com.gosu.armysinmungo.armysinmungo.service;

import com.gosu.armysinmungo.armysinmungo.repository.BoardCommunicatePostRepository;
import com.gosu.armysinmungo.armysinmungo.web.dto.request.BoardCommunicatePostRequest; // dto 생성
import com.gosu.armysinmungo.armysinmungo.domain.BoardCommunicatePost;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;



@Service
@Transactional(readOnly = true)
public class BoardCommunicatePostService {

    private final BoardCommunicatePostRepository boardCommunicatePostRepository;

    @Autowired
    public BoardCommunicatePostService(BoardCommunicatePostRepository boardCommunicatePostRepository) {
        this.boardCommunicatePostRepository = boardCommunicatePostRepository;
    }

    @Transactional
    public int save(BoardCommunicatePost boardCommunicatePost) {
        BoardCommunicatePost savedBoardCommunicatePost = boardCommunicatePostRepository.save(boardCommunicatePost);
        return savedBoardCommunicatePost.getPostNum();
    }

    @Transactional
    public int update(int num, BoardCommunicatePostRequest boardCommunicatePostRequest) {
        BoardCommunicatePost boardCommunicatePost = boardCommunicatePostRepository.findByPostNum(num).get();
        boardCommunicatePost.setTitle(boardCommunicatePostRequest.getTitle());
        boardCommunicatePost.setCategory(boardCommunicatePostRequest.getCategory());
        boardCommunicatePost.setContent(boardCommunicatePostRequest.getContent());
        boardCommunicatePost.setTagged(boardCommunicatePostRequest.getTagged());
        return boardCommunicatePost.getPostNum();
    }

    @Transactional
    public void delete(int num) {
        boardCommunicatePostRepository.deleteByPostNum(num);
        return ;
    }

    public BoardCommunicatePost findByPostNum(int num) {
        BoardCommunicatePost boardCommunicatePost = boardCommunicatePostRepository.findByPostNum(num).get();
        return boardCommunicatePost;
    }

    public int count() {
        return (int)boardCommunicatePostRepository.count();
    }

}