package com.gosu.armysinmungo.armysinmungo.service;

import com.gosu.armysinmungo.armysinmungo.repository.BoardFreePostRepository;
import com.gosu.armysinmungo.armysinmungo.web.dto.request.BoardFreePostRequest;

import java.util.List;

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

    public List<BoardFreePost> findAll() {
        List<BoardFreePost> boardFreePostList = boardFreePostRepository.findAll();
        return boardFreePostList;
    }

    @Transactional
    public Long save(BoardFreePost boardFreePost) {
        BoardFreePost savedBoardFreePost = boardFreePostRepository.save(boardFreePost);
        return savedBoardFreePost.getId();
    }

    @Transactional
    public Long update(Long id, BoardFreePostRequest boardFreePostRequest) {
        BoardFreePost boardFreePost = boardFreePostRepository.findById(id).get();
        boardFreePost.setTitle(boardFreePostRequest.getTitle());
        boardFreePost.setCategory(boardFreePostRequest.getCategory());
        boardFreePost.setContent(boardFreePostRequest.getContent());
        boardFreePost.setTagged(boardFreePostRequest.getTagged());
        return boardFreePost.getId();
    }

    @Transactional
    public void delete(Long id) {
        boardFreePostRepository.deleteById(id);
        return ;
    }

    public BoardFreePost findById(Long id) {
        BoardFreePost boardFreePost = boardFreePostRepository.findById(id).get();
        return boardFreePost;
    }

    public int count() {
        return (int)boardFreePostRepository.count();
    }

}