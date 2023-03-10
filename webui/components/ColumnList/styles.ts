import styled from "@emotion/styled";

export interface ThumbnailOptions {
  height: number | string;
}

export const ColumnListRoot = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gridGap: 8,
});

export const ColumnListRootCard = styled.div({
  // width: '100%'
});

export const ColumnListThumbnail = styled.div((props: { img?: string }) => ({
  height: 145,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: `url(${props.img})`,
  position: "relative",
}));

export const ColumnListItemLabelRoot = styled.div({
  position: "absolute",
  bottom: 0,
  left: 0,
  backgroundColor: "#FFCC21",
  padding: "7px 8px",
  fontSize: "15px",
  lineHeight: "18px",
  color: "var(--white)",
});

export const ColumnListItemTitle = styled.div({
  marginTop: 8,
  color: "var(--secondary)",
  fontSize: 15,
  lineHeight: "22px",
  fontWeight: 300,
});

export const ColumnListItemTag = styled.div({
  marginTop: 8,
  color: "var(--primary)",
  fontSize: 15,
  lineHeight: "22px",
  fontWeight: 300,
});
