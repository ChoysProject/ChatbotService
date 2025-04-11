package com.chatbot.demo.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/common/")
@Slf4j
public class CommonController {

    @GetMapping("/hello")
    public String getHello(){

        log.info("check chatbot");

        return "Hello chatBot Service";
    }

}
