import { useState } from "react";
import InputWithButton from "./InputWithButton";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { css } from "@emotion/react";

export default {
  title: "components/Input/InputWithButton",
  components: InputWithButton,
} as ComponentMeta<typeof InputWithButton>;

export const Default: ComponentStory<typeof InputWithButton> = (args) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <p>Basic InputWithButton Component</p>
      <InputWithButton
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>input value 값: {value}</p>
    </div>
  );
};

Default.args = {
  buttonText: "중복확인",
  onClick: () => alert("clicked!"),
  label: "input with button label",
  placeholder: "입력해주세요.",
  size: "medium",
  error: "",
  success: "",
  disabled: false,
  disabled_button: false,
};

export const DisabledInputWithButton = () => {
  return (
    <div>
      <div>
        <p># disabled input and button</p>
        <InputWithButton
          label="disabled input with button"
          placeholder="disabled 입니다."
          disabled
          disabled_button
          buttonText="disabled"
          onClick={() => alert("disabled button clicked!")}
        />
      </div>
      <div>
        <p># disabled input only</p>
        <InputWithButton
          label="disabled input with button"
          placeholder="disabled 입니다."
          disabled
          buttonText="disabled"
          onClick={() => alert("disabled button clicked!")}
        />
      </div>
      <div>
        <p># disabled button only</p>
        <InputWithButton
          label="disabled input with button"
          placeholder="disabled 입니다."
          disabled_button
          buttonText="disabled"
          onClick={() => alert("disabled button clicked!")}
        />
      </div>
    </div>
  );
};

export const SizeInputWithButton = () => {
  return (
    <div>
      <div>
        <p>- Small Size</p>
        <InputWithButton
          label="small input with button"
          placeholder="small input with button 입니다."
          size="small"
          buttonText="small"
          onClick={() => alert("small button clicked!")}
        />
      </div>
      <div>
        <p>- Medium Size</p>
        <InputWithButton
          label="medium input with button"
          placeholder="medium input with button 입니다."
          size="medium"
          buttonText="medium"
          onClick={() => alert("medium button clicked!")}
        />
      </div>
      <div>
        <p>- Big Size</p>
        <InputWithButton
          label="big input with button"
          placeholder="big input with button 입니다."
          size="big"
          buttonText="big"
          onClick={() => alert("big button clicked!")}
        />
      </div>
      <div>
        <p>- Half Size</p>
        <InputWithButton
          label="half inpu with button"
          placeholder="half input with button 입니다."
          size="half"
          buttonText="half"
          onClick={() => alert("half button clicked!")}
        />
      </div>
      <div>
        <p>- Full Size</p>
        <InputWithButton
          label="full input with button"
          placeholder="full input with button 입니다."
          size="full"
          buttonText="full"
          onClick={() => alert("full button clicked!")}
        />
      </div>
    </div>
  );
};

export const SubTextInputWithButton = () => {
  const [errMsg, setErrMsg] = useState("");
  const [sucMsg, setSucMsg] = useState("");

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
        <InputWithButton
          value="test@email.com"
          label="이메일"
          placeholder="입력 해주세요."
          onChange={() => null}
          buttonText="중복확인"
          onClick={() => setErrMsg("중복된 이메일 입니다.")}
          error={errMsg}
        />
      </div>
      <div
        css={css`
          margin-top: 20px;
        `}
      >
        <InputWithButton
          value="test22@email.com"
          label="이메일"
          placeholder="입력 해주세요."
          onChange={() => null}
          buttonText="중복확인"
          onClick={() => setSucMsg("사용 가능한 이메일 입니다.")}
          success={sucMsg}
        />
      </div>
    </div>
  );
};
