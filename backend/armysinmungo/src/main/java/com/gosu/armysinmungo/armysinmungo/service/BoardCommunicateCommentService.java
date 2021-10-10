package com.gosu.armysinmungo.armysinmungo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gosu.armysinmungo.armysinmungo.domain.BoardCommunicateComment;
import com.gosu.armysinmungo.armysinmungo.repository.BoardCommunicateCommentRepository;
import com.gosu.armysinmungo.armysinmungo.web.dto.response.BoardCommentResponse;

import java.util.List;
import java.util.ArrayList;


@Service
@Transactional(readOnly = true)
public class BoardCommunicateCommentService {
    
    private final BoardCommunicateCommentRepository boardCommunicateCommentRepository;

    @Autowired
    public BoardCommunicateCommentService(BoardCommunicateCommentRepository boardCommunicateCommentRepository) {
        this.boardCommunicateCommentRepository = boardCommunicateCommentRepository;
    }

    @Transactional
    public Long save(BoardCommunicateComment boardCommunicateComment) {
        BoardCommunicateComment savedBoardCommunicateComment = boardCommunicateCommentRepository.save(boardCommunicateComment);
        return savedBoardCommunicateComment.getId();
    }

    @Transactional
    public void delete(Long id) {
        boardCommunicateCommentRepository.deleteById(id);
        return ;
    }

    public List<BoardCommunicateComment> findByBoardCommunicatePost_Id(Long id) {
        List<BoardCommunicateComment> boardCommunicateCommentList = boardCommunicateCommentRepository.findByBoardCommunicatePost_Id(id);
        return boardCommunicateCommentList;
    }

    public List<BoardCommentResponse> toBoardCommentResponseList(List<BoardCommunicateComment> boardCommunicateCommentList) {
        List<BoardCommentResponse> boardCommentResponseList = new ArrayList<>();
        List<BoardCommentResponse> mensionList = new ArrayList<>();

        for(int i = 0; i<boardCommunicateCommentList.size(); i++) {
            BoardCommunicateComment boardCommunicateComment = boardCommunicateCommentList.get(i);
            if(boardCommunicateComment.getMension() != null) mensionList.add(boardCommunicateComment.toBoardCommentResponse());
            else boardCommentResponseList.add(boardCommunicateComment.toBoardCommentResponse());
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
