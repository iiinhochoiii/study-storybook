import { css } from "@emotion/react";
import { Caption } from "../Typography";
import * as Colors from "../../constants/color";
import Button from "../Button/Button";
import images from '../../utils/images';

const boxStyles = css`
  display: flex;
  flex-wrap: wrap;
`;

const selectStyles = css`
  padding: 0 15px;
  width: calc(100% - 100px);
  height: 48px;
  border: 1px solid ${Colors.blue_300};
  font-size: 16px;
  background: url(${images.arrow_down}) no-repeat center right 10px;
  background-size: 16px;

  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;

  &:focus {
    outline: none;
    border: 1px solid ${Colors.primary};
    background: url(${images.arrow_up}) no-repeat center right 10px;
    background-size: 16px;
  }

  &:disabled {
    background-color: ${Colors.gray_100};
    color: ${Colors.gray_400};
    cursor: not-allowed;
  }
`;

const buttonStyles = css`
  width: 100px;
  border-left: none;
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

interface SelectProps {
  label?: string;
  defaultValue?: string;
  options: {
    value: string;
    label: string;
  }[];
  disabled?: boolean;
  size?: "small" | "medium" | "big" | "half" | "full";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  buttonText?: string;
  buttonTheme?: "primary" | "secondary" | "tertiary";
  onClick: () => void;
}

const SelectWithButton = (props: SelectProps) => {
  const {
    label,
    defaultValue,
    options,
    disabled,
    size = "medium",
    value,
    onChange,
    buttonText = "저장",
    buttonTheme = "tertiary",
    onClick,
  } = props;

  return (
    <div css={[boxStyles, sizes[size]]}>
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
          width: 100%;
          display: flex;
        `}
      >
        <select
          css={[selectStyles]}
          onChange={onChange}
          value={value}
          disabled={disabled}
        >
          {defaultValue && <option value={""}>{defaultValue}</option>}
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <Button
          theme={buttonTheme}
          onClick={onClick}
          customStyles={buttonStyles}
          disabled={disabled}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default SelectWithButton;
