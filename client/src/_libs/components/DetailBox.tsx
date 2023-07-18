/** @jsxImportSource @emotion/react */
import React, { JSXElementConstructor } from 'react';
import { HTMLAttributes } from 'react';
import colors from '../design/colors';
import { Text } from './Text';

interface Props extends HTMLAttributes<HTMLDivElement> {
  theme: 'light' | 'dark';
  title: string;
}

export function DetailBox({ title = '경매제목', theme = 'light' }: Props) {
  return (
    <div
      css={{
        width: '50rem',
        borderRadius: '0.5rem',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        ...THEME_VARIANTS[theme],
      }}
    >
      <Text weight='bold' content={title}></Text>
    </div>
  );
}

const THEME_VARIANTS = {
  light: {
    backgroundColor: colors.backgroundLight2,
  },
  dark: {
    backgroundColor: colors.backgroundDark2,
    color: colors.white,
  },
};
