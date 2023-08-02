/** @jsxImportSource @emotion/react */
import React from 'react';
import { ChatRoom } from '../../_libs/components/auction/ChatRoom';
import { AuctionNotice } from '../../_libs/components/auctionsystem/AuctionNotice';
import { AuctionSystem } from '../../_libs/components/auctionsystem/AuctionSystem';
import { AuctionTitle } from '../../_libs/components/auctionsystem/AuctionTitle';
import { Spacing } from '../../_libs/components/common/Spacing';
import { OrderStream } from '../../_libs/components/meeting/OrderStream';
import colors from '../../_libs/design/colors';

export function Auction() {
  const auctionId = 2;
  const userId = 3;
  const nickname = '김성용';
  const auctionType = '네덜란드';
  const title = '이건 사세요 제발';
  const notice = '여긴 판매자가 채팅으로 입력한 공지사항입니다';

  return (
    <div css={{ display: 'flex', width: '100%', backgroundColor: colors.backgroundLight }}>
      <div css={{ width: '75%', padding: '1.5rem 0.75rem 1.5rem 1.5rem' }}>
        <AuctionTitle theme="light" nickname="정예지" auctionType="네덜란드" title="아.." />
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: 'calc(100% - 10rem)',
            justifyContent: 'center',
          }}
        >
          <OrderStream auctionId={auctionId} userId={userId} userType="order" />
          <Spacing rem="1" />
          <AuctionNotice notice={notice} userType="order" />
        </div>
      </div>
      <div
        css={{
          width: '25%',
          minWidth: '25rem',
          maxWidth: '32rem',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5rem 1.5rem 1.5rem 0.75rem',
        }}
      >
        <AuctionSystem theme="light" />
        <Spacing rem="1.5" />
        <ChatRoom theme="light" userType="order" />
      </div>
    </div>
  );
}
