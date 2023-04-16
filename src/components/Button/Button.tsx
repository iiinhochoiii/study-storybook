import styled from "@emotion/styled";
import { css, Interpolation, Theme } from "@emotion/react";
import * as Colors from '../../constants/color';

const ButtonWrap = styled.button`
  outline: none;
  border: none;
  box-sizing: border-box;
  line-height: 1;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

const themes = {
  primary: css`
    background: ${Colors.primary};
    color: ${Colors.white};
    &:hover:enabled {
      background: #01452f;
    }

    &:disabled {
      background: #aed9cc;
    }
  `,
  secondary: css`
    background: ${Colors.secondary};
    color: ${Colors.white};
    &:disabled {
      color: #c6d3e1;
    }
  `,
  tertiary: css`
    background: none;
    border: 1px solid ${Colors.blue_300};
    color: ${Colors.blue_700};

    &:hover:enabled {
      border: 1px solid ${Colors.primary};
      color: ${Colors.black};
    }
    &:disabled {
      color: ${Colors.blue_400};
    }
  `,
};

const sizes = {
  small: css`
    height: 38px;
    line-height: 38px;
    width: 105px;
    font-size: 14px;
  `,
  medium: css`
    height: 48px;
    line-height: 48px;
    width: 145px;
    font-size: 16px;
  `,
  big: css`
    height: 3rem;
    font-size: 1.125rem;
    padding: 0 1.5rem;
  `,
  half: css`
    width: 50%;
    font-size: 14px;
    height: 38px;
    line-height: 38px;
  `,
  full: css`
    width: 100%;
    font-size: 14px;
    height: 48px;
    line-height: 38px;
  `,
};

interface ButtonProps {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 버튼의 생김새를 설정합니다. */
  theme?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "big" | "half" | "full";
  disabled?: boolean;
  customStyles?: Interpolation<Theme>;
}

/** `Button` 컴포넌트  */

const Button = (props: ButtonProps) => {
  const {
    children,
    onClick,
    theme = "primary",
    size = "medium",
    disabled,
    customStyles,
  } = props;

  return (
    <ButtonWrap
      css={[themes[theme], sizes[size], customStyles]}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </ButtonWrap>
  );
};

export default Button;
