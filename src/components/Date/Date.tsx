import { css } from "@emotion/react";
import { Caption } from "../Typography";
import * as Colors from "../../constants/color";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import images from "../../utils/images";

const dateStyles = css`
  position: relative;
  padding: 0 15px;
  height: 48px;
  width: calc(100% - 30px);
  cursor: pointer;
  border: 1px solid ${Colors.blue_300};
  font-size: 16px;
  background: url(${images.calendar}) no-repeat center right 14px;
  background-size: 20px;

  &:disabled {
    background-color: ${Colors.gray_100};
    color: ${Colors.gray_400};
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    border: 1px solid ${Colors.primary};
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

interface DateProps {
  value?: string | Date;
  disabled?: boolean;
  placeholder?: string;
  size?: "small" | "medium" | "big" | "full" | "half";
  label?: string;
  onChange: (date?: Date) => void;
}

const DateComponent = (props: DateProps) => {
  const {
    value,
    disabled,
    placeholder,
    size = "medium",
    label,
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
      <div
        css={css`
          position: relative;
          height: 48px;
        `}
      >
        <DatePicker
          css={[dateStyles]}
          onChange={(date) => onChange(date as Date)}
          selected={value as Date}
          dateFormat="yyyy-MM-dd"
          placeholderText={placeholder}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default DateComponent;
