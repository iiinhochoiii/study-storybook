import { css } from "@emotion/react";
import Modal from "../ModalPortal";
import * as Colors from "../../constants/color";
import images from "../../utils/images";
import Button from "../Button/Button";

const modalBodyStyles = css`
  background-color: ${Colors.white};
  border: 1px solid ${Colors.gray_250};
  margin: auto;
  width: 320px;
`;

const headerStyles = css`
  padding: 20px;
  display: flex;
  justify-content: space-between;

  & > h3 {
    margin: auto 0;
    font-size: 16px;
  }

  & > button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }
`;

const footerStyles = css`
  padding: 20px;
  display: flex;
  gap: 10px;
`;

interface BasicModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  confirm: () => void;
  confirmText?: string;
  cancelText?: string;
}

const BasicModal = (props: BasicModalProps) => {
  const {
    open,
    onClose,
    children,
    title,
    confirmText = "확인",
    confirm,
    cancelText,
  } = props;

  if (!open) {
    return null;
  }

  return (
    <div>
      <Modal>
        <div css={[modalBodyStyles]}>
          <div css={[headerStyles]}>
            <h3>{title}</h3>
            <button onClick={onClose}>
              <img src={images.cancel} alt="images_exit" />
            </button>
          </div>
          <div
            css={css`
              padding: 20px;
            `}
          >
            {children}
          </div>
          <div css={[footerStyles]}>
            {cancelText && (
              <Button theme="tertiary" size="half" onClick={onClose}>
                {cancelText}
              </Button>
            )}
            <Button size={cancelText ? "half" : "full"} onClick={confirm}>
              {confirmText}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BasicModal;
