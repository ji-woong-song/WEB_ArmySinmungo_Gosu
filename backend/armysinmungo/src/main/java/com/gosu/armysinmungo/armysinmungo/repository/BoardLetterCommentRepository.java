package com.gosu.armysinmungo.armysinmungo.repository;

import com.gosu.armysinmungo.armysinmungo.domain.BoardLetterComment;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoardLetterCommentRepository extends JpaRepository<BoardLetterComment, Long>{
    List<BoardLetterComment> findByBoardLetterPost_Id(Long id);
}
