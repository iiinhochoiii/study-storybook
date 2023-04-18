import { useState } from "react";
import { css } from "@emotion/react";
import SelectWithButton from "./SelectWithButton";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Header } from "../Typography";

export default {
  title: "Components/Select/SelectWithButton",
  components: SelectWithButton,
} as ComponentMeta<typeof SelectWithButton>;

const options = [
  { value: "jack", label: "Jack" },
  { value: "lucy", label: "Lucy" },
  { value: "choi", label: "Choi" },
];

export const Default: ComponentStory<typeof SelectWithButton> = (args) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <Header strong size="small">
        #Basic SelectWithButton Component
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
      <SelectWithButton
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
  buttonText: "저장",
  buttonTheme: "tertiary",
};

export const DisabledSelectWithButton = () => {
  return (
    <div>
      <div>
        <Header strong size="small">
          # Disabled Not Selected Value
        </Header>
        <SelectWithButton
          defaultValue="없음"
          options={options}
          label="disabled select label"
          disabled
          onClick={() => null}
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
        <SelectWithButton
          defaultValue="lucy"
          options={options}
          label="disabled select label"
          disabled
          onClick={() => null}
        />
      </div>
    </div>
  );
};

const marginStyles = css`
  margin-bottom: 20px;
`;

export const SizeSelectWithButton = () => {
  return (
    <div>
      <div css={[marginStyles]}>
        <Header strong size="small">
          # small size select
        </Header>
        <SelectWithButton
          defaultValue="없음"
          options={options}
          label="small size select label"
          size="small"
          onClick={() => null}
        />
      </div>
      <div css={[marginStyles]}>
        <Header strong size="small">
          # medium size select
        </Header>
        <SelectWithButton
          defaultValue="없음"
          options={options}
          label="medium size select label"
          onClick={() => null}
        />
      </div>
      <div css={[marginStyles]}>
        <Header strong size="small">
          # big size select
        </Header>
        <SelectWithButton
          defaultValue="없음"
          options={options}
          label="big size select label"
          size="big"
          onClick={() => null}
        />
      </div>
      <div css={[marginStyles]}>
        <Header strong size="small">
          # half size select
        </Header>
        <SelectWithButton
          defaultValue="없음"
          options={options}
          label="half size select label"
          size="half"
          onClick={() => null}
        />
      </div>
      <div>
        <Header strong size="small">
          # full size select
        </Header>
        <SelectWithButton
          defaultValue="없음"
          options={options}
          label="full size select label"
          size="full"
          onClick={() => null}
        />
      </div>
    </div>
  );
};
