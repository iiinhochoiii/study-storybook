import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as Colors from "../../constants/color";
import { Link } from "react-router-dom";

const boxStyles = css`
  list-style: none;
  padding-left: 0px;
`;

const Li = styled.li<{
  isActive?: boolean;
  underline?: boolean;
  activeColor?: "primary" | "black";
}>`
  line-height: 1.43;
  text-align: center;
  color: ${(props) =>
    props.isActive
      ? props.activeColor === "primary"
        ? Colors.primary
        : Colors.black
      : Colors.gray_400} !important;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  border-bottom: ${(props) =>
    props.isActive && props.underline && `2px solid ${Colors.primary}`};
  padding-bottom: 9px;
  cursor: pointer;

  & > a {
    text-decoration: none;
    color: ${(props) =>
      props.isActive
        ? props.activeColor === "primary"
          ? Colors.primary
          : Colors.black
        : Colors.gray_400} !important;
  }
`;

const types = {
  horizontal: css`
    display: inline-flex;

    & > li {
      margin-right: 20px;
    }
  `,
  vertical: css`
    display: inline-block;
    padding: 0 20px 0 0;

    & > li {
      margin-bottom: 10px;
    }
  `,
};

const sizes = {
  medium: css`
    font-size: 14px;
  `,
  big: css`
    font-size: 16px;
  `,
};
interface Datas {
  id: number;
  title: string;
  as?: string;
  callback?: () => void;
  isActive?: boolean;
}

interface TabsProps {
  datas: Datas[];
  type?: "horizontal" | "vertical";
  size?: "medium" | "big";
  activeText: string;
  underline?: boolean;
  activeColor?: "primary" | "black";
}

const Tabs = (props: TabsProps) => {
  const {
    datas,
    type = "horizontal",
    size = "medium",
    activeText,
    underline = true,
    activeColor = "primary",
  } = props;

  return (
    <ul css={[boxStyles, types[type]]}>
      {datas.map((data) => (
        <Li
          css={[sizes[size]]}
          key={data.id}
          isActive={activeText === data.title}
          underline={underline}
          activeColor={activeColor}
          onClick={() => {
            if (data.callback) {
              data.callback();
            }
          }}
        >
          {data.as ? <Link to={data.as}>{data.title}</Link> : data.title}
        </Li>
      ))}
    </ul>
  );
};

export default Tabs;
