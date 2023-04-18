import { useState } from "react";
import { css } from "@emotion/react";
import Select from "./Select";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Header } from "../Typography";

export default {
  title: "Components/Select/Basic",
  components: Select,
} as ComponentMeta<typeof Select>;

const options = [
  { value: "jack", label: "Jack" },
  { value: "lucy", label: "Lucy" },
  { value: "choi", label: "Choi" },
];

export const Default: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <Header strong size="small">
        #Basic Select Component
      </Header>
      <div>
        <p
          css={css`
            font-size: 12px;
          `}
        >
          <b>props의 options 값은 다음과 같은 타입 형식으로 전달해주세요.</b>
          <br />
          options:
          <br />
          &#123; <br />
          &#160;&#160;value: string;
          <br />
          &#160;&#160;label: string;
          <br />
          &#125;&#91;&#93;;
        </p>
      </div>
      <Select
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

Default.args = {
  label: "select label",
  defaultValue: "없음",
  disabled: false,
  size: "medium",
  options: options,
};

export const DisabledSelect = () => {
  return (
    <div>
      <div>
        <Header strong size="small">
          # Disabled Not Selected Value
        </Header>
        <Select
          defaultValue="없음"
          options={options}
          label="disabled select label"
          disabled
        />
      </div>
      <div
        css={css`
          margin-top: 20px;
        `}
      >
        <Header strong size="small">
          # Disabled Selected Value
        </Header>
        <Select
          defaultValue="lucy"
          options={options}
          label="disabled select label"
          disabled
        />
      </div>
    </div>
  );
};

const marginStyles = css`
  margin-bottom: 20px;
`;

export const SizeSelect = () => {
  return (
    <div>
      <div css={[marginStyles]}>
        <Header strong size="small">
          # small size select
        </Header>
        <Select
          defaultValue="없음"
          options={options}
          label="small size select label"
          size="small"
        />
      </div>
      <div css={[marginStyles]}>
        <Header strong size="small">
          # medium size select
        </Header>
        <Select
          defaultValue="없음"
          options={options}
          label="medium size select label"
        />
      </div>
      <div css={[marginStyles]}>
        <Header strong size="small">
          # big size select
        </Header>
        <Select
          defaultValue="없음"
          options={options}
          label="big size select label"
          size="big"
        />
      </div>
      <div css={[marginStyles]}>
        <Header strong size="small">
          # half size select
        </Header>
        <Select
          defaultValue="없음"
          options={options}
          label="half size select label"
          size="half"
        />
      </div>
      <div>
        <Header strong size="small">
          # full size select
        </Header>
        <Select
          defaultValue="없음"
          options={options}
          label="full size select label"
          size="full"
        />
      </div>
    </div>
  );
};
