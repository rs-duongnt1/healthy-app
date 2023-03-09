import styled from "@emotion/styled"

const ImageListRoot = styled.div({
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto',
    gridGap: 8,
})

const ImageListItemRoot = styled.div({
})

export default function ImageList() {
    return <ImageListRoot>
        <ImageListItemRoot>
            <img src="https://www.cloudflare.com/static/d2cf82ac895f472c6d208cdccf4e722e/cdn-lc.png" width="100%" />
        </ImageListItemRoot>
        <ImageListItemRoot>
            <img src="https://www.cloudflare.com/static/d2cf82ac895f472c6d208cdccf4e722e/cdn-lc.png" width="100%" />
        </ImageListItemRoot>
        <ImageListItemRoot>
            <img src="https://www.cloudflare.com/static/d2cf82ac895f472c6d208cdccf4e722e/cdn-lc.png" width="100%" />
        </ImageListItemRoot>
        <ImageListItemRoot>
            <img src="https://www.cloudflare.com/static/d2cf82ac895f472c6d208cdccf4e722e/cdn-lc.png" width="100%" />
        </ImageListItemRoot>
        <ImageListItemRoot>
            <img src="https://www.cloudflare.com/static/d2cf82ac895f472c6d208cdccf4e722e/cdn-lc.png" width="100%" />
        </ImageListItemRoot>
        <ImageListItemRoot>
            <img src="https://www.cloudflare.com/static/d2cf82ac895f472c6d208cdccf4e722e/cdn-lc.png" width="100%" />
        </ImageListItemRoot>
        <ImageListItemRoot>
            <img src="https://www.cloudflare.com/static/d2cf82ac895f472c6d208cdccf4e722e/cdn-lc.png" width="100%" />
        </ImageListItemRoot>
        <ImageListItemRoot>
            <img src="https://www.cloudflare.com/static/d2cf82ac895f472c6d208cdccf4e722e/cdn-lc.png" width="100%" />
        </ImageListItemRoot>
    </ImageListRoot>
}