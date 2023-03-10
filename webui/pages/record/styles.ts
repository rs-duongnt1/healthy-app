import styled from "@emotion/styled";

export const RecordRoot = styled.div({
  marginTop: 56,
});

export const RecordCategory = styled.div((props: { backgroundImage?: string }) => ({
  height: 240,
  width: 240,
  border: "24px solid #FFCC21",
  ...(props.backgroundImage && {
    backgroundImage: `url(${props.backgroundImage})`,
  }),
  backgroundColor: "#000",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  ".category-title": {
    color: "#FFCC21",
    fontWeight: 400,
    fontSize: 25,
    lineHeight: "30px",
  },
  ".category-btn": {
    outline: "none",
    border: "none",
    backgroundColor: "var(--primary)",
    fontSize: 14,
    lineHeight: "20px",
    color: "var(--white)",
    height: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 160,
  },
}));

export const RecordMyExcercise = styled.div({
  height: 264,
  backgroundColor: "var(--secondary)",
  padding: "16px 24px",
});

export const RecordMyExcerciseTitle = styled.div({
  fontWeight: 400,
  fontSize: 15,
  lineHeight: "18px",
  color: "var(--white)",
  width: 96,
});

export const RecordMyExcerciseDate = styled.div({
  fontWeight: 400,
  fontSize: 22,
  lineHeight: "27px",
  color: "var(--white)",
});

export const RecordMyExcerciseList = styled.div({
  width: "100%",
  height: "184px",
  paddingRight: 32,
  overflow: "hidden auto",
  "::-webkit-scrollbar": {
    width: 6,
  },
  "::-webkit-scrollbar-track": {
    background: "#777777",
    borderRadius: "3px",
  },
  "::-webkit-scrollbar-thumb": {
    background: "#FFCC21",
    borderRadius: "3px",
  },
  "::-webkit-scrollbar-thumb:hover": {
    background: "#FFCC21",
  },
});

export const RecordMyExcerciseListItem = styled.div({
  color: "var(--white)",
  alignItems: "center",
  display: "flex",
  width: "100%",
  borderBottom: "1px solid #777777",
  padding: "2px 0",
});

export const RecordMyExcerciseListItemDot = styled.div({
  fontSize: "5px",
  width: "15px",
  marginTop: "4px",
});

export const RecordMyExcerciseListItemText = styled.div({
  fontWeight: 300,
  fontSize: 15,
  lineHeight: "22px",
});
export const RecordMyExcerciseListItemWeight = styled.div({
  fontWeight: 400,
  fontSize: 15,
  lineHeight: "18px",
  color: "#FFCC21",
});

export const RecordMyExcerciseListItemTime = styled.div({
  fontWeight: 400,
  fontSize: 18,
  lineHeight: "22px",
  color: "#FFCC21",
});

export const MyDiaryTitle = styled.h4({
  color: "var(--secondary)",
  fontSize: 22,
  fontWeight: 400,
  lineHeight: "27px",
});

export const MyDiaryCard = styled.div({
  color: "var(--secondary)",
  width: "25%",
  border: "2px solid #707070",
  padding: "16px",
});

export const MyDiaryCardDate = styled.div({
  fontWeight: 400,
  fontSize: 18,
  lineHeight: "22px",
});

export const MyDiaryCardTitle = styled.div({
  fontWeight: 300,
  fontSize: 12,
  lineHeight: "17px",
  marginTop: 8,
});

export const MyDiaryCardDesc = styled.div({
  fontWeight: 300,
  fontSize: 12,
  lineHeight: "17px",
});
