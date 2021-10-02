package com.gosu.armysinmungo.armysinmungo.domain;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "BOARD_FREE_POST")
@Builder @Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BoardFreePost {

    @Id @GeneratedValue
    private Long id;

    @NotNull
    private int postNum;

    @NotNull
    @CreatedDate
    private LocalDateTime uploadTime;

    @NotNull
    @LastModifiedDate
    private LocalDateTime changedTime;

    @NotNull
    private String category;

    @NotNull
    private String title;

    @NotNull
    private String content;

    @NotNull
    private String tagged;

    private int agreeNum = 0;

    private int disagreeNum = 0;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_INFO_ID")
    private UserInfo userInfo;
}

