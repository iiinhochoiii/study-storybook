import Caption from "./Caption";
import * as Colors from "../../constants/color";
import styled from "@emotion/styled";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Typography/Caption",
  components: Caption,
} as ComponentMeta<typeof Caption>;

export const Default: ComponentStory<typeof Caption> = (args) => {
  return <Caption {...args} />;
};

Default.args = {
  children: "this is basic caption",
  color: Colors.black,
  strong: false,
};

export const strongCaption = () => {
  return <Caption strong>this is Strong(bold) caption</Caption>;
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

export const colorCaption = () => {
  return (
    <Container>
      <div>
        <p>default </p>
        <Caption>this is default caption</Caption>

        <p>default (bold)</p>
        <Caption strong>this is default caption</Caption>
      </div>
      <div>
        <p>error - {Colors.error}</p>
        <Caption color={Colors.error}>this is error caption</Caption>

        <p>error - {Colors.error} (bold)</p>
        <Caption color={Colors.error} strong>
          this is error caption
        </Caption>
      </div>
      <div>
        <p>success - {Colors.success}</p>
        <Caption color={Colors.success}>this is success caption</Caption>

        <p>success - {Colors.success} (bold)</p>
        <Caption color={Colors.success} strong>
          this is success caption
        </Caption>
      </div>
      <div>
        <p>link - {Colors.link}</p>
        <Caption color={Colors.link}>this is link caption</Caption>

        <p>link - {Colors.link} (bold)</p>
        <Caption color={Colors.link} strong>
          this is link caption
        </Caption>
      </div>
    </Container>
  );
};
