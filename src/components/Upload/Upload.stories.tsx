import Upload, { FileData } from "./Upload";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { css } from "@emotion/react";

export default {
  title: "components/Upload/Basic",
  Components: Upload,
} as ComponentMeta<typeof Upload>;

export const Default: ComponentStory<typeof Upload> = (args) => {
  return (
    <div>
      <Upload
        {...args}
        callback={(data: FileData) => {
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
  disabled: false,
};

export const DisabledUpload = () => {
  return <Upload id="file" label="파일을 첨부해주세요" disabled />;
};

const boxStyles = css`
  margin-bottom: 20px;
`;

export const SizeUpload = () => {
  return (
    <div>
      <div css={[boxStyles]}>
        <Upload id="file1" label="small size file upload" size="small" />
      </div>
      <div css={[boxStyles]}>
        <Upload id="file2" label="medium size file upload" size="medium" />
      </div>
      <div css={[boxStyles]}>
        <Upload id="file3" label="big size file upload" size="big" />
      </div>
      <div css={[boxStyles]}>
        <Upload id="file4" label="half size file upload" size="half" />
      </div>
      <div>
        <Upload id="file5" label="full size file upload" size="full" />
      </div>
    </div>
  );
};
