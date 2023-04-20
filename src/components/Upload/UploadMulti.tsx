import { css } from "@emotion/react";
import { Caption } from "../Typography";
import * as Colors from "../../constants/color";
import images from "../../utils/images";
import useUpload from "./upload.hook";
import useDidMountEffect from "../../hooks/useDidMountEffect";

export interface MultiFiles {
  id: number;
  file: File;
  fileImage: string;
}

interface UploadMultiProps {
  label?: string;
  subLabel?: string;
  callback?: (data: MultiFiles[]) => void;
  disabled?: boolean;
  id: string;
  buttonLocation?: "left" | "right";
}

const inputStyles = css`
  display: none;

  &:disabled ~ label {
    background-color: ${Colors.gray_100};
    cursor: not-allowed;
  }
`;

const labelStyles = css`
  display: block;
  width: 55px;
  height: 55px;
  border: 1px solid ${Colors.gray_200};
  border-radius: 8px;
  cursor: pointer;
  display: flex;

  & > img {
    margin: auto;
  }
`;

const fileImageStyles = css`
  width: 55px;
  height: 55px;
  margin-right: 5px;
  margin-bottom: 5px;
  position: relative;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border: 1px solid ${Colors.gray_100};
  }

  & > button {
    position: absolute;
    top: 4px;
    right: 4px;
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

const UploadMulti = (props: UploadMultiProps) => {
  const {
    label,
    subLabel,
    callback,
    disabled,
    id,
    buttonLocation = "right",
  } = props;
  const { updateMultiFileHandler, fileRemoveMulti, fileDatas } = useUpload();

  useDidMountEffect(() => {
    if (callback) {
      if (fileDatas) {
        callback(fileDatas);
      } else {
        callback([]);
      }
    }
  }, [fileDatas, callback]);

  return (
    <div>
      {label && (
        <div>
          <Caption color={Colors.blue_600} strong>
            {label}
          </Caption>
        </div>
      )}
      {subLabel && (
        <div
          css={css`
            margin-bottom: 2px;
          `}
        >
          <p
            css={css`
              font-size: 12px;
              color: ${Colors.gray_400};
              margin: 4px 0 8px 0;
            `}
          >
            {subLabel}
          </p>
        </div>
      )}

      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
        `}
      >
        <input
          type="file"
          onChange={updateMultiFileHandler}
          disabled={!!disabled}
          id={id}
          css={[inputStyles]}
          multiple
        />
        {buttonLocation === "left" && (
          <label
            htmlFor={id}
            css={[
              labelStyles,
              css`
                margin-right: 5px;
                margin-bottom: 5px;
              `,
            ]}
          >
            <img src={images.camera} alt="images_camera" css={css`
                width: 20px;
                height: 20px;
            `}/>
          </label>
        )}

        {fileDatas.map((file) => (
          <div css={[fileImageStyles]} key={file.id}>
            <img src={file.fileImage} alt="file_images" />
            {!disabled && (
              <button onClick={() => fileRemoveMulti(file.id)}>
                <img src={images.cancel} alt="remove_btn" css={css`
                    width: 20px;
                    height: 20px;
                `} />
              </button>
            )}
          </div>
        ))}

        {buttonLocation === "right" && (
          <label htmlFor={id} css={[labelStyles]}>
            <img src={images.camera} alt="images_camera" css={css`
                width: 20px;
                height: 20px;
            `} />
          </label>
        )}
      </div>
    </div>
  );
};

export default UploadMulti;
