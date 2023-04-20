import { css } from "@emotion/react";
import { Caption } from "../Typography";
import * as Colors from "../../constants/color";
import images from "../../utils/images";
import useUpload from "./upload.hook";
import useDidMountEffect from "../../hooks/useDidMountEffect";

const defaultStyles = css`
  height: 100%;
  width: calc(100% - 30px);
  padding: 0 14px;
  font-size: 16px;
  border: 1px solid ${Colors.blue_300};
  display: flex;
  cursor: pointer;
  box-sizing: content-box;

  & > p {
    margin: auto 0;
  }

  &::placeholder {
    color: ${Colors.gray_250};
  }

  &:disabled {
    background-color: ${Colors.gray_100};
    color: ${Colors.gray_400};
  }
`;

const imageWrapStyles = css`
  position: absolute;
  display: flex;
  top: 2px;
  bottom: 0;
  right: 5px;
`;

const buttonStyles = css`
  border: none;
  background-color: ${Colors.white};
  cursor: pointer;
  margin: 0 10px;
  padding: 0;
`;

const fileImageStyles = css`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  margin: auto 0;
`;

const inputStyles = css`
  display: none;

  &:disabled ~ label {
    background-color: ${Colors.gray_100};
    cursor: not-allowed;
  }
`;

const sizes = {
  small: css`
    width: 198px;
  `,
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

interface UploadProps {
  label?: string;
  placeholder?: string;
  size?: "small" | "medium" | "big" | "full" | "half";
  callback?: (data: FileData) => void;
  disabled?: boolean;
  id: string;
  preview?: string;
  deletePreivew?: () => void;
}

const Upload = (props: UploadProps) => {
  const {
    label,
    placeholder,
    size = "medium",
    callback,
    disabled,
    id,
    preview,
    deletePreivew,
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
        <input
          type="file"
          onChange={(e) => {
            fileChangeHandler(e);
          }}
          disabled={!!disabled}
          id={id}
          css={[inputStyles]}
        />
        <label htmlFor={id} css={defaultStyles}>
          {fileName || preview ? (
            <p
              css={css`
                width: 60%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              `}
            >
              {fileName || preview}
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
          {!fileName && (
            <img
              css={css`
                position: absolute;
                display: flex;
                margin: auto 0;
                top: 0;
                bottom: 0;
                right: 15px;
                width: 20px;
                height: 20px;
              `}
              src={images.camera}
              alt="images_camera"
            />
          )}
        </label>
        {(preview || fileName) && (
          <div css={[imageWrapStyles]}>
            <img
              src={preview || fileImage}
              alt="file_image"
              css={[fileImageStyles]}
            />
            <button
              css={buttonStyles}
              onClick={() => {
                if (preview && deletePreivew) {
                  deletePreivew();
                } else {
                  fileRemoveHandler();
                }
              }}
            >
              <img src={images.trash} alt="images_trash" css={css`
                  width: 20px;
                  height: 20px;
              `}/>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
