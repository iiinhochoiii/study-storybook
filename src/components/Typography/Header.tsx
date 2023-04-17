import styled from "@emotion/styled";
import { css } from "@emotion/react";
import * as Colors from "../../constants/color";

const HeaderWrap = styled.h1<{ color?: string; strong?: boolean }>`
  color: ${(props) => props?.color || Colors.black};
  font-weight: ${(props) => (props.strong ? "bold" : "normal")};
  font-family: SpoqaHanSans;
  line-height: 1.5;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  display: inline-flex;
  margin: 0;
`;

const sizes = {
  small: css`
    font-size: 20px;
  `,
  medium: css`
    font-size: 24px;
  `,
  big: css`
    font-size: 28px;
  `,
};
interface HeaderProps {
  children: React.ReactNode;
  color?: string;
  size?: "small" | "medium" | "big";
  strong?: boolean;
}

/** `Header` 컴포넌트는 페이지 또는 섹션 단위의 제목을 나타낼 때 사용합니다. */

const Header = (props: HeaderProps) => {
  const { children, color, size = "medium", strong } = props;

  return (
    <HeaderWrap css={[sizes[size]]} color={color} strong={strong}>
      {children}
    </HeaderWrap>
  );
};

export default Header;
