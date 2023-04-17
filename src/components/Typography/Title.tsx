import styled from "@emotion/styled";
import { css } from "@emotion/react";
import * as Colors from "../../constants/color";

const TitleWrap = styled.p<{ color?: string; strong?: boolean }>`
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
    font-size: 16px;
  `,
  big: css`
    font-size: 18px;
  `,
};
interface TitleProps {
  children: React.ReactNode;
  color?: string;
  size?: "small" | "big";
  strong?: boolean;
}

/** `Title` 컴포넌트는 일반 텍스트를 나타낼 때 사용 */

const Title = (props: TitleProps) => {
  const { children, color, size = "small", strong } = props;

  return (
    <TitleWrap css={[sizes[size]]} color={color} strong={strong}>
      {children}
    </TitleWrap>
  );
};

export default Title;
