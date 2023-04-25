import { css } from "@emotion/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Table from "./Table";
import Pagination from "../Pagination/Pagination";
import { Header } from "../Typography";
import * as Colors from "../../constants/color";

export default {
  title: "Components/Table",
  components: Table,
} as ComponentMeta<typeof Table>;

const columns = [
  { key: "id", title: "ID" },
  {
    key: "name",
    title: "Name",
  },
  {
    key: "age",
    title: "Age",
  },
  {
    key: "phone",
    title: "Phone",
  },
  {
    key: "address",
    title: "Address",
  },
];

const datas = [
  {
    id: 1,
    name: "choi",
    age: 29,
    phone: "010-1111-2222",
    address: "Seoul",
  },
  {
    id: 2,
    name: "kim",
    age: 35,
    phone: "010-2222-3333",
    address: "Seoul",
  },
  {
    id: 3,
    name: "park",
    age: 26,
    phone: "010-3333-4444",
    address: "Seoul",
  },
  {
    id: 4,
    name: "lee",
    age: 42,
    phone: "010-5555-6666",
    address: "Seoul",
  },
  {
    id: 5,
    name: "john",
    age: 23,
    phone: "010-7777-8888",
    address: "Seoul",
  },
];

export const Default: ComponentStory<typeof Table> = (args) => {
  return (
    <div>
      <Table {...args} />
      <Pagination curPage={1} movePage={() => null} pageArr={[1, 2, 3, 4, 5]} />
    </div>
  );
};

Default.args = {
  columns: columns,
  datas: datas,
};

export const buttonWithColumnTable: ComponentStory<typeof Table> = (args) => {
  return (
    <div>
      <Header strong size="small">
        # Row에 Element 추가
      </Header>
      <div
        css={css`
          border: 1px solid ${Colors.gray_200};
          border-radius: 8px;
          padding: 0 20px;
          margin-bottom: 20px;
        `}
      >
        <p
          css={css`
            font-size: 12px;
          `}
        >
          props의 columns 값에, render이라는 property를 추가해 Table의 각 Row에
          element를 추가 할 수 있습니다.
        </p>
        <p
          css={css`
            font-size: 12px;
          `}
        >
          ex &#41; columns: &#91;
          <br />
          &#123;
          <br />
          &#160;&#160; key: 'action',
          <br />
          &#160;&#160; title: 'Action',
          <br />
          &#160;&#160; render: &#40; &#41; &#61;&#62;
          &#60;button&#62;delete&#60;&#47;button&#62;
          <br />
          &#125;,
          <br />
          &#123;
          <br />
          ...
          <br />
          &#125;,
          <br />
          &#93;;
        </p>
      </div>
      <Table {...args} />
      <Pagination curPage={1} movePage={() => null} pageArr={[1, 2, 3, 4, 5]} />
    </div>
  );
};

buttonWithColumnTable.args = {
  columns: [
    ...columns,
    {
      key: "action",
      title: "Action",
      render: (data) => (
        <button onClick={() => console.log(data)}>Delete</button>
      ),
    },
  ],
  datas: datas,
};
