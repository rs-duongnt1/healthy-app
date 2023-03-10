import styled from "@emotion/styled";

export const DropdownRoot = styled.div({
  position: "relative",
});

export const DropdownContainer = styled.div({
  position: "absolute",
  backgroundColor: "#777777",
  zIndex: 1000,
  right: 0,
  top: 83,
});

export const DropdownList = styled.div({
  width: 280,
});

export const DropdownItem = styled.div({
  height: 72,
  padding: "23px 32px",
  fontWeight: 300,
  fontSize: 18,
  lineHeight: "26px",
  color: "var(--white)",
  borderBottom: "1px solid #8B8B8B",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  transition: "color .15s",
  ":hover": {
    color: "var(--primary)",
  },
});

export const DropdownButtonClose = styled.div({
  position: "absolute",
  right: 0,
  top: "-32px",
  width: 32,
  height: 32,
  backgroundColor: "var(--secondary)",
  cursor: "pointer",
});
