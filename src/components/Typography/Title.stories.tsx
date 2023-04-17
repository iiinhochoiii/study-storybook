import Title from "./Title";
import * as Colors from "../../constants/color";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Typography/Title",
  components: Title,
} as ComponentMeta<typeof Title>;

export const Default: ComponentStory<typeof Title> = (args) => {
  return <Title {...args} />;
};

Default.args = {
  children: "this is default title",
  color: Colors.black,
  size: "small",
  strong: false,
};

export const strongTitle = () => {
  return <Title strong>this is Strong(bold) Title</Title>;
};

const Container = styled.div`
  display: flex;

  & > div {
    margin-left: 50px;

    &:first-of-type {
      margin-left: 0;
    }
  }
`;

export const sizeTitle = () => {
  return (
    <div>
      <div
        css={css`
          display: flex;
          gap: 20px;
        `}
      >
        <Title>this is small title</Title>
        <Title strong>this is small(bold) title</Title>
      </div>
      <div
        css={css`
          display: flex;
          gap: 20px;
          margin-top: 20px;
        `}
      >
        <Title size="big">this is big title</Title>
        <Title size="big" strong>
          this is big(bold) title
        </Title>
      </div>
    </div>
  );
};

export const colorTitle = () => {
  return (
    <Container>
      <div>
        <p>default </p>
        <Title>this is default Title</Title>

        <p>default (bold)</p>
        <Title strong>this is default Title</Title>
      </div>
      <div>
        <p>error - {Colors.error}</p>
        <Title color={Colors.error}>this is error Title</Title>

        <p>error - {Colors.error} (bold)</p>
        <Title color={Colors.error} strong>
          this is error Title
        </Title>
      </div>
      <div>
        <p>success - {Colors.success}</p>
        <Title color={Colors.success}>this is success Title</Title>

        <p>success - {Colors.success} (bold)</p>
        <Title color={Colors.success} strong>
          this is success Title
        </Title>
      </div>
      <div>
        <p>link - {Colors.link}</p>
        <Title color={Colors.link}>this is link Title</Title>

        <p>link - {Colors.link} (bold)</p>
        <Title color={Colors.link} strong>
          this is link Title
        </Title>
      </div>
    </Container>
  );
};
