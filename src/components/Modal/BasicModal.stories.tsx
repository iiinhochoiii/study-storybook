import { useState } from "react";
import BasicModal from "./BasicModal";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { css } from "@emotion/react";
import * as Colors from "../../constants/color";
import Button from "../Button/Button";
import { Header } from "../Typography";

export default {
  title: "Components/Modal/Basic",
  components: BasicModal,
  args: {
    title: "알림",
    confirm: () => null,
    children: (
      <p
        css={css`
          margin: 0;
          color: ${Colors.gray_500};
          font-size: 14px;
        `}
      >
        이미 가입된 계정 정보 입니다. 로그인 하시겠습니까?
      </p>
    ),
  },
} as ComponentMeta<typeof BasicModal>;

export const Basic: ComponentStory<typeof BasicModal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Header strong size="small">
        # Basic Modal
      </Header>
      <p
        css={css`
          font-size: 12px;
          line-height: 1.5;
        `}
      >
        아래의 'Modal Open' 버튼을 클릭하여, Modal Component를 확인하세요.
        <br />
        해당 Modal은 Footer영역에 Confirm Button이 있는 Basic Component입니다.
      </p>
      <div>
        <Button theme="tertiary" size="small" onClick={() => setIsOpen(true)}>
          Modal Open
        </Button>
        <BasicModal
          {...args}
          open={isOpen}
          onClose={() => setIsOpen(!isOpen)}
        />
      </div>
    </div>
  );
};

Basic.args = {
  confirmText: "확인",
};

export const MultiFooterButtonModal: ComponentStory<typeof BasicModal> = (
  args
) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Header strong size="small">
        # Basic Modal With Cancel Button at Footer
      </Header>
      <p
        css={css`
          font-size: 12px;
          line-height: 1.5;
        `}
      >
        아래의 'Modal Open' 버튼을 클릭하여, Modal Component를 확인하세요.
        <br />
        해당 Modal은 Footer영역에 기본 <b>'Confirm Button'</b>과,{" "}
        <b>'Cancel Button'</b>이 포함된 Modal Component 입니다.
        <br />
        *Cancel Button은 props로 onClose() 로 동작하며, <b>cancelText</b>를
        props로 전달 해야 합니다.
      </p>
      <div>
        <Button theme="tertiary" size="small" onClick={() => setIsOpen(true)}>
          Modal Open
        </Button>
        <BasicModal
          {...args}
          open={isOpen}
          onClose={() => setIsOpen(!isOpen)}
        />
      </div>
    </div>
  );
};

MultiFooterButtonModal.args = {
  confirmText: "확인",
  cancelText: "취소",
};
