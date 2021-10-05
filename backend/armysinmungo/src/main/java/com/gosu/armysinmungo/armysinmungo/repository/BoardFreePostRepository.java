package com.gosu.armysinmungo.armysinmungo.repository;

import java.util.Optional;

import com.gosu.armysinmungo.armysinmungo.domain.BoardFreePost;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardFreePostRepository extends JpaRepository<BoardFreePost, Long>{
    Optional<BoardFreePost> findByPostNum(int num);
}
