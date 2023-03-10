import styled from "@emotion/styled";

export const HomeRoot = styled.div({
  // display: 'flex'
});

export const HomeChartRoot = styled.div({
  overflow: "hidden",
  flex: 1,
});

export const HomeTop = styled.div({
  display: "flex",
});

export const HexList = styled.div({
  display: "grid",
  gridTemplateColumns: "auto auto auto auto",
  gridGap: "84px",
  width: "100%",
  justifyContent: "center",
});

export const HomeStatsRoot = styled.div({
  width: "540px",
  height: 312,
  minWidth: "540px",
  backgroundImage: "url(/assets/images/d01.png)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const HomeStats = styled.div({
  width: 181,
  height: 181,
  border: "2px solid var(--white)",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ".stats-date": {
    fontSize: 18,
    lineHeight: "22px",
    fontWeight: 400,
    color: "var(--white)",
  },
  ".stats-percent": {
    fontSize: 25,
    lineHeight: "30px",
    fontWeight: 400,
    color: "var(--white)",
    marginLeft: 4,
  },
});
