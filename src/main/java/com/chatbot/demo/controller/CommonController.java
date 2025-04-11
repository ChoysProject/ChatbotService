package com.chatbot.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/common/")
public class CommonController {

    @GetMapping("/hello")
    public String getHello(){

        return "Hello chatBot Service";
    }

}
