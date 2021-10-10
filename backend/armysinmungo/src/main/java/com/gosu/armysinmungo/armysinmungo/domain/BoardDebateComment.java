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

import com.gosu.armysinmungo.armysinmungo.web.dto.response.BoardCommentResponse;

import java.util.ArrayList;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import javax.persistence.EntityListeners;

@Entity
@Table(name = "BOARD_DEBATE_COMMENT")
@Builder @Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
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
    private int disagreeNum;

    @NotNull
    @Enumerated(EnumType.STRING)
    private AgreeDisagree agreeDisagree;

    @ManyToOne
    @JoinColumn(name = "USER_INFO_ID")
    private UserInfo userInfo;

    @ManyToOne
    @JoinColumn(name = "BOARD_DEBATE_THEME_ID")
    private BoardDebateTheme boardDebateTheme;

    public BoardCommentResponse toBoardCommentResponse() {
        return BoardCommentResponse.builder()
            .postNum(boardDebateTheme.getPostNum())
            .uploadTime(uploadTime)
            .changedTime(changedTime)
            .userName(userInfo.getUserName())
            .content(content)
            .agreeNum(agreeNum)
            .mension(mension)
            .mensionList(new ArrayList<>())
            .id(id)
            .disagreeNum(disagreeNum)
            .agreeDisagree(agreeDisagree.name())
            .build();
    }
}
