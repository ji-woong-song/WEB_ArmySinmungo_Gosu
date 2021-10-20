package com.gosu.armysinmungo.armysinmungo.service;

import com.gosu.armysinmungo.armysinmungo.repository.BoardLetterPostRepository;
import com.gosu.armysinmungo.armysinmungo.web.dto.request.BoardLetterPostRequest; // dto 생성
import com.gosu.armysinmungo.armysinmungo.domain.BoardLetterPost;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;



@Service
@Transactional(readOnly = true)
public class BoardLetterPostService {

    private final BoardLetterPostRepository boardLetterPostRepository;

    @Autowired
    public BoardLetterPostService(BoardLetterPostRepository boardLetterPostRepository) {
        this.boardLetterPostRepository = boardLetterPostRepository;
    }

    public List<BoardLetterPost> findAll() {
        List<BoardLetterPost> boardLetterPostList = boardLetterPostRepository.findAll();
        return boardLetterPostList;
    }

    @Transactional
    public Long save(BoardLetterPost boardLetterPost) {
        BoardLetterPost savedBoardLetterPost = boardLetterPostRepository.save(boardLetterPost);
        return savedBoardLetterPost.getId();
    }

    @Transactional
    public Long update(Long id, BoardLetterPostRequest boardLetterPostRequest) {
        BoardLetterPost boardLetterPost = boardLetterPostRepository.findById(id).get();
        boardLetterPost.setTitle(boardLetterPostRequest.getTitle());
        boardLetterPost.setCategory(boardLetterPostRequest.getCategory());
        boardLetterPost.setContent(boardLetterPostRequest.getContent());
        boardLetterPost.setTagged(boardLetterPostRequest.getTagged());
        return boardLetterPost.getId();
    }

    @Transactional
    public void delete(Long id) {
        boardLetterPostRepository.deleteById(id);
        return ;
    }

    public BoardLetterPost findById(Long id) {
        BoardLetterPost boardLetterPost = boardLetterPostRepository.findById(id).get();
        return boardLetterPost;
    }

    public int count() {
        return (int)boardLetterPostRepository.count();
    }

}