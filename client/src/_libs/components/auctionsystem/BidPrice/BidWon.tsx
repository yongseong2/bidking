/** @jsxImportSource @emotion/react */
import React from 'react';
import { HTMLAttributes } from 'react';

export function BidWon() {
  return (
    <div
      css={{
        // border: '1px solid black',
        width: '2.5rem',
        height: '2.5rem',
        textAlign: 'center',
        fontWeight: '700',
        fontFeatureSettings: '"tnum"',
        fontSize: '2.5rem',
        overflow: 'hidden',
        position: 'relative',
        lineHeight: '2.35rem',
      }}
    >
      <div css={{ position: 'absolute', top: '0.05rem' }}>
        <ul>
          <li>원</li>
        </ul>
      </div>
    </div>
  );
}
