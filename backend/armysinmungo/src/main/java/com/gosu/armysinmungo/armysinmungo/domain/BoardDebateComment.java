package com.gosu.armysinmungo.armysinmungo.domain;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.gosu.armysinmungo.armysinmungo.domain.enums.AgreeDisagree;

import org.hibernate.annotations.ColumnDefault;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "BOARD_DEBATE_COMMENT")
@Builder @Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BoardDebateComment {
    
    @Id @GeneratedValue
    private Long id;

    private Long mension;

    @NotNull
    @CreatedDate
    private LocalDateTime uploadTime;

    @LastModifiedDate
    private LocalDateTime changedTime;

    @NotNull
    private String content;

    @ColumnDefault("0")
    private int agreeNum;

    @ColumnDefault("0")
    private int disagreeNum = 0;

    @NotNull
    @Enumerated(EnumType.STRING)
    private AgreeDisagree agreeDisagree;

    @ManyToOne
    @JoinColumn(name = "USER_INFO_ID")
    private UserInfo userInfo;

    @ManyToOne
    @JoinColumn(name = "BOARD_FREE_POST_ID")
    private BoardFreePost boardFreePost;
}

