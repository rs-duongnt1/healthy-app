import styled from "@emotion/styled";

export const HeaderRoot = styled.div({
  height: 64,
  backgroundColor: "var(--secondary)",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

export const HeaderWrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

export const HeaderLogo = styled.div({
  cursor: "pointer",
});

export const HeaderMenu = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

export const HeaderNav = styled.div({
  marginRight: "16px",
  display: "flex",
});

export const HeaderNavItem = styled.div({
  display: "flex",
  alignItems: "center",
  width: "160px",
  cursor: "pointer",
});

export const HeaderNavItemText = styled.span((props: { active: boolean }) => ({
  color: "var(--white)",
  fontSize: "16px",
  lineHeight: "23px",
  marginLeft: "8px",
  ...(props.active && { color: "var(--primary)" }),
  ":hover": {
    color: "var(--primary)",
  },
}));
