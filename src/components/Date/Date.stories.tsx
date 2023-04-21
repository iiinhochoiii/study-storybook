import { useState } from "react";
import DateComponent from "./Date";
import { css } from "@emotion/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Header } from "../Typography";

export default {
  title: "components/Date/Basic",
  components: Date,
} as ComponentMeta<typeof DateComponent>;

export const Default: ComponentStory<typeof DateComponent> = (args) => {
  const [value, setValue] = useState<Date>();

  return (
    <div>
      <DateComponent
        {...args}
        value={value}
        onChange={(date) => setValue(date)}
      />
    </div>
  );
};

Default.args = {
  label: "날짜 검색",
  placeholder: "날짜를 선택해주세요.",
  size: "medium",
  disabled: false,
};

export const DisabledDate = () => {
  return (
    <div>
      <div>
        <Header strong size="small">
          # Disabled Empty Date Value
        </Header>
        <DateComponent
          label="disabled date label"
          placeholder="날짜를 입력해주세요."
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
          # Disabled Date Value
        </Header>
        <DateComponent
          label="disabled date label"
          placeholder="날짜를 입력해주세요."
          onChange={() => null}
          value={new Date()}
          disabled
        />
      </div>
    </div>
  );
};

const marginStyles = css`
  margin-bottom: 20px;
`;

export const SizeDate = () => {
  const [date1, setDate1] = useState<Date>();
  const [date2, setDate2] = useState<Date>();
  const [date3, setDate3] = useState<Date>();
  const [date4, setDate4] = useState<Date>();
  const [date5, setDate5] = useState<Date>();

  return (
    <div>
      <div css={[marginStyles]}>
        <Header strong size="small">
          # small size date
        </Header>
        <DateComponent
          label="small size"
          placeholder="날짜를 입력해주세요."
          value={date1}
          onChange={(date) => setDate1(date)}
          size="small"
        />
      </div>

      <div css={[marginStyles]}>
        <Header strong size="small">
          # medium size date
        </Header>
        <DateComponent
          label="medium size"
          placeholder="날짜를 입력해주세요."
          value={date2}
          onChange={(date) => setDate2(date)}
        />
      </div>

      <div css={[marginStyles]}>
        <Header strong size="small">
          # big size date
        </Header>
        <DateComponent
          label="big size"
          placeholder="날짜를 입력해주세요."
          value={date3}
          onChange={(date) => setDate3(date)}
          size="big"
        />
      </div>

      <div css={[marginStyles]}>
        <Header strong size="small">
          # half size date
        </Header>
        <DateComponent
          label="half size"
          placeholder="날짜를 입력해주세요."
          value={date4}
          onChange={(date) => setDate4(date)}
          size="half"
        />
      </div>

      <div>
        <Header strong size="small">
          # full size date
        </Header>
        <DateComponent
          label="full size"
          placeholder="날짜를 입력해주세요."
          value={date5}
          onChange={(date) => setDate5(date)}
          size="full"
        />
      </div>
    </div>
  );
};
