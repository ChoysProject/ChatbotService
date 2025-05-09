package com.chatbot.demo.controller;

import com.chatbot.demo.dto.CommonDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@RestController
@RequestMapping("/common/")
@Slf4j
public class CommonController {

    @GetMapping("/hello") // 기존 엔드포인트 경로는 그대로 유지
    // 반환 타입을 String -> MainPageInfo 객체로 변경
    public CommonDto getHello(){

        log.info("check chatbot - Sending MainPageInfo"); // 로그 메시지 변경

        // MainPageInfo 객체 생성 및 데이터 설정
        CommonDto commonDto = new CommonDto(
                "저희 챗봇 서비스에 오신 것을 환영합니다!", // welcomeMessage
                "서비스 상태: 정상 작동 중", // serviceStatus
                5, // numberOfDemos (예시 데이터)
                LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")) // 현재 시간
        );

        return commonDto;
    }

}
