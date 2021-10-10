package com.gosu.armysinmungo.armysinmungo.service;

import com.gosu.armysinmungo.armysinmungo.domain.BoardDebateComment;
import com.gosu.armysinmungo.armysinmungo.repository.BoardDebateCommentRepository;
import com.gosu.armysinmungo.armysinmungo.web.dto.response.BoardCommentResponse;

import java.util.List;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class BoardDebateCommentService {
    private final BoardDebateCommentRepository boardDebateCommentRepository;

    @Autowired
    public BoardDebateCommentService(BoardDebateCommentRepository boardDebateCommentRepository) {
        this.boardDebateCommentRepository = boardDebateCommentRepository;
    }

    @Transactional
    public Long save(BoardDebateComment boardDebateComment) {
        BoardDebateComment savedBoardDebateComment = boardDebateCommentRepository.save(boardDebateComment);
        return savedBoardDebateComment.getId();
    }
    
    @Transactional
    public void delete(Long id) {
        boardDebateCommentRepository.deleteById(id);
        return ;
    }

    public List<BoardDebateComment> findByBoardDebateTheme_Id(Long id) {
        List<BoardDebateComment> boardDebateCommentList = boardDebateCommentRepository.findByBoardDebateTheme_Id(id);
        return boardDebateCommentList;
    }



    public List<BoardCommentResponse> toBoardCommentResponseList(List<BoardDebateComment> boardDebateCommentList) {
        List<BoardCommentResponse> boardCommentResponseList = new ArrayList<>();
        List<BoardCommentResponse> mensionList = new ArrayList<>();

        for(int i = 0; i<boardDebateCommentList.size(); i++) {
            BoardDebateComment boardDebateComment = boardDebateCommentList.get(i);
            if(boardDebateComment.getMension() != null) mensionList.add(boardDebateComment.toBoardCommentResponse());
            else boardCommentResponseList.add(boardDebateComment.toBoardCommentResponse());
        }

        for(int i=0; i<mensionList.size(); i++) {
            Long sourceId = mensionList.get(i).getMension();
            for(int j=0; j<boardCommentResponseList.size(); j++) {
                if(boardCommentResponseList.get(j).getId().equals(sourceId)) {
                    boardCommentResponseList.get(j).getMensionList().add(mensionList.get(i));
                }
            }
        }

        return boardCommentResponseList;
    }
}
