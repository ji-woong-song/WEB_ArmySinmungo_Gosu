package com.gosu.armysinmungo.armysinmungo.service;

import com.gosu.armysinmungo.armysinmungo.domain.BoardFreeComment;
import com.gosu.armysinmungo.armysinmungo.repository.BoardFreeCommentRepository;
import com.gosu.armysinmungo.armysinmungo.web.dto.response.BoardCommentResponse;

import java.util.List;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class BoardFreeCommentService {

    private final BoardFreeCommentRepository boardFreeCommentRepository;

    @Autowired
    public BoardFreeCommentService(BoardFreeCommentRepository boardFreeCommentRepository) {
        this.boardFreeCommentRepository = boardFreeCommentRepository;
    }

    @Transactional
    public Long save(BoardFreeComment boardFreeComment) {
        BoardFreeComment savedBoardFreeComment = boardFreeCommentRepository.save(boardFreeComment);
        return savedBoardFreeComment.getId();
    }
    
    @Transactional
    public void delete(Long id) {
        boardFreeCommentRepository.deleteById(id);
        return ;
    }

    public List<BoardFreeComment> findByBoardFreePost_Id(Long id) {
        List<BoardFreeComment> boardFreeCommentList = boardFreeCommentRepository.findByBoardFreePost_Id(id);
        return boardFreeCommentList;
    }



    public List<BoardCommentResponse> toBoardCommentResponseList(List<BoardFreeComment> boardFreeCommentList) {
        List<BoardCommentResponse> boardCommentResponseList = new ArrayList<>();
        List<BoardCommentResponse> mensionList = new ArrayList<>();

        for(int i = 0; i<boardFreeCommentList.size(); i++) {
            BoardFreeComment boardFreeComment = boardFreeCommentList.get(i);
            if(boardFreeComment.getMension() != null) mensionList.add(boardFreeComment.toBoardCommentResponse());
            else boardCommentResponseList.add(boardFreeComment.toBoardCommentResponse());
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
