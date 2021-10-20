package com.gosu.armysinmungo.armysinmungo.repository;

import java.util.Optional;

import com.gosu.armysinmungo.armysinmungo.domain.BoardCommunicatePost;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardCommunicatePostRepository extends JpaRepository<BoardCommunicatePost, Long>{
    Optional<BoardCommunicatePost> findByPostNum(int num);
    void deleteByPostNum(int num);
}
