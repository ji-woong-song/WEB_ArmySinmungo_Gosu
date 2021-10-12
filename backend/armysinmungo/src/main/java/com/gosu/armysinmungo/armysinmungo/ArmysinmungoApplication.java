package com.gosu.armysinmungo.armysinmungo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@EnableJpaAuditing
@EnableJpaRepositories(basePackages = "com.gosu.armysinmungo.armysinmungo.repository")
@SpringBootApplication
public class ArmysinmungoApplication {

	public static void main(String[] args) {
		System.setProperty("spring.devtools.restart.enabled", "false");
		SpringApplication.run(ArmysinmungoApplication.class, args);
	}
	 
}
