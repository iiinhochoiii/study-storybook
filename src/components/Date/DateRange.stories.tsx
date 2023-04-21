import { useState } from "react";
import DateRange from "./DateRange";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Header } from "../Typography";
import { css } from "@emotion/react";

export default {
  title: "components/Date/DateRange",
  components: DateRange,
} as ComponentMeta<typeof DateRange>;

export const Default: ComponentStory<typeof DateRange> = (args) => {
  const [startValue, setStartValue] = useState<Date>();
  const [endValue, setEndValue] = useState<Date>();

  const updateDateHandler = (type: "start" | "end", date?: Date) => {
    if (type === "start") {
      setStartValue(date);
    } else if (type === "end") {
      setEndValue(date);
    }
  };

  return (
    <DateRange
      {...args}
      startValue={startValue}
      endValue={endValue}
      onChange={updateDateHandler}
    />
  );
};

Default.args = {
  startPlaceholder: "시작일",
  endPlaceholder: "종료일",
  size: "medium",
  label: "기간 검색",
  disabled: false,
};

export const DisabledDateRange = () => {
  return (
    <div>
      <div>
        <Header strong size="small">
          # Disabled Empty DateRange Value
        </Header>
        <DateRange
          label="disabled date range label"
          startPlaceholder="시작일"
          endPlaceholder="종료일"
          onChange={() => null}
          disabled
        />
      </div>
      <div
        css={css`
          margin-top: 20px;
        `}
      >
        <Header strong size="small">
          # Disabled DateRange Value
        </Header>
        <DateRange
          label="disabled date range label"
          startValue={new Date()}
          endValue={new Date()}
          startPlaceholder="시작일"
          endPlaceholder="종료일"
          onChange={() => null}
          disabled
        />
      </div>
    </div>
  );
};

const marginStyles = css`
  margin-bottom: 20px;
`;

export const SizeDateRange = () => {
  const [date1, setDate1] =
    useState<{
      start?: Date;
      end?: Date;
    }>();
  const [date2, setDate2] =
    useState<{
      start?: Date;
      end?: Date;
    }>();
  const [date3, setDate3] =
    useState<{
      start?: Date;
      end?: Date;
    }>();
  const [date4, setDate4] =
    useState<{
      start?: Date;
      end?: Date;
    }>();

  return (
    <div>
      <div css={[marginStyles]}>
        <Header strong size="small">
          # medium size date range
        </Header>
        <DateRange
          label="medium size date range"
          startPlaceholder="시작일"
          endPlaceholder="종료일"
          startValue={date1?.start}
          endValue={date1?.end}
          onChange={(type, date) => {
            if (type === "start") {
              setDate1({
                ...date1,
                start: date,
              });
            } else if (type === "end") {
              setDate1({
                ...date1,
                end: date,
              });
            }
          }}
        />
      </div>

      <div css={[marginStyles]}>
        <Header strong size="small">
          # big size date range
        </Header>
        <DateRange
          label="big size date range"
          startPlaceholder="시작일"
          endPlaceholder="종료일"
          startValue={date2?.start}
          endValue={date2?.end}
          onChange={(type, date) => {
            if (type === "start") {
              setDate2({
                ...date2,
                start: date,
              });
            } else if (type === "end") {
              setDate2({
                ...date2,
                end: date,
              });
            }
          }}
          size="big"
        />
      </div>

      <div css={[marginStyles]}>
        <Header strong size="small">
          # half size date range
        </Header>
        <DateRange
          label="half size date range"
          startPlaceholder="시작일"
          endPlaceholder="종료일"
          startValue={date3?.start}
          endValue={date3?.end}
          onChange={(type, date) => {
            if (type === "start") {
              setDate3({
                ...date3,
                start: date,
              });
            } else if (type === "end") {
              setDate3({
                ...date3,
                end: date,
              });
            }
          }}
          size="half"
        />
      </div>

      <div>
        <Header strong size="small">
          # full size date range
        </Header>
        <DateRange
          label="full size date range"
          startPlaceholder="시작일"
          endPlaceholder="종료일"
          startValue={date4?.start}
          endValue={date4?.end}
          onChange={(type, date) => {
            if (type === "start") {
              setDate4({
                ...date4,
                start: date,
              });
            } else if (type === "end") {
              setDate4({
                ...date4,
                end: date,
              });
            }
          }}
          size="full"
        />
      </div>
    </div>
  );
};
