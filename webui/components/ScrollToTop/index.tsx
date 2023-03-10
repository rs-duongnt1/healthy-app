/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as ArrowTop } from "@/assets/svg/arrow-top.svg";
import styled from "@emotion/styled";

const ScrollToTopRoot = styled.div({
  width: 48,
  height: 48,
  border: "1px solid #777777",
  borderRadius: "50%",
  position: "fixed",
  zIndex: 1001,
  bottom: 144,
  right: 96,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <ScrollToTopRoot onClick={scrollToTop}>
      <ArrowTop />
    </ScrollToTopRoot>
  );
}
