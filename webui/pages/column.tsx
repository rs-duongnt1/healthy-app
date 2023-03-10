import styled from "@emotion/styled"
import Button from "../components/Button"
import Container from "../components/Container"
import ImageList from "../components/ImageList"
import Stack from "../components/Stack"
import { columnCategories } from "../data/column"

const ColumnListItem = styled.div({
    backgroundColor: '#2E2E2E',
    width: '25%',
    padding: '24px 8px',
    maxHeight: '144px'
})

const ColumnListItemTitle = styled.div({
    color: '#FFCC21',
    textAlign: 'center',
    fontWeight: 400,
    fontSize: '22px',
    lineHeight: '27px'
})


const ColumnListItemDivider = styled.div({
    height: '1px',
    backgroundColor: '#d6d6d6',
    width: '56px',
    margin: '10px auto 8px auto'
})

const ColumnListItemDesc = styled.div({
    color: 'var(--white)',
    fontSize: 18,
    lineHeight: '26px',
    fontWeight: 300,
    textAlign: 'center'
})

export default function Column() {
    return <Stack direction="column" mt={56}>
        <Container>
            <Stack spacing={32} h="144px">
                {columnCategories.map(columnCategory => (
                    <ColumnListItem key={columnCategory.id}>
                        <ColumnListItemTitle>{columnCategory.title}</ColumnListItemTitle>
                        <ColumnListItemDivider></ColumnListItemDivider>
                        <ColumnListItemDesc>{columnCategory.desc}</ColumnListItemDesc>
                    </ColumnListItem>
                ))}
            </Stack>
            <Stack direction="column" mt={56}>
                <ImageList withTag withTitle thumbnailOptions={{ height: 145 }} />
            </Stack>
            <Stack direction="row" justifyContent="center" mt={26}>
                <Button>コラムをもっと見る</Button>
            </Stack>
        </Container>
    </Stack>
}