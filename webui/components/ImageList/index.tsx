import styled from "@emotion/styled"

const ImageListRoot = styled.div({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: 8,
})

const ImageListRootCard = styled.div({
    // width: '100%'
})

const ImageListThumbnail = styled.div((props: { thumbnailOptions?: ThumbnailOptions }) => ({
    height: props.thumbnailOptions?.height || 234,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: 'url(https://www.cloudflare.com/static/d2cf82ac895f472c6d208cdccf4e722e/cdn-lc.png)',
    position: 'relative',
}))

const ImgListItemLabelRoot = styled.div({
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#FFCC21',
    padding: '7px 8px',
    fontSize: '15px',
    lineHeight: '18px',
    color: 'var(--white)',
})

const ImageListItemTitle = styled.div({
    marginTop: 8,
    color: 'var(--secondary)',
    fontSize: 15,
    lineHeight: '22px',
    fontWeight: 300,
})

const ImageListItemTag = styled.div({
    marginTop: 8,
    color: 'var(--primary)',
    fontSize: 15,
    lineHeight: '22px',
    fontWeight: 300,
})


interface ThumbnailOptions {
    height: number | string;
}
interface ImageListProps {
    withTitle?: boolean;
    withTag?: boolean;
    thumbnailOptions?: ThumbnailOptions;
}

export default function ImageList({ withTitle, withTag, thumbnailOptions }: ImageListProps) {
    return <ImageListRoot>
        <ImageListRootCard>
            <ImageListThumbnail thumbnailOptions={thumbnailOptions}>
                <ImgListItemLabelRoot>05.20.Morning</ImgListItemLabelRoot>
            </ImageListThumbnail>
            {withTitle && <ImageListItemTitle>魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…</ImageListItemTitle>}
            {withTag && <ImageListItemTag>#魚料理  #和食  #DHA</ImageListItemTag>}
        </ImageListRootCard>
        <ImageListRootCard>
            <ImageListThumbnail thumbnailOptions={thumbnailOptions}>
                <ImgListItemLabelRoot>05.20.Morning</ImgListItemLabelRoot>
            </ImageListThumbnail>
            {withTitle && <ImageListItemTitle>魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…</ImageListItemTitle>}
            {withTag && <ImageListItemTag>#魚料理  #和食  #DHA</ImageListItemTag>}
        </ImageListRootCard>
        <ImageListRootCard>
            <ImageListThumbnail thumbnailOptions={thumbnailOptions}>
                <ImgListItemLabelRoot>05.20.Morning</ImgListItemLabelRoot>
            </ImageListThumbnail>
            {withTitle && <ImageListItemTitle>魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…</ImageListItemTitle>}
            {withTag && <ImageListItemTag>#魚料理  #和食  #DHA</ImageListItemTag>}
        </ImageListRootCard>
        <ImageListRootCard>
            <ImageListThumbnail thumbnailOptions={thumbnailOptions}>
                <ImgListItemLabelRoot>05.20.Morning</ImgListItemLabelRoot>
            </ImageListThumbnail>
            {withTitle && <ImageListItemTitle>魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…</ImageListItemTitle>}
            {withTag && <ImageListItemTag>#魚料理  #和食  #DHA</ImageListItemTag>}
        </ImageListRootCard>
        <ImageListRootCard>
            <ImageListThumbnail thumbnailOptions={thumbnailOptions}>
                <ImgListItemLabelRoot>05.20.Morning</ImgListItemLabelRoot>
            </ImageListThumbnail>
            {withTitle && <ImageListItemTitle>魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…</ImageListItemTitle>}
            {withTag && <ImageListItemTag>#魚料理  #和食  #DHA</ImageListItemTag>}
        </ImageListRootCard>
        <ImageListRootCard>
            <ImageListThumbnail thumbnailOptions={thumbnailOptions}>
                <ImgListItemLabelRoot>05.20.Morning</ImgListItemLabelRoot>
            </ImageListThumbnail>
            {withTitle && <ImageListItemTitle>魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…</ImageListItemTitle>}
            {withTag && <ImageListItemTag>#魚料理  #和食  #DHA</ImageListItemTag>}
        </ImageListRootCard>
        <ImageListRootCard>
            <ImageListThumbnail thumbnailOptions={thumbnailOptions}>
                <ImgListItemLabelRoot>05.20.Morning</ImgListItemLabelRoot>
            </ImageListThumbnail>
            {withTitle && <ImageListItemTitle>魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…</ImageListItemTitle>}
            {withTag && <ImageListItemTag>#魚料理  #和食  #DHA</ImageListItemTag>}
        </ImageListRootCard>
        <ImageListRootCard>
            <ImageListThumbnail thumbnailOptions={thumbnailOptions}>
                <ImgListItemLabelRoot>05.20.Morning</ImgListItemLabelRoot>
            </ImageListThumbnail>
            {withTitle && <ImageListItemTitle>魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…</ImageListItemTitle>}
            {withTag && <ImageListItemTag>#魚料理  #和食  #DHA</ImageListItemTag>}
        </ImageListRootCard>

    </ImageListRoot>
}