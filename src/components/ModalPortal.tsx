import React, { useEffect } from "react";
import ReactDom from "react-dom";

import styled from "@emotion/styled";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 30000;
  display: flex;
  background-color: rgb(144, 144, 144, 0.8);
`;

interface Props {
  children: React.ReactNode
}
const ModalPortal = (props: Props) => {
  const {children} = props;
  const el = document.getElementById("react-portal") as Element | DocumentFragment;

  return ReactDom.createPortal(children, el);
};

const Modal = (props: Props) => {
  const {children} = props;

  useEffect(()=> {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    }
  }, []);

  return (
    <ModalPortal>
      <ModalContainer>{children}</ModalContainer>
    </ModalPortal>
  );
};
export default Modal;
