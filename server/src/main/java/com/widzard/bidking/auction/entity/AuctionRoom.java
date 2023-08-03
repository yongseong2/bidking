package com.widzard.bidking.auction.entity;


import com.widzard.bidking.auction.dto.request.AuctionUpdateRequest;
import com.widzard.bidking.auction.exception.AuctionStartTimeInvalidException;
import com.widzard.bidking.auction.exception.EmptyThumbnailException;
import com.widzard.bidking.global.entity.BaseEntity;
import com.widzard.bidking.global.util.TimeUtility;
import com.widzard.bidking.image.entity.Image;
import com.widzard.bidking.item.entity.Item;
import com.widzard.bidking.item.exception.EmptyItemListException;
import com.widzard.bidking.member.entity.Member;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

@Getter
@Entity
@Slf4j
@Builder
@ToString
@DynamicInsert
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(
    name = "auction_room",
    uniqueConstraints = {
        @UniqueConstraint(
            name = "UniqueMemberAndStartedAt",
            columnNames = {"member_id", "started_at"}
        )
    },
    indexes = {
        @Index(name = "idx__auction_live_state__auction_room_trade_state__member_id",
            columnList = "auction_live_state,auction_room_trade_state,member_id")
    }
)
public class AuctionRoom extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "auction_room_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id", nullable = false)
    private Member seller; //

    @Column(nullable = false, length = 50)
    private String name; //(방이름)

    @Enumerated(EnumType.STRING)
    @ColumnDefault("'BEFORE_LIVE'")
    @Column(name = "auction_live_state", nullable = false, length = 20)
    private AuctionRoomLiveState auctionRoomLiveState; // (라이브 상태)

    @Enumerated(EnumType.STRING)
    @ColumnDefault("'BEFORE_PROGRESS'")
    @Column(name = "auction_room_trade_state", nullable = false, length = 20)
    private AuctionRoomTradeState auctionRoomTradeState; //(거래 상태)

    @Enumerated(EnumType.STRING)
    @ColumnDefault("'COMMON'")
    @Column(nullable = false, length = 10)
    private AuctionRoomType auctionRoomType; // (경매방식)

    @Column(name = "started_at", nullable = false)
    private LocalDateTime startedAt; //경매방 시작시간

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "image_id", nullable = false)
    private Image image; // (썸네일)

    @OneToMany(mappedBy = "auctionRoom", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Item> itemList = new ArrayList<>();

    @Column(nullable = false)
    private boolean isSessionCreated;

    public static AuctionRoom createAuctionRoom(
        String name,
        Member seller,
        AuctionRoomType auctionRoomType,
        LocalDateTime startedAt,
        Image auctionRoomImg
    ) {
        return AuctionRoom.builder()
            .seller(seller)
            .name(name)
            .auctionRoomType(auctionRoomType)
            .auctionRoomTradeState(AuctionRoomTradeState.BEFORE_PROGRESS)
            .auctionRoomLiveState(AuctionRoomLiveState.BEFORE_LIVE)
            .startedAt(startedAt)
            .image(auctionRoomImg)
            .itemList(new ArrayList<>())
            .isSessionCreated(false)
            .build();
    }

    public void addItem(Item item) {
        item.registAuctionRoom(this);
        this.itemList.add(item);
    }

    public void removeItem(Item item) {
        this.itemList.remove(item);
        item.registAuctionRoom(null);
    }

    public void update(AuctionUpdateRequest req) {
        this.name = req.getAuctionTitle();
        this.startedAt = req.getStartedAt();
        this.auctionRoomType = req.getAuctionRoomType();
//        updateImg(req.getImageDto());
    }

    public void changeLiveState(AuctionRoomLiveState state) {
        this.auctionRoomLiveState = state;
    }

    public void changeTradeState(AuctionRoomTradeState state) {
        this.auctionRoomTradeState = state;
    }

    public void changeIsSessionCreated(boolean state) {
        this.isSessionCreated = state;
    }

    public void changeStartedAt(LocalDateTime startedAt) {
        this.startedAt = startedAt;
    }

    // 경매방 검증
    public void isValid() {
        //아이템 갯수
        List<Item> itemList = this.getItemList();
        if (itemList == null || itemList.size() == 0) {
            throw new EmptyItemListException();
        }
        //시작시간
        LocalDateTime now = LocalDateTime.now();
        if (this.getStartedAt().isBefore(now.plusHours(1))) {
            throw new AuctionStartTimeInvalidException();
        }
        //썸네일유무
        if (this.getImage() == null) {
            throw new EmptyThumbnailException();
        }
    }
}

