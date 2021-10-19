package com.gosu.armysinmungo.armysinmungo.repository;

import java.util.Optional;

import com.gosu.armysinmungo.armysinmungo.domain.BoardLetterPost;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardLetterPostRepository extends JpaRepository<BoardLetterPost, Long>{
    Optional<BoardLetterPost> findByPostNum(int num);
    void deleteByPostNum(int num);
}
