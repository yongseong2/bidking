package com.widzard.bidking.delivery.entity;

import com.widzard.bidking.global.entity.Address;
import com.widzard.bidking.global.entity.BaseEntity;
import com.widzard.bidking.order.entity.Order;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "delivery")
public class Delivery extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "delivery_id")
    private Long id; //

    @OneToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @Embedded
    private Address address; //

    private String message; // (배송 메세지)

    private String receiverName;

    private String receiverPhoneNumber;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "invoice_id")
    private Invoice invoice;
    
}