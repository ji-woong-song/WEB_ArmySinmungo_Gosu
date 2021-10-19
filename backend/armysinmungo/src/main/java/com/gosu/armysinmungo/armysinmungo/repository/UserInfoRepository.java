package com.gosu.armysinmungo.armysinmungo.repository;

import com.gosu.armysinmungo.armysinmungo.domain.UserInfo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserInfoRepository extends JpaRepository<UserInfo, Long>{
    
}
