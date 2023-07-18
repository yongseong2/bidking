package com.widzard.bidking.member.controller;

import com.widzard.bidking.member.dto.response.MemberCreateResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/members")
public class MemberController {

    @GetMapping("/mem3")
    public ResponseEntity<MemberCreateResponse> memtest3() {
        return new ResponseEntity<>(new MemberCreateResponse(1L), HttpStatus.ACCEPTED);
    }

}
