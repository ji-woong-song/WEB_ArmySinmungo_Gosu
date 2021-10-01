package com.gosu.armysinmungo.armysinmungo.domain;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "USER_INFO")
@Builder @Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UserInfo {

    @Id @GeneratedValue
    private Long id;

    // @NotNull
    // private String unit;

    @NotNull
    private String branchUnit1;

    @NotNull
    private String branchUnit2;

    @NotNull
    private String userRank;

    @NotNull
    private String milNum;

    @NotNull
    private String userPw;

    @NotNull
    private LocalDate enlistDate;

    private LocalDate dischargeDate;

    @NotNull
    private LocalDate birth;

    @NotNull
    private String cellphone;

    @NotNull
    private Long unitCode;
}
