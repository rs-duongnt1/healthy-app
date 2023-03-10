import styled from "@emotion/styled";

export interface ThumbnailOptions {
  height: number | string;
}

export const CardListRoot = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gridGap: 8,
});

export const CardListRootCard = styled.div({
  // width: '100%'
});

export const CardListThumbnail = styled.div(
  (props: { thumbnailOptions?: ThumbnailOptions; img?: string }) => ({
    height: props.thumbnailOptions?.height || 234,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${props.img})`,
    position: "relative",
  })
);

export const CardListItemLabelRoot = styled.div({
  position: "absolute",
  bottom: 0,
  left: 0,
  backgroundColor: "#FFCC21",
  padding: "7px 8px",
  fontSize: "15px",
  lineHeight: "18px",
  color: "var(--white)",
});

export const CardListItemTitle = styled.div({
  marginTop: 8,
  color: "var(--secondary)",
  fontSize: 15,
  lineHeight: "22px",
  fontWeight: 300,
});

export const CardListItemTag = styled.div({
  marginTop: 8,
  color: "var(--primary)",
  fontSize: 15,
  lineHeight: "22px",
  fontWeight: 300,
});
