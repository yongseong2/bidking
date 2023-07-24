package com.widzard.bidking.global.security.config;

import com.widzard.bidking.global.security.CustomAuthorizationFilter;
import com.widzard.bidking.global.security.CustomUserDetailsService;
import java.util.Arrays;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

/*
로그인 인증이 필요 없는 경우
- 로그인, 회원가입, 로그아웃, 유저 닉네임/아이디 체크, 카테고리 리스트
- 경매 진행 예정, 경매 진행 중 리스트

로그인 인증이 필요함
- 나머지 모든 기능
 */
@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {


    private final CustomAuthorizationFilter customAuthorizationFilter;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .cors().configurationSource(corsConfigurationSource())
            .and()
            .csrf().disable()
            .httpBasic().disable() // 토큰 사용하므로 basic disable
            .sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS); // jwt 사용 (세션 사용x)

        http.authorizeRequests()
            .antMatchers(
                "/login",
                "/api/v1/members/login",
                "/api/v1/members/logout",
                "/api/v1/members/check/**",
                "/api/v1/members/signup",
                "/api/v1/items/categories"
            ).permitAll()
            .antMatchers(HttpMethod.GET, "/api/v1/auctions").permitAll()
            .anyRequest().authenticated()
            .and()
            .addFilterBefore(customAuthorizationFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }


    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        configuration.addAllowedOriginPattern("*"); //TODO System.getenv("CLIENT_URL") 응답을 허용할 ip
        configuration.setAllowedMethods(
            Arrays.asList("HEAD", "GET", "POST", "PUT", "PATCH", "DELETE")); // 응답을 허용할 http method
        configuration.addAllowedHeader("*"); // 모든 header 허용
        configuration.setAllowCredentials(true); // 서버가 응답을 할 때 json을 자바스크립트에서 처리할 수 있게 할지 여부

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/api/**", configuration);

        return source;
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }


}
