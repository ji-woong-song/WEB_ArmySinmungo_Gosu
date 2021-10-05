package com.gosu.armysinmungo.armysinmungo.domain;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.gosu.armysinmungo.armysinmungo.web.dto.response.BoardPostResponse;

import org.hibernate.annotations.ColumnDefault;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

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
@EntityListeners(AuditingEntityListener.class)
public class BoardFreePost {

    @Id @GeneratedValue
    private Long id;

    @NotNull
    private int postNum;

    @CreatedDate
    @NotNull
    private LocalDateTime uploadTime;

    @LastModifiedDate
    private LocalDateTime changedTime;

    @NotNull
    private String category;

    @NotNull
    private String title;

    @NotNull
    @Column(length = 1000)
    private String content;

    @NotNull
    @Column(length = 500)
    private String tagged;

    @ColumnDefault("0")
    private int agreeNum;

    @ColumnDefault("0")
    private int disagreeNum;

    @NotNull
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "USER_INFO_ID")
    private UserInfo userInfo;

    public BoardPostResponse toBoardPostResponse() {
        return BoardPostResponse.builder()
        .id(id)
        .postNum(postNum)
        .agreeNum(agreeNum)
        .category(category)
        .changedTime(changedTime)
        .uploadTime(uploadTime)
        .title(title)
        .content(content)
        .tagged(tagged)
        .userName(userInfo.getUserName())
        .build();
    }

}

