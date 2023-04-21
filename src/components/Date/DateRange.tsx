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
  box-sizing: content-box;

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

interface DateRangeProps {
  startValue?: string | Date;
  endValue?: string | Date;
  startPlaceholder?: string;
  endPlaceholder?: string;
  size?: "medium" | "big" | "full" | "half";
  label?: string;
  disabled?: boolean;
  onChange: (type: "start" | "end", date?: Date) => void;
}

const DateRange = (props: DateRangeProps) => {
  const {
    startValue,
    endValue,
    startPlaceholder,
    endPlaceholder,
    size = "medium",
    label,
    disabled,
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
          display: flex;
        `}
      >
        <DatePicker
          css={[dateStyles]}
          onChange={(date) => onChange("start", date as Date)}
          selected={startValue as Date}
          dateFormat="yyyy-MM-dd"
          placeholderText={startPlaceholder}
          disabled={disabled}
          maxDate={endValue as Date}
        />
        <p
          css={css`
            font-size: 14px;
            color: ${Colors.blue_600};
            margin: auto 10px;
          `}
        >
          ~
        </p>
        <DatePicker
          css={[dateStyles]}
          onChange={(date) => onChange("end", date as Date)}
          selected={endValue as Date}
          dateFormat="yyyy-MM-dd"
          placeholderText={endPlaceholder}
          disabled={disabled}
          minDate={startValue as Date}
        />
      </div>
    </div>
  );
};

export default DateRange;
