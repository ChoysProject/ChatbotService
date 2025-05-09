package com.chatbot.demo.controller;

import com.chatbot.demo.dto.CommonDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin; // <-- CrossOrigin 임포트 확인

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@RestController
@RequestMapping("/common/")
@Slf4j
@CrossOrigin(origins = "*") // 모든 출처 허용 설정 추가
public class CommonController {

    @GetMapping("/hello")
    public CommonDto getHello(){

        log.info("check chatbot - Sending MainPageInfo");

        CommonDto commonDto = new CommonDto(
                "저희 챗봇 서비스에 오신 것을 환영합니다!",
                "서비스 상태: 정상 작동 중",
                5,
                LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"))
        );

        return commonDto;
    }
}