/** @jsxImportSource @emotion/react */
import React, { MouseEvent } from 'react';
import colors from '../../design/colors';
import { ButtonHTMLAttributes } from 'react';

export function ConfirmButton({ btnType = 'confirm', label = '안녕 나는 확인버튼이야', onClick }: Props) {
  return (
    <button
      onClick={onClick}
      type="button"
      css={{
        cursor: 'pointer',
        width: '100%',
        height: '3rem',
        border: 'none',
        outline: 'none',
        borderRadius: '1rem',
        fontWeight: '600',
        fontSize: '1.15rem',
        transition: 'filter 0.3s',
        '&:hover': {
          filter: 'brightness(0.9)',
        },
        ...BTN_TYPES[btnType],
      }}
    >
      {label}
    </button>
  );
}

const BTN_TYPES = {
  confirm: {
    background: colors.confirm,
    color: colors.black,
  },
  warn: { background: colors.warn, color: colors.white },
  progress: { background: colors.progress, color: colors.white },
  ok: { background: colors.ok, color: colors.black },
  disabled: {
    background: colors.disabled,
    color: colors.grey,
    cursor: 'not-allowed',
    '&:hover': {},
  },
  certification: {
    background: colors.backgroundDark2,
    color: colors.white,
    '&:hover': {
      filter: 'brightness(0.8)',
    },
  },
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?: 'confirm' | 'warn' | 'progress' | 'ok' | 'disabled' | 'certification';
  label?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}
