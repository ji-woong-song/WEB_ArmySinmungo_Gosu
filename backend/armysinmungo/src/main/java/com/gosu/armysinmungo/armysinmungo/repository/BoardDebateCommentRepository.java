package com.gosu.armysinmungo.armysinmungo.repository;

import com.gosu.armysinmungo.armysinmungo.domain.BoardDebateComment;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


public interface BoardDebateCommentRepository extends JpaRepository<BoardDebateComment, Long> {
    List<BoardDebateComment> findByBoardDebateTheme_Id(Long id);
}
