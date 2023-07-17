/** @jsxImportSource @emotion/react */
import React from 'react';
import colors from '../design/colors';
import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'confirm' | 'white';
  size?: 'small' | 'medium';
  label: string;
  activated?: 0 | 1;
}

export function RoundButton({
  variant = 'confirm',
  size = 'small',
  label = '로그인',
  activated = 1,
}: Props) {
  return (
    <button
      css={{
        borderRadius: '2.25rem',
        fontSize: '1rem',
        ...TYPE_VARIANTS[variant],
        ...SIZE_VARIANTS[size],
        ...IS_ACTIVATED[activated],
      }}
    >
      {label}
    </button>
  );
}

const TYPE_VARIANTS = {
  confirm: {
    border: `1px solid ${colors.confirm}`,
    backgroundColor: colors.confirm,
    // backgroundColor: colors.confirm,
    '&:hover': {
      border: `1px solid ${colors.confirm33}`,
      backgroundColor: colors.confirm33,
    },
  },
  white: {
    border: `1px solid ${colors.confirm}`,
    backgroundColor: colors.white,
    '&:hover': {
      backgroundColor: colors.lightgrey,
      border: `1px solid ${colors.lightgrey}`,
    },
  },
};

const SIZE_VARIANTS = {
  small: {
    height: '2rem',
  },
  medium: {
    height: '3rem',
  },
};

const IS_ACTIVATED = {
  0: {},
  1: {},
};
