import { useState } from "react";
import Tabs from "./Tabs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { Header, Caption } from "../Typography";
import { css } from "@emotion/react";

const datas = [
  { id: 1, title: "파트너", as: "/partners" },
  {
    id: 2,
    title: "사용자",
    as: "/users",
  },
];

export default {
  title: "components/Tabs",
  components: Tabs,
} as ComponentMeta<typeof Tabs>;

export const Default: ComponentStory<typeof Tabs> = (args) => {
  return (
    <MemoryRouter>
      <Header strong size="small">
        # Tabs component
      </Header>
      <div>
        <Caption>
          props의 type이 default 또는 &nbsp; <b>horizontal</b> 일 때, Tabs는
          가로로 표시 됩니다.
        </Caption>
      </div>
      <div>
        <Tabs {...args} type="horizontal" activeText={"파트너"} />
      </div>
      <div
        css={css`
          margin-top: 30px;
        `}
      >
        <Caption>
          props의 type이 &nbsp;<b>vertical</b> 일 때, Tabs는 세로로 표시 됩니다.
        </Caption>
      </div>

      <div>
        <Tabs
          {...args}
          type="vertical"
          activeText={"파트너"}
          underline={false}
        />
      </div>
    </MemoryRouter>
  );
};

Default.args = {
  datas: datas,
};

export const SizeTabs: ComponentStory<typeof Tabs> = (args) => {
  return (
    <MemoryRouter>
      <div
        css={css`
          display: flex;
        `}
      >
        <div>
          <Header strong size="small">
            # Medium Size Tabs
          </Header>
          <div>
            <Caption strong>- horizontal</Caption>
          </div>
          <div>
            <Tabs {...args} activeText={"파트너"} />
          </div>

          <div>
            <Caption strong>- vertical</Caption>
          </div>
          <div>
            <Tabs {...args} activeText={"파트너"} type="vertical" />
          </div>
        </div>

        <div
          css={css`
            margin-left: 100px;
          `}
        >
          <Header strong size="small">
            # Big Size Tabs
          </Header>
          <div>
            <Caption strong>- horizontal</Caption>
          </div>
          <div>
            <Tabs {...args} activeText={"파트너"} size="big" />
          </div>
          <div>
            <Caption strong>- vertical</Caption>
          </div>
          <div>
            <Tabs {...args} activeText={"파트너"} size="big" type="vertical" />
          </div>
        </div>
      </div>
    </MemoryRouter>
  );
};

SizeTabs.args = {
  datas: datas,
  activeText: "파트너",
};

export const UnderLineTabs: ComponentStory<typeof Tabs> = (args) => {
  return (
    <MemoryRouter>
      <div
        css={css`
          display: flex;
        `}
      >
        <div>
          <Header strong size="small">
            # With UnderLine
          </Header>
          <div>
            <Caption strong>- horizontal</Caption>
          </div>
          <div>
            <Tabs {...args} activeText={"파트너"} />
          </div>

          <div>
            <Caption strong>- vertical</Caption>
          </div>
          <div>
            <Tabs {...args} activeText={"파트너"} type="vertical" />
          </div>
        </div>

        <div
          css={css`
            margin-left: 100px;
          `}
        >
          <Header strong size="small">
            # Without Underline
          </Header>
          <div>
            <Caption strong>- horizontal</Caption>
          </div>
          <div>
            <Tabs {...args} activeText={"파트너"} underline={false} />
          </div>
          <div>
            <Caption strong>- vertical</Caption>
          </div>
          <div>
            <Tabs
              {...args}
              activeText={"파트너"}
              type="vertical"
              underline={false}
            />
          </div>
        </div>
      </div>
    </MemoryRouter>
  );
};

UnderLineTabs.args = {
  datas: datas,
};
