import { useState } from "react";
import { css } from "@emotion/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Pagination from "./Pagination";
import { Header, Caption } from "../Typography";
import * as Colors from "../../constants/color";

export default {
  title: "Components/Pagination",
  components: Pagination,
} as ComponentMeta<typeof Pagination>;

const borderStyles = css`
  border: 1px solid ${Colors.gray_200};
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 20px;
`;

export const Default: ComponentStory<typeof Pagination> = (args) => {
  const [curPage1, setCurPage1] = useState(1);
  const [curPage2, setCurPage2] = useState(1);
  const [curPage3, setCurPage3] = useState(1);

  return (
    <div
      css={css`
        width: 50%;
      `}
    >
      <Header strong size="small">
        # Pagination Component
      </Header>
      <div css={[borderStyles]}>
        <Caption>- align left</Caption>
        <Pagination
          {...args}
          algin="left"
          curPage={curPage1}
          movePage={(page) => setCurPage1(page)}
        />
      </div>
      <div css={[borderStyles]}>
        <Caption>- align center or default</Caption>
        <Pagination
          {...args}
          curPage={curPage2}
          movePage={(page) => setCurPage2(page)}
        />
      </div>
      <div css={[borderStyles]}>
        <Caption>- align right</Caption>
        <Pagination
          {...args}
          algin="right"
          curPage={curPage3}
          movePage={(page) => setCurPage3(page)}
        />
      </div>
    </div>
  );
};

Default.args = {
  pageArr: [1, 2, 3, 4, 5],
};
