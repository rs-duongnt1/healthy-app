import styled from "@emotion/styled";

export const MealItemRoot = styled.div((props: { selected?: boolean }) => ({
  position: "relative",
  width: 116,
  height: 134,
  cursor: "pointer",
  ...(props.selected && {
    "> svg > path": {
      fill: "#b98f00",
    },
  }),
}));
export const MealItemBoxIcon = styled.div({
  position: "absolute",
  top: 27,
  left: 30,
});
export const MealItemBoxText = styled.div({
  position: "absolute",
  bottom: 27,
  left: 0,
  width: "100%",
  textAlign: "center",
  fontSize: 20,
  lineHeight: "24px",
  color: "var(--white)",
});
