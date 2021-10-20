package com.gosu.armysinmungo.armysinmungo.repository;

import com.gosu.armysinmungo.armysinmungo.domain.BoardFreeComment;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


public interface BoardFreeCommentRepository extends JpaRepository<BoardFreeComment, Long> {
    List<BoardFreeComment> findByBoardFreePost_Id(Long id);
}
