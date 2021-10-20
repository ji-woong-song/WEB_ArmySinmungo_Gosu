package com.gosu.armysinmungo.armysinmungo.repository;

import java.util.Optional;

import com.gosu.armysinmungo.armysinmungo.domain.BoardDebateTheme;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardDebateThemeRepository extends JpaRepository<BoardDebateTheme, Long>{
    Optional<BoardDebateTheme> findByPostNum(int num);
    void deleteByPostNum(int num);
}
