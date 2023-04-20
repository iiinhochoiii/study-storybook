import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Caption } from "../Typography";
import * as Colors from "../../constants/color";
import images from "../../utils/images";
import useUpload from "./upload.hook";
import useDidMountEffect from "../../hooks/useDidMountEffect";

const BoxWrap = styled.div<{ disabled?: boolean }>`
  height: 100%;
  width: calc(100% - 120px);
  padding: 0 14px;
  font-size: 16px;
  border: 1px solid ${Colors.blue_300};
  display: block;

  background-color: ${(props) => props.disabled && Colors.gray_100};
  color: ${(props) => props.disabled && Colors.gray_400};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  box-sizing: content-box;

  &::placeholder {
    color: ${Colors.gray_250};
  }
`;

const buttonStyles = css`
  position: absolute;
  top: 1px;
  right: 90px;
  height: 100%;
  border: none;
  background-color: ${Colors.white};
  cursor: pointer;
  margin: 0 5px;

  &:disabled {
    background-color: ${Colors.gray_100};
    cursor: not-allowed;
  }
`;

const inputStyles = css`
  display: none;

  &:disabled ~ label {
    background-color: ${Colors.gray_100};
    cursor: not-allowed;
    border-left: 1px solid ${Colors.blue_300};
  }
`;

const labelStyles = css`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  line-height: 50px;
  color: ${Colors.blue_700};
  border: 1px solid ${Colors.blue_300};
  border-left: none;
  text-align: center;
  width: 90px;
  cursor: pointer;
`;

const sizes = {
  medium: css`
    width: 335px;
  `,
  big: css`
    width: 525px;
  `,
  full: css`
    width: 100%;
  `,
  half: css`
    width: 50%;
  `,
};

export interface FileData {
  file?: File;
  fileName: string;
  fileImage: string;
}

interface UploadWithButtonProps {
  label?: string;
  placeholder?: string;
  size?: "medium" | "big" | "full" | "half";
  callback?: (data: FileData) => void;
  disabled?: boolean;
  id: string;
  buttonText?: string;
}

const UploadWithButton = (props: UploadWithButtonProps) => {
  const {
    label,
    placeholder,
    size = "medium",
    callback,
    disabled,
    id,
    buttonText = "파일찾기",
  } = props;

  const { fileChangeHandler, fileRemoveHandler, fileName, fileImage, file } =
    useUpload();

  useDidMountEffect(() => {
    if (callback) {
      if (file && fileName && fileImage) {
        callback({
          file,
          fileName,
          fileImage,
        });
      } else if (!file && !fileName && !fileImage) {
        callback({
          file: undefined,
          fileName: "",
          fileImage: "",
        });
      }
    }
  }, [file, fileName, fileImage, callback]);

  return (
    <div css={[sizes[size]]}>
      {label && (
        <div
          css={css`
            margin-bottom: 6px;
          `}
        >
          <Caption color={Colors.blue_600} strong>
            {label}
          </Caption>
        </div>
      )}
      <div
        css={css`
          position: relative;
          height: 48px;
        `}
      >
        <BoxWrap disabled={disabled}>
          {fileName ? (
            <p
              css={css`
                width: 85%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              `}
            >
              {fileName}
            </p>
          ) : (
            <p
              css={css`
                color: ${Colors.gray_250};
              `}
            >
              {placeholder || "파일을 선택해주세요."}
            </p>
          )}
        </BoxWrap>
        {fileName && (
          <button
            css={buttonStyles}
            onClick={fileRemoveHandler}
            disabled={disabled}
          >
            <img src={images.trash} alt="images_trash" css={css`
                width: 20px;
                height: 20px;
            `} />
          </button>
        )}
        <input
          type="file"
          onChange={(e) => {
            fileChangeHandler(e);
          }}
          disabled={!!disabled}
          id={id}
          css={[inputStyles]}
        />
        <label htmlFor={id} css={[labelStyles]}>
          <span>{buttonText}</span>
        </label>
      </div>
    </div>
  );
};

export default UploadWithButton;
