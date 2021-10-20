package com.gosu.armysinmungo.armysinmungo.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.Getter;

@Entity
@Table(name = "UNIT_INFO")
@Builder @Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UnitInfo {

    @Id @GeneratedValue
    private Long id;

    @NotNull
    private String unitName;

    @NotNull
    private String unitBelong;

    @NotNull
    private Long unitCode;
}