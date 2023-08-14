/** @jsxImportSource @emotion/react */
import React, { MutableRefObject, useEffect, useState } from 'react';
import colors from '../../design/colors';
import { Spacing } from '../common/Spacing';
import { AuctionItemStatus, DUMMY } from './auctionItemList/AuctionItemStatus';
import { BidPrice } from './bidPrice/BidPrice';
import { Timer } from './bidTimer/Timer';
import { Bidder } from './bidder/Bidder';
import { BiddingForm } from './BidForm/BiddingForm';
import { Socket } from 'socket.io-client';
import { ChatRoom } from './chatRoom/ChatRoom';
import { askingPriceParse } from '../../util/bidPriceParse';
import { useAuctionSystem } from '../../hooks/useAuctionSystem';
import { BidCtrl } from './bidForm/BidCtrl';

export function AuctionSystem({ userType, theme = 'light', nickname, auctionRoomId, socket }: Props) {
  const { order, currPrice, topbidder, currId, itemList, disable, currTime, liveStatus } = useAuctionSystem(socket);

  return (
    <div>
      <div
        css={{
          width: '100%',
          borderRadius: '1.85rem',
          padding: '1rem',
          ...THEME_VARIANT[theme],
        }}
      >
        <AuctionItemStatus order={order} theme={theme} itemList={itemList} currentItemId={currId} />
        <Spacing rem="1" />
        <Bidder theme={theme} bidder={topbidder} />
        <Spacing rem="1" />
        <BidPrice align="center" theme={theme} price={currPrice} />
        <Spacing rem="1.5" />
        <Timer theme={theme} time={currTime} />
        <Spacing rem="1.5" />
        {userType === 'order' ? (
          <BiddingForm
            auctionRoomId={auctionRoomId}
            itemId={currId}
            theme={theme}
            currPrice={currPrice}
            askingPrice={askingPriceParse(currPrice)}
            disable={disable}
          />
        ) : (
          <BidCtrl liveStatus={liveStatus} auctionRoomId={auctionRoomId} itemId={currId} />
        )}
      </div>
      <Spacing rem="0.5" />
      <ChatRoom roomId={auctionRoomId} nickname={nickname} theme={theme} userType="order" socket={socket} />
    </div>
  );
}

const THEME_VARIANT = {
  light: {
    color: colors.black,
    backgroundColor: colors.backgroundLight2,
  },
  dark: {
    color: colors.white,
    backgroundColor: colors.backgroundDark2,
  },
};

interface Props {
  userType: 'order' | 'seller';
  theme: 'dark' | 'light';
  nickname: string;
  auctionRoomId: number;
  socket: MutableRefObject<Socket | null>;
  setNotice?: () => Promise<unknown>;
}
