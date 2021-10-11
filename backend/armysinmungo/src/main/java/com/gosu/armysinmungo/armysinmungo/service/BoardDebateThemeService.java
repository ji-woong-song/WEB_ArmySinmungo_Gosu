package com.gosu.armysinmungo.armysinmungo.service;

import com.gosu.armysinmungo.armysinmungo.repository.BoardDebateThemeRepository;
import com.gosu.armysinmungo.armysinmungo.web.dto.request.BoardDebateThemeRequest;
import com.gosu.armysinmungo.armysinmungo.domain.BoardDebateTheme;

import java.util.List;

import javax.persistence.Id;

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

    public List<BoardDebateTheme> findAll() {
        List<BoardDebateTheme> boardDebateThemeList = boardDebateThemeRepository.findAll();
        return boardDebateThemeList;
    }

    @Transactional
    public Long save(BoardDebateTheme boardDebateTheme) {
        BoardDebateTheme savedBoardDebateTheme = boardDebateThemeRepository.save(boardDebateTheme);
        return savedBoardDebateTheme.getId();
    }

    @Transactional
    public Long update(Long id, BoardDebateThemeRequest boardDebateThemeRequest) {
        BoardDebateTheme boardDebateTheme = boardDebateThemeRepository.findById(id).get();
        boardDebateTheme.setTitle(boardDebateThemeRequest.getTitle());
        boardDebateTheme.setCategory(boardDebateThemeRequest.getCategory());
        boardDebateTheme.setContent(boardDebateThemeRequest.getContent());
        boardDebateTheme.setTagged(boardDebateThemeRequest.getTagged());
        return boardDebateTheme.getId();
    }

    @Transactional
    public void delete(Long id) {
        boardDebateThemeRepository.deleteById(id);
        return ;
    }

    public BoardDebateTheme findById(Long id) {
        BoardDebateTheme boardDebateTheme = boardDebateThemeRepository.findById(id).get();
        return boardDebateTheme;
    }

    public int count() {
        return (int)boardDebateThemeRepository.count();
    }
}