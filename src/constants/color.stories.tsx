import React from "react";
import { Meta } from "@storybook/react";
import * as Colors from "./index";
import styled from "@emotion/styled";

export default {
  title: "color/pallate",
} as Meta;

const Container = styled.div`
  display: flex;
  & > div {
    margin-right: 100px;
    &:last-child {
      margin-right: 0;
    }
  }

  h3,
  p {
    margin: 0;
  }
`;

const Content = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

const ColorWrap = styled.div<{ color: string }>`
  width: 48px;
  height: 48px;
  background-color: ${(props) => props.color};
`;

const InfoWrap = styled.div`
  margin-left: 10px;

  & > h3,
  p {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const Color = () => {
  return (
    <Container>
      <div>
        <Content>
          <ColorWrap color={Colors.primary} />
          <InfoWrap>
            <h3>Primary</h3>
            <p>{Colors.primary}</p>
          </InfoWrap>
        </Content>
        <Content>
          <ColorWrap color={Colors.secondary} />
          <InfoWrap>
            <h3>Secondary</h3>
            <p>{Colors.secondary}</p>
          </InfoWrap>
        </Content>
        <Content>
          <ColorWrap color={Colors.error} />
          <InfoWrap>
            <h3>Error</h3>
            <p>{Colors.error}</p>
          </InfoWrap>
        </Content>
        <Content>
          <ColorWrap color={Colors.success} />
          <InfoWrap>
            <h3>Success</h3>
            <p>{Colors.success}</p>
          </InfoWrap>
        </Content>
        <Content>
          <ColorWrap color={Colors.link} />
          <InfoWrap>
            <h3>Link</h3>
            <p>{Colors.link}</p>
          </InfoWrap>
        </Content>
      </div>
      <div>
        <Content>
          <ColorWrap
            color={Colors.white}
            style={{ border: "1px solid #e1e1e1" }}
          />
          <InfoWrap>
            <h3>White</h3>
            <p>{Colors.white}</p>
          </InfoWrap>
        </Content>
        <Content>
          <ColorWrap color={Colors.gray_100} />
          <InfoWrap>
            <h3>Gray_100</h3>
            <p>{Colors.gray_100}</p>
          </InfoWrap>
        </Content>
        <Content>
          <ColorWrap color={Colors.gray_150} />
          <InfoWrap>
            <h3>Gray_150</h3>
            <p>{Colors.gray_150}</p>
          </InfoWrap>
        </Content>
        <Content>
          <ColorWrap color={Colors.gray_170} />
          <InfoWrap>
            <h3>Gray_170</h3>
            <p>{Colors.gray_170}</p>
          </InfoWrap>
        </Content>
        <Content>
          <ColorWrap color={Colors.gray_200} />
          <InfoWrap>
            <h3>Gray_200</h3>
            <p>{Colors.gray_200}</p>
          </InfoWrap>
        </Content>
      </div>
      <div>
        <Content>
          <ColorWrap color={Colors.gray_250} />
          <InfoWrap>
            <h3>Gray_250</h3>
            <p>{Colors.gray_250}</p>
          </InfoWrap>
        </Content>
        <Content>
          <ColorWrap color={Colors.gray_300} />
          <InfoWrap>
            <h3>Gray_300</h3>
            <p>{Colors.gray_300}</p>
          </InfoWrap>
        </Content>
        <Content>
          <ColorWrap color={Colors.gray_400} />
          <InfoWrap>
            <h3>Gray_400</h3>
            <p>{Colors.gray_400}</p>
          </InfoWrap>
        </Content>
        <Content>
          <ColorWrap color={Colors.gray_500} />
          <InfoWrap>
            <h3>Gray_500</h3>
            <p>{Colors.gray_500}</p>
          </InfoWrap>
        </Content>
        <Content>
          <ColorWrap color={Colors.black} />
          <InfoWrap>
            <h3>Black</h3>
            <p>{Colors.black}</p>
          </InfoWrap>
        </Content>
      </div>
      <div>
        <Content>
          <ColorWrap color={Colors.blue_100} />
          <InfoWrap>
            <h3>Blue_100</h3>
            <p>{Colors.blue_100}</p>
          </InfoWrap>
        </Content>
        <Content>
          <ColorWrap color={Colors.blue_150} />
          <InfoWrap>
            <h3>Blue_150</h3>
            <p>{Colors.blue_150}</p>
          </InfoWrap>
        </Content>
        <Content>
          <ColorWrap color={Colors.blue_200} />
          <InfoWrap>
            <h3>Blue_200</h3>
            <p>{Colors.blue_200}</p>
          </InfoWrap>
        </Content>
        <Content>
          <ColorWrap color={Colors.blue_300} />
          <InfoWrap>
            <h3>Blue_300</h3>
            <p>{Colors.blue_300}</p>
          </InfoWrap>
        </Content>
        <Content>
          <ColorWrap color={Colors.blue_400} />
          <InfoWrap>
            <h3>Blue_400</h3>
            <p>{Colors.blue_400}</p>
          </InfoWrap>
        </Content>
        <Content>
          <ColorWrap color={Colors.blue_450} />
          <InfoWrap>
            <h3>Blue_450</h3>
            <p>{Colors.blue_450}</p>
          </InfoWrap>
        </Content>
      </div>
      <div>
        <Content>
          <ColorWrap color={Colors.blue_500} />
          <InfoWrap>
            <h3>Blue_500</h3>
            <p>{Colors.blue_500}</p>
          </InfoWrap>
        </Content>
        <Content>
          <ColorWrap color={Colors.blue_600} />
          <InfoWrap>
            <h3>Blue_600</h3>
            <p>{Colors.blue_600}</p>
          </InfoWrap>
        </Content>
        <Content>
          <ColorWrap color={Colors.blue_700} />
          <InfoWrap>
            <h3>Blue_700</h3>
            <p>{Colors.blue_700}</p>
          </InfoWrap>
        </Content>
        <Content>
          <ColorWrap color={Colors.blue_800} />
          <InfoWrap>
            <h3>Blue_800</h3>
            <p>{Colors.blue_800}</p>
          </InfoWrap>
        </Content>
        <Content>
          <ColorWrap color={Colors.blue_900} />
          <InfoWrap>
            <h3>Blue_900</h3>
            <p>{Colors.blue_900}</p>
          </InfoWrap>
        </Content>
        <Content>
          <ColorWrap color={Colors.blue_1000} />
          <InfoWrap>
            <h3>Blue_1000</h3>
            <p>{Colors.blue_1000}</p>
          </InfoWrap>
        </Content>
      </div>
    </Container>
  );
};
