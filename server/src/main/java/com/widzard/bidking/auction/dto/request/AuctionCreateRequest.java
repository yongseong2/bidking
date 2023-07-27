package com.widzard.bidking.auction.dto.request;

import com.widzard.bidking.auction.entity.AuctionRoomType;
import java.util.ArrayList;
import java.util.List;
import javax.validation.Valid;
import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@AllArgsConstructor
public class AuctionCreateRequest {

    @NotBlank(message = "경매방 제목을 입력하세요")
    private String auctionTitle; //경매방 제목

    @NotNull(message = "시작 시간을 입력하세요")
    private String startedAt; //경매방 시작시간

    @NotNull(message = "경매 방식을 선택하세요")
    private AuctionRoomType auctionRoomType; //경매 방식

    @AssertTrue(message = "금지 품목 규정 확인 여부를 체크하세요")
    private Boolean itemPermissionChecked; // 금지 품목 규정 확인 여부

    @AssertTrue(message = "배송 규정 확인 여부를 체크하세요")
    private Boolean deliveryRulesChecked; // 배송 규정 확인 여부

    @Valid
    private List<ItemCreateRequest> itemList = new ArrayList<>(); // 상품 리스트


}