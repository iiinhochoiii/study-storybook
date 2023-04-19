import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import * as Colors from "../../constants/color";

const Container = styled.label`
  display: inline-block;
  position: relative;

  & > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    width: 14px;
    height: 14px;
    position: absolute;
    background: none;
    border: 2px solid ${Colors.gray_200};
    border-radius: 4px;

    &::after {
      content: "";
      position: absolute;
      display: none;
      left: 5px;
      top: 1px;
      width: 3px;
      height: 8px;
      border: solid ${Colors.primary};
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }

  input:checked ~ .checkmark {
    background-color: ${Colors.white};
    border: 2px solid ${Colors.primary};

    &::after {
      display: block;
    }
  }

  input:disabled ~ .checkmark {
    opacity: 0.5;
  }

  input:disabled ~ p {
    color: gray;
  }

  & > p {
    font-size: 16px;
    margin: 0 0 0 25px;
  }
`;

interface Props {
  /** 체크박스의 체크 여부 값 */
  value: boolean;
  /** 클릭했을 때 호출할 함수 */
  onChange?: () => void;
  /** 체크박스의 텍스트 label */
  labelText: string;
  disabled?: boolean;
}

/** `Checkbox` 컴포넌트  */

const Checkbox = (props: Props) => {
  const { value, onChange, labelText, disabled } = props;

  return (
    <Container
      css={css`
        cursor: ${disabled ? "not-allowed" : "pointer"};
      `}
    >
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="checkmark" />
      <p>{labelText}</p>
    </Container>
  );
};

export default Checkbox;
