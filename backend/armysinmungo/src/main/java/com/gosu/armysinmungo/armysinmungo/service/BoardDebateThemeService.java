package com.gosu.armysinmungo.armysinmungo.service;

import com.gosu.armysinmungo.armysinmungo.repository.BoardDebateThemeRepository;
import com.gosu.armysinmungo.armysinmungo.web.dto.request.BoardDebateThemeRequest;
import com.gosu.armysinmungo.armysinmungo.domain.BoardDebateTheme;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;



@Service
@Transactional(readOnly = true)
public class BoardDebateThemeService {

    private final BoardDebateThemeRepository boardDebateThemeRepository;

    @Autowired
    public BoardDebateThemeService(BoardDebateThemeRepository boardDebateThemeRepository) {
        this.boardDebateThemeRepository = boardDebateThemeRepository;
    }


    @Transactional
    public int save(BoardDebateTheme boardDebateTheme) {
        BoardDebateTheme savedBoardDebateTheme = boardDebateThemeRepository.save(boardDebateTheme);
        return savedBoardDebateTheme.getPostNum();
    }

    @Transactional
    public int update(int num, BoardDebateThemeRequest boardDebateThemeRequest) {
        BoardDebateTheme boardDebateTheme = boardDebateThemeRepository.findByPostNum(num).get();
        boardDebateTheme.setTitle(boardDebateThemeRequest.getTitle());
        boardDebateTheme.setCategory(boardDebateThemeRequest.getCategory());
        boardDebateTheme.setContent(boardDebateThemeRequest.getContent());
        boardDebateTheme.setTagged(boardDebateThemeRequest.getTagged());
        return boardDebateTheme.getPostNum();
    }

    @Transactional
    public void delete(int num) {
        boardDebateThemeRepository.deleteByPostNum(num);
        return ;
    }

    public BoardDebateTheme findByPostNum(int num) {
        BoardDebateTheme boardDebateTheme = boardDebateThemeRepository.findByPostNum(num).get();
        return boardDebateTheme;
    }

    public int count() {
        return (int)boardDebateThemeRepository.count();
    }
}