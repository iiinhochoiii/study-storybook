import { useState } from "react";
import Input from "./Input";
import { css } from "@emotion/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "components/Input/Basic",
  components: Input,
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <p>기본 Input Component</p>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...args}
      />
      <p>input value 값: {value}</p>
    </div>
  );
};

Default.args = {
  label: "label을 입력해주세요.",
  placeholder: "입력해주세요.",
  size: "medium",
  unit: "",
  error: "",
  success: "",
  disabled: false,
};

export const InputWithUnit = () => {
  return (
    <div>
      <p
        css={css`
          font-size: 12px;
        `}
      >
        unit은 Input 영역 내 우측에 위치하는 텍스트를 의미합니다.
      </p>
      <Input label="unit input" placeholder="입력해주세요." unit="원" />
    </div>
  );
};
export const sizeInput = () => {
  return (
    <div>
      <div>
        <p>- Small Size</p>
        <Input
          label="small input"
          placeholder="small input 입니다."
          size="small"
        />
      </div>
      <div>
        <p>- Medium Size</p>
        <Input
          label="medium input"
          placeholder="medium input 입니다."
          size="medium"
        />
      </div>
      <div>
        <p>- Big Size</p>
        <Input label="big input" placeholder="big input 입니다." size="big" />
      </div>
      <div>
        <p>- Half Size</p>
        <Input
          label="half input"
          placeholder="half input 입니다."
          size="half"
        />
      </div>
      <div>
        <p>- Full Size</p>
        <Input
          label="full input"
          placeholder="full input 입니다."
          size="full"
        />
      </div>
    </div>
  );
};

export const DisabledInput = () => {
  return (
    <div>
      <div>
        <p>disabled input</p>
        <Input label="disabled input" placeholder="disabled 입니다." disabled />
      </div>

      <div>
        <p>disabled input with unit</p>
        <Input
          label="disabled input"
          placeholder="disabled 입니다."
          unit="원"
          disabled
        />
      </div>
    </div>
  );
};

export const SubTextInput = () => {
  return (
    <div>
      <p
        css={css`
          font-size: 12px;
        `}
      >
        하단에 'error' 또는 'success' message를 표시 합니다.
      </p>
      <div>
        <Input
          value="백"
          label="sub text"
          placeholder="입력 해주세요."
          unit="만원"
          error="숫자만 입력해주세요."
          onChange={() => null}
        />
      </div>
      <div
        css={css`
          margin-top: 20px;
        `}
      >
        <Input
          value="010-1234-5678"
          label="sub text"
          placeholder="입력 해주세요."
          success="올바른 전화번호 입니다."
          onChange={() => null}
        />
      </div>
    </div>
  );
};
