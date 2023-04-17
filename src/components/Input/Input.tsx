import { css } from "@emotion/react";
import { Caption } from "../Typography";
import * as Colors from "../../constants/color";

const defaultStyles = css`
  height: 100%;
  width: calc(100% - 30px);
  padding: 0 14px;
  font-size: 16px;
  border: 1px solid ${Colors.blue_300};
  box-sizing: content-box;

  &:focus {
    border: 1px solid ${Colors.primary};
    outline: none;
  }

  &::placeholder {
    color: ${Colors.gray_250};
  }

  &:disabled {
    background-color: ${Colors.gray_100};
    color: ${Colors.gray_400};
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

interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  size?: "small" | "medium" | "big" | "full" | "half";
  unit?: string;
  error?: string;
  success?: string;
  name?: string;
}

/** `Input` Component */

const Input = (props: InputProps) => {
  const {
    /** input의 value값을 의미합니다. */
    value,
    onChange,
    disabled,
    label,
    placeholder,
    size = "medium",
    unit,
    error,
    success,
    name,
  } = props;

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
          value={value}
          onChange={onChange}
          disabled={!!disabled}
          placeholder={placeholder}
          css={[defaultStyles]}
          name={name}
        />
        {unit && (
          <span
            css={css`
              display: flex;
              font-size: 16px;
              position: absolute;
              right: 14px;
              top: 0;
              height: 100%;
              align-items: center;
              justify-content: center;
            `}
          >
            {unit}
          </span>
        )}
      </div>
      {error && (
        <div
          css={css`
            margin-top: 3px;
          `}
        >
          <Caption color={Colors.error}>{error}</Caption>
        </div>
      )}
      {success && (
        <div
          css={css`
            margin-top: 3px;
          `}
        >
          <Caption color={Colors.success}>{success}</Caption>
        </div>
      )}
    </div>
  );
};

export default Input;
