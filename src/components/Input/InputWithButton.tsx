import { css } from "@emotion/react";
import { Caption } from "../Typography";
import * as Colors from "../../constants/color";

const defaultStyles = css`
  height: 100%;
  width: calc(100% - 120px);
  padding: 0 104px 0 14px;
  font-size: 16px;
  border: 1px solid ${Colors.blue_300};
  box-sizing: content-box;

  &:focus {
    border: 1px solid ${Colors.primary};
    outline: none;
  }

  &:focus ~ button {
    border-right: 1px solid ${Colors.primary};
  }

  &::placeholder {
    color: ${Colors.gray_250};
  }

  &:disabled {
    background-color: ${Colors.gray_100};
    color: ${Colors.gray_400};
  }
`;

const buttonStyles = css`
  position: absolute;
  font-size: 16px;
  color: ${Colors.blue_700};
  background: none;
  border: none;
  width: 90px;
  height: calc(100%);
  right: 0;
  top: 1px;
  cursor: pointer;
  border-left: 1px solid ${Colors.blue_300};
  border-right: 1px solid ${Colors.blue_300};
  background-color: ${Colors.white};

  &:disabled {
    cursor: not-allowed;
    background-color: ${Colors.gray_100};
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

interface InputWithButtonProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  disabled_button?: boolean;
  label?: string;
  placeholder?: string;
  size?: "small" | "medium" | "big" | "full" | "half";
  error?: string;
  success?: string;
  buttonText: string;
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

/** `InputWithButton` Component */

const InputWithButton = (props: InputWithButtonProps) => {
  const {
    /** input의 value값을 의미합니다. */
    value,
    onChange,
    disabled,
    disabled_button,
    label,
    placeholder,
    size = "medium",
    error,
    success,
    buttonText,
    onClick,
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
        />
        <button
          css={buttonStyles}
          disabled={!!disabled_button}
          onClick={onClick}
        >
          {buttonText}
        </button>
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

export default InputWithButton;
