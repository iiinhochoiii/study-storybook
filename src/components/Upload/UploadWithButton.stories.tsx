import UploadWithButton from "./UploadWithButton";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { css } from "@emotion/react";

export default {
  title: "components/Upload/UploadWithButton",
  Components: UploadWithButton,
} as ComponentMeta<typeof UploadWithButton>;

export const Default: ComponentStory<typeof UploadWithButton> = (args) => {
  return (
    <div>
      <UploadWithButton
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
  placeholder: "",
  label: "파일을 첨부해주세요.",
  buttonText: "파일찾기",
  disabled: false,
};

export const DisabledUpload = () => {
  return <UploadWithButton id="file" label="파일을 첨부해주세요" disabled />;
};

const boxStyles = css`
  margin-bottom: 20px;
`;

export const SizeUpload = () => {
  return (
    <div>
      <div css={[boxStyles]}>
        <UploadWithButton
          id="file2"
          label="medium size file upload"
          size="medium"
        />
      </div>
      <div css={[boxStyles]}>
        <UploadWithButton id="file3" label="big size file upload" size="big" />
      </div>
      <div css={[boxStyles]}>
        <UploadWithButton
          id="file4"
          label="half size file upload"
          size="half"
        />
      </div>
      <div>
        <UploadWithButton
          id="file5"
          label="full size file upload"
          size="full"
        />
      </div>
    </div>
  );
};
