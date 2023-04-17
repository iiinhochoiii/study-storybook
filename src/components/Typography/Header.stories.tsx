import Header from "./Header";
import * as Colors from "../../constants/color";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Typography/Header",
  components: Header,
} as ComponentMeta<typeof Header>;

export const Default: ComponentStory<typeof Header> = (args) => {
  return <Header {...args} />;
};

Default.args = {
  children: "this is default header",
  color: Colors.black,
  size: "medium",
  strong: false,
};

export const strongHeader = () => {
  return <Header strong>this is Strong(bold) header</Header>;
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

export const sizeHeader = () => {
  return (
    <div>
      <div
        css={css`
          display: flex;
          gap: 20px;
        `}
      >
        <Header>this is small Header</Header>
        <Header strong>this is small(bold) Header</Header>
      </div>
      <div
        css={css`
          display: flex;
          gap: 20px;
          margin-top: 20px;
        `}
      >
        <Header size="medium">this is medium Header</Header>
        <Header size="medium" strong>
          this is medium(bold) Header
        </Header>
      </div>
      <div
        css={css`
          display: flex;
          gap: 20px;
          margin-top: 20px;
        `}
      >
        <Header size="big">this is big Header</Header>
        <Header size="big" strong>
          this is big(bold) Header
        </Header>
      </div>
    </div>
  );
};

export const colorHeader = () => {
  return (
    <Container>
      <div>
        <p>default </p>
        <Header>this is default Header</Header>

        <p>default (bold)</p>
        <Header strong>this is default Header</Header>
      </div>
      <div>
        <p>error - {Colors.error}</p>
        <Header color={Colors.error}>this is error Header</Header>

        <p>error - {Colors.error} (bold)</p>
        <Header color={Colors.error} strong>
          this is error Header
        </Header>
      </div>
      <div>
        <p>success - {Colors.success}</p>
        <Header color={Colors.success}>this is success Header</Header>

        <p>success - {Colors.success} (bold)</p>
        <Header color={Colors.success} strong>
          this is success Header
        </Header>
      </div>
      <div>
        <p>link - {Colors.link}</p>
        <Header color={Colors.link}>this is link Header</Header>

        <p>link - {Colors.link} (bold)</p>
        <Header color={Colors.link} strong>
          this is link Header
        </Header>
      </div>
    </Container>
  );
};
