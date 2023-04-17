import styled from "@emotion/styled";
import * as Colors from "../../constants/color";

const CaptionWrap = styled.p<{ color?: string; strong?: boolean }>`
  font-family: SpoqaHanSans;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  display: inline-flex;
  color: ${(props) => props?.color || Colors.black};
  font-weight: ${(props) => (props.strong ? "bold" : "normal")};
  margin: 0;
`;

interface CaptionProps {
  /** Caption tag 안의 내용 */
  children: React.ReactNode;
  /** font 색상 지정 */
  color?: string;
  /** font 굵기를 지정 */
  strong?: boolean;
}

/** `Caption` 컴포넌트는 테이블의 캡션(caption, 테이블이나 사진, 삽화 등에 붙는 설명)을 정의할 때 사용합니다.  */

const Caption = (props: CaptionProps) => {
  const { children, strong, color } = props;

  return (
    <CaptionWrap color={color} strong={strong}>
      {children}
    </CaptionWrap>
  );
};

export default Caption;
