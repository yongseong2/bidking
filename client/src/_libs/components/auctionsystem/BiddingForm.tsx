/** @jsxImportSource @emotion/react */
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { HTMLAttributes } from 'react';
import colors from '../../design/colors';
import { bidPriceParse } from '../../util/bidPriceParse';
import { ConfirmButton } from '../common/ConfirmButton';
import { Input } from '../common/Input';

import { Spacing } from '../common/Spacing';

interface Props extends HTMLAttributes<HTMLDivElement> {
  theme: 'dark' | 'light';
  askingPrice: string;
  onBid: Dispatch<SetStateAction<string>>;
}
export function BiddingForm({ theme = 'light', askingPrice, onBid }: Props) {
  const [bidPrice, setBidPrice] = useState<string>('');
  useEffect(() => {}, []);
  return (
    <div
      css={{
        // border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        ...THEME_VARIANT[theme],
      }}
    >
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <ConfirmButton
          btnType="warn"
          label={bidPriceParse(askingPrice) + '원 즉시입찰'}
          onClick={() => onBid(askingPrice)}
        />
      </div>
      <Spacing rem="0.5" />
      <div css={{ display: 'flex' }}>
        <Input
          theme={theme}
          inputType="text"
          placeholder={'입찰가 입력'}
          value={bidPrice}
          onChange={e => setBidPrice(e.target.value)}
        />
        <Spacing rem="1" dir="h" />
        <ConfirmButton
          btnType="confirm"
          label="입찰"
          onClick={() => {
            if (bidPrice.trim().length === 0) {
              alert('똑바로 가격쓰세요ㅡㅡ');
              return;
            }
            //무조건 현재 가격보다 더 크게써야함
            onBid(bidPrice);
            setBidPrice('');
          }}
        />
      </div>
    </div>
  );
}
const THEME_VARIANT = {
  light: {
    color: colors.black,
  },
  dark: {
    color: colors.white,
    backgroundColor: colors.backgroundDark2,
  },
};
