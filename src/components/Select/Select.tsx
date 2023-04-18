import { css } from "@emotion/react";
import { Caption } from "../Typography";
import * as Colors from "../../constants/color";
import images from '../../utils/images';

const selectStyles = css`
  padding: 0 15px;
  width: 100%;
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
  name?: string;
}

const Select = (props: SelectProps) => {
  const {
    label,
    defaultValue,
    options,
    disabled,
    size = "medium",
    value,
    name,
    onChange,
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
      <select
        css={[selectStyles]}
        onChange={onChange}
        value={value}
        disabled={disabled}
        name={name}
      >
        {defaultValue && <option value={""}>{defaultValue}</option>}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
