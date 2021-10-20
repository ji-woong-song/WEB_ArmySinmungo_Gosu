package com.gosu.armysinmungo.armysinmungo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gosu.armysinmungo.armysinmungo.domain.BoardLetterComment;
import com.gosu.armysinmungo.armysinmungo.repository.BoardLetterCommentRepository;
import com.gosu.armysinmungo.armysinmungo.web.dto.response.BoardCommentResponse;

import java.util.List;
import java.util.ArrayList;


@Service
@Transactional(readOnly = true)
public class BoardLetterCommentService {
    
    private final BoardLetterCommentRepository boardLetterCommentRepository;

    @Autowired
    public BoardLetterCommentService(BoardLetterCommentRepository boardLetterCommentRepository) {
        this.boardLetterCommentRepository = boardLetterCommentRepository;
    }

    @Transactional
    public Long save(BoardLetterComment boardLetterComment) {
        BoardLetterComment savedBoardLetterComment = boardLetterCommentRepository.save(boardLetterComment);
        return savedBoardLetterComment.getId();
    }

    @Transactional
    public void delete(Long id) {
        boardLetterCommentRepository.deleteById(id);
        return ;
    }

    public List<BoardLetterComment> findByBoardLetterPost_Id(Long id) {
        List<BoardLetterComment> boardLetterCommentList = boardLetterCommentRepository.findByBoardLetterPost_Id(id);
        return boardLetterCommentList;
    }

    public List<BoardCommentResponse> toBoardCommentResponseList(List<BoardLetterComment> boardLetterCommentList) {
        List<BoardCommentResponse> boardCommentResponseList = new ArrayList<>();
        List<BoardCommentResponse> mensionList = new ArrayList<>();

        for(int i = 0; i<boardLetterCommentList.size(); i++) {
            BoardLetterComment boardLetterComment = boardLetterCommentList.get(i);
            if(boardLetterComment.getMension() != 0) mensionList.add(boardLetterComment.toBoardCommentResponse());
            else boardCommentResponseList.add(boardLetterComment.toBoardCommentResponse());
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
