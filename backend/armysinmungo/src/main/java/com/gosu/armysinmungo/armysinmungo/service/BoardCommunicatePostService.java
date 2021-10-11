package com.gosu.armysinmungo.armysinmungo.service;

import com.gosu.armysinmungo.armysinmungo.repository.BoardCommunicatePostRepository;
import com.gosu.armysinmungo.armysinmungo.web.dto.request.BoardCommunicatePostRequest; // dto 생성
import com.gosu.armysinmungo.armysinmungo.domain.BoardCommunicatePost;

import java.util.List;

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

    public List<BoardCommunicatePost> findAll() {
        List<BoardCommunicatePost> boardCommunicatePostList = boardCommunicatePostRepository.findAll();
        return boardCommunicatePostList;
    }

    @Transactional
    public Long save(BoardCommunicatePost boardCommunicatePost) {
        BoardCommunicatePost savedBoardCommunicatePost = boardCommunicatePostRepository.save(boardCommunicatePost);
        return savedBoardCommunicatePost.getId();
    }

    @Transactional
    public Long update(Long id, BoardCommunicatePostRequest boardCommunicatePostRequest) {
        BoardCommunicatePost boardCommunicatePost = boardCommunicatePostRepository.findById(id).get();
        boardCommunicatePost.setTitle(boardCommunicatePostRequest.getTitle());
        boardCommunicatePost.setCategory(boardCommunicatePostRequest.getCategory());
        boardCommunicatePost.setContent(boardCommunicatePostRequest.getContent());
        boardCommunicatePost.setTagged(boardCommunicatePostRequest.getTagged());
        return boardCommunicatePost.getId();
    }

    @Transactional
    public void delete(Long id) {
        boardCommunicatePostRepository.deleteById(id);
        return ;
    }

    public BoardCommunicatePost findById(Long id) {
        BoardCommunicatePost boardCommunicatePost = boardCommunicatePostRepository.findById(id).get();
        return boardCommunicatePost;
    }

    public int count() {
        return (int)boardCommunicatePostRepository.count();
    }

}