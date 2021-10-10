package com.gosu.armysinmungo.armysinmungo.repository;

import com.gosu.armysinmungo.armysinmungo.domain.BoardCommunicateComment;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoardCommunicateCommentRepository extends JpaRepository<BoardCommunicateComment, Long>{
    List<BoardCommunicateComment> findByBoardCommunicatePost_Id(Long id);
}
