package com.chatbot.demo.dto; // 실제 DTO 패키지 경로

import lombok.AllArgsConstructor; // <-- 이게 있어야 합니다.
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor; // 필요하다면 이것도 함께

@Getter
@Setter
@AllArgsConstructor // <-- **이 어노테이션이 있는지 다시 확인해주세요.**
@NoArgsConstructor // 기본 생성자가 필요하다면 함께 사용
public class CommonDto {
    private String welcomeMessage; // CommonController에서 넘겨주는 첫 번째 String과 타입이 맞아야 합니다.
    private String serviceStatus;  // 두 번째 String과 타입이 맞아야 합니다.
    private int numberOfDemos;     // 세 번째 int와 타입이 맞아야 합니다.
    private String timestamp;      // 네 번째 String과 타입이 맞아야 합니다.

    // 만약 Lombok @NoArgsConstructor를 사용하지 않는다면 기본 생성자도 직접 작성해야 합니다.
    // public CommonDto() {
    // }
}