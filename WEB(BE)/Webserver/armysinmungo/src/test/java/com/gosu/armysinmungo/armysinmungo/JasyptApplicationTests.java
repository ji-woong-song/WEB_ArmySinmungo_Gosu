package com.gosu.armysinmungo.armysinmungo;

import org.jasypt.encryption.pbe.StandardPBEStringEncryptor;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.gosu.armysinmungo.armysinmungo.config.JasyptConfig;

@SpringBootTest
class JasyptApplicationTests {

    @Test
    public void jasypt_encrypt_decrypt_test() {

        StandardPBEStringEncryptor jasypt = new StandardPBEStringEncryptor();
        jasypt.setPassword(JasyptConfig.encryptKey);
        jasypt.setAlgorithm("PBEWithMD5AndDES");

        String encryptedURL = jasypt.encrypt(JasyptConfig.URL);
        String encryptedUSERNAME = jasypt.encrypt(JasyptConfig.USERNAME);
        String encryptedPASSWORD = jasypt.encrypt(JasyptConfig.PASSWORD);

        System.out.println(encryptedURL);
        System.out.println(encryptedUSERNAME);
        System.out.println(encryptedPASSWORD);
    }

}