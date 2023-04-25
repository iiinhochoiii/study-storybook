import { css } from "@emotion/react";
import * as Colors from "../../constants/color";

const tableStyles = css`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

const headStyles = css`
  font-size: 12px;
  font-weight: bold;
  color: ${Colors.blue_700};
  background-color: ${Colors.blue_100};
  border-top: 1px solid ${Colors.blue_300};
  border-bottom: 1px solid ${Colors.blue_300};
  height: 30px;
`;

const bodyStyles = css`
  font-size: 14px;
  padding: 13px 12px;
  border-bottom: 1px solid ${Colors.blue_200};
`;

const alignStyles = {
  left: css`
    text-align: left;
    padding-left: 12px;
  `,
  center: css`
    text-align: center;
  `,
  right: css`
    text-align: right;
    padding-right: 12px;
  `,
};

interface Data {
  [fields: string]: string | number;
}

interface Column {
  title: string;
  key: string;
  algin?: "left" | "center" | "right";
  render?: (data: Data) => React.ReactNode;
  className?: string;
}
interface TableProps {
  columns: Column[];
  datas: Data[] | any;
  rowCallback?: (data: any) => void;
}

const Table = (props: TableProps) => {
  const { columns, datas, rowCallback } = props;

  return (
    <div>
      <table css={[tableStyles]}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                css={[headStyles, alignStyles[col.algin || "left"]]}
                className={col.className}
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {datas.length > 0 ? (
            datas.map((data: Data, i: number) => (
              <tr
                key={i}
                css={css`
                  cursor: pointer;
                  &:hover {
                    background-color: ${Colors.blue_100};
                  }
                `}
                onClick={() => {
                  if (rowCallback) {
                    rowCallback(data);
                  }
                }}
              >
                {columns.map((col) => {
                  const { render } = col;

                  return (
                    <td
                      key={col.key}
                      css={[bodyStyles, alignStyles[col.algin || "left"]]}
                    >
                      {(render && render(data)) || data[col.key]}
                    </td>
                  );
                })}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length}>
                <div
                  css={css`
                    padding: 30px 0;
                    font-size: 14px;
                    color: ${Colors.gray_400};
                    border-bottom: 1px solid ${Colors.blue_300};
                    text-align: center;
                  `}
                >
                  데이터가 없습니다.
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
