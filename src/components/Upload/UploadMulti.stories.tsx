import UploadMulti from "./UploadMulti";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { css } from "@emotion/react";
import { Header } from "../Typography";

export default {
  title: "components/Upload/UploadMulti",
  Components: UploadMulti,
} as ComponentMeta<typeof UploadMulti>;

export const Default: ComponentStory<typeof UploadMulti> = (args) => {
  return (
    <div>
      <UploadMulti
        {...args}
        callback={(data: any) => {
          console.log(data);
        }}
      />
      <p
        css={css`
          margin-top: 15px;
          font-size: 12px;
        `}
      >
        Callback 함수의 data는 console.log를 확인해주세요.
      </p>
    </div>
  );
};

Default.args = {
  id: "file",
  label: "*상세사진 (10개까지 등록가능)",
  subLabel: "아래의 [카메라] 버튼을 눌러 추가해 주세요.",
  disabled: false,
  buttonLocation: "right",
};

export const DisabledUpload = () => {
  return (
    <div>
      <UploadMulti
        id="files"
        label="disabled label"
        subLabel="아래의 [카메라] 버튼을 눌러 추가해 주세요."
        disabled
      />
    </div>
  );
};

export const ButtonLocationUpload = () => {
  return (
    <div>
      <Header strong># Right</Header>
      <p
        css={css`
          font-size: 12px;
          line-height: 1.5;
        `}
      >
        파일 추가 버튼이 이미지 리스트에서 <b>"우측"</b>에 위치 합니다.
        <br />
        props로 "buttonLocation" 값을 "right"로 지정 합니다.
        <br />
        (buttonLocation 값이 없을 때, 기본값 "right")
      </p>
      <div>
        <UploadMulti
          id="files_right"
          label="right add button"
          subLabel="아래의 [카메라] 버튼을 눌러 추가해 주세요."
        />
      </div>

      <div
        css={css`
          margin-top: 20px;
        `}
      >
        <Header strong># Left</Header>
        <p
          css={css`
            font-size: 12px;
            line-height: 1.5;
          `}
        >
          파일 추가 버튼이 이미지 리스트에서 <b>"좌측"</b>에 위치 합니다.
          <br />
          props로 "buttonLocation" 값을 "left"로 지정 합니다.
        </p>
        <div>
          <UploadMulti
            id="files_left"
            label="left add button"
            subLabel="아래의 [카메라] 버튼을 눌러 추가해 주세요."
            buttonLocation="left"
          />
        </div>
      </div>
    </div>
  );
};
