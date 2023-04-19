import { useState } from "react";
import Checkbox from "./Checkbox";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ComponentMeta } from "@storybook/react";

export default {
  title: "components/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Default = () => {
  return (
    <div>
      <p>체크가 안되었을 때</p>
      <Checkbox labelText="checkbox" value={false} onChange={() => null} />

      <p>체크가 되었을 때</p>
      <Checkbox labelText="checkbox" value={true} onChange={() => null} />
    </div>
  );
};

const MultiWrap = styled.div`
  & > label {
    margin-right: 15px;
  }
`;

export const MultiCheckbox = () => {
  const [checkList, setCheckList] = useState(
    Array.from({ length: 5 }, () => false)
  );

  return (
    <MultiWrap>
      <p>체크박스 여러개</p>
      {checkList.map((item, i) => (
        <div
          key={i}
          css={css`
            margin-bottom: 10px;
          `}
        >
          <Checkbox
            labelText={`checkbox${i + 1}`}
            value={item}
            onChange={() =>
              setCheckList(
                checkList.map((check, index) => (index === i ? !check : check))
              )
            }
          />
        </div>
      ))}
      <p>
        checked:
        {checkList
          .map((item, i) => {
            return {
              id: i,
              checked: item,
            };
          })
          .filter((item) => item.checked)
          .map((item) => `checkbox${item.id + 1}`)
          .join(",") || "체크 안됨"}
      </p>
    </MultiWrap>
  );
};

export const disabledCheckbox = () => {
  return (
    <div>
      <p>체크가 안되어 있을 때</p>
      <Checkbox labelText="disabled" value={false} disabled />
      <p>체크가 되어있을 때</p>
      <Checkbox labelText="disabled" value={true} disabled />
    </div>
  );
};
