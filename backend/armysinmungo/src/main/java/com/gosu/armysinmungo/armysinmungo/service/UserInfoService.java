package com.gosu.armysinmungo.armysinmungo.service;

import com.gosu.armysinmungo.armysinmungo.domain.UserInfo;
import com.gosu.armysinmungo.armysinmungo.repository.UserInfoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class UserInfoService {

    private final UserInfoRepository userInfoRepository;

    @Autowired
    public UserInfoService(UserInfoRepository userInfoRepository) {
        this.userInfoRepository = userInfoRepository;
    }

    public UserInfo findById(Long id) {
        UserInfo userInfo = userInfoRepository.findById(id).get();
        return userInfo;
    }

    public UserInfo findByMilNum(String milNum) {
        UserInfo userInfo = userInfoRepository.findByMilNum(milNum).get();
        return userInfo;
    }

}
