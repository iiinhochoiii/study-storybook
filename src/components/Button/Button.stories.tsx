import React from "react";
import Button from "./Button";
import { css } from "@emotion/react";
import { ComponentMeta } from "@storybook/react";

export default {
  title: "components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const button = () => {
  return <Button>Default Button</Button>;
};

button.story = {
  name: "Default",
};

export const primaryButton = () => {
  return <Button theme="primary">PRIMARY</Button>;
};

export const secondaryButton = () => {
  return <Button theme="secondary">SECONDARY</Button>;
};

export const tertiaryButton = () => {
  return <Button theme="tertiary">TERTIARY</Button>;
};

export const sizeButton = () => {
  return (
    <div>
      <div>
        <p>small</p>
        <Button size="small">Small Button</Button>
      </div>
      <div>
        <p>medium</p>
        <Button size="medium">Medium Button</Button>
      </div>
      <div>
        <p>big</p>
        <Button size="big">Big Button</Button>
      </div>
    </div>
  );
};

const style = css`
  & > div {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const disabledButton = () => {
  return (
    <div css={[style]}>
      <div>
        <Button disabled>Primary</Button>
      </div>
      <div>
        <Button disabled theme="secondary">
          Secondary
        </Button>
      </div>
      <div>
        <Button disabled theme="tertiary">
          Tertiary
        </Button>
      </div>
    </div>
  );
};
