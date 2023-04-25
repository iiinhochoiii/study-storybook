import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as Colors from "../../constants/color";
import images from "../../utils/images";

const PageBtn = styled.button<{
  isActive?: boolean;
}>`
  border: none;
  width: 24px;
  height: 24px;
  text-align: center;
  background-color: ${(props) =>
    props.isActive ? Colors.gray_100 : Colors.white};
  color: ${(props) => (props.isActive ? "#2d3748" : Colors.blue_700)};
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  margin: 0 2px;

  & > img {
    width: 12px;
    height: 12px;
  }
  &:disabled {
    cursor: auto;
  }
`;

const alignStyles = {
  left: css`
    width: 100%;
    display: flex;
    justify-content: left;
  `,
  center: css`
    width: 100%;
    display: flex;
    justify-content: center;
  `,
  right: css`
    width: 100%;
    display: flex;
    justify-content: right;
  `,
};

interface Props {
  pageArr: number[];
  movePage: (page: number) => void;
  curPage: string | number;
  algin?: "left" | "center" | "right";
}

const Pagination = (props: Props) => {
  const { pageArr, movePage, curPage, algin = "center" } = props;

  return (
    <div
      css={css`
        margin: 20px 0;
        display: flex;
      `}
    >
      <div css={[alignStyles[algin]]}>
        <PageBtn
          onClick={() => {
            if (Number(curPage) > 1) {
              movePage(Number(curPage) - 1);
            }
          }}
          disabled={Number(curPage) === 1}
        >
          <img src={images.arrow_left} alt="arrow_prev" />
        </PageBtn>
        {pageArr.map((page) => (
          <PageBtn
            key={page}
            onClick={() => movePage(page)}
            isActive={Number(curPage) === page}
            disabled={Number(curPage) === page}
          >
            {page}
          </PageBtn>
        ))}
        <PageBtn
          onClick={() => {
            if (Number(curPage) < pageArr[pageArr.length - 1]) {
              movePage(Number(curPage) + 1);
            }
          }}
          disabled={Number(curPage) === pageArr[pageArr.length - 1]}
        >
          <img src={images.arrow_right} alt="arrow_next" />
        </PageBtn>
      </div>
    </div>
  );
};

export default Pagination;
