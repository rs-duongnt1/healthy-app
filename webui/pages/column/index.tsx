import Button from "@/components/base/Button"
import Container from "@/components/base/Container"
import CardList from "@/components/CardList"
import ColumnList from "@/components/ColumnList"
import Stack from "@/components/Stack"
import { columnCategories } from "@/data/column"
import { ColumnListItem, ColumnListItemDesc, ColumnListItemDivider, ColumnListItemTitle } from "./styles"

export default function Column() {
    const columns = [
        {
            id: 1,
            date: '2021-05-17 23:25',
            description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
            tags: ['魚料理', '和食', 'DHA'],
             thumbnail: 'https://www.sleepfoundation.org/wp-content/uploads/2022/04/Eight-Health-Benefits-of-Sleep.jpg'
        },
        {
            id: 2,
            date: '2021-05-17 23:25',
            description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
            tags: ['魚料理', '和食', 'DHA'],
             thumbnail: 'https://www.sleepfoundation.org/wp-content/uploads/2022/04/Eight-Health-Benefits-of-Sleep.jpg'
        },
        {
            id: 3,
            date: '2021-05-17 23:25',
            description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
            tags: ['魚料理', '和食', 'DHA'],
             thumbnail: 'https://www.sleepfoundation.org/wp-content/uploads/2022/04/Eight-Health-Benefits-of-Sleep.jpg'
        },
        {
            id: 4,
            date: '2021-05-17 23:25',
            description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
            tags: ['魚料理', '和食', 'DHA'],
             thumbnail: 'https://www.sleepfoundation.org/wp-content/uploads/2022/04/Eight-Health-Benefits-of-Sleep.jpg'
        },
        {
            id: 5,
            date: '2021-05-17 23:25',
            description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
            tags: ['魚料理', '和食', 'DHA'],
             thumbnail: 'https://www.sleepfoundation.org/wp-content/uploads/2022/04/Eight-Health-Benefits-of-Sleep.jpg'
        },
        {
            id: 6,
            date: '2021-05-17 23:25',
            description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
            tags: ['魚料理', '和食', 'DHA'],
             thumbnail: 'https://www.sleepfoundation.org/wp-content/uploads/2022/04/Eight-Health-Benefits-of-Sleep.jpg'
        },
        {
            id: 7,
            date: '2021-05-17 23:25',
            description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
            tags: ['魚料理', '和食', 'DHA'],
             thumbnail: 'https://www.sleepfoundation.org/wp-content/uploads/2022/04/Eight-Health-Benefits-of-Sleep.jpg'
        },
        {
            id: 8,
            date: '2021-05-17 23:25',
            description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
            tags: ['魚料理', '和食', 'DHA'],
             thumbnail: 'https://www.sleepfoundation.org/wp-content/uploads/2022/04/Eight-Health-Benefits-of-Sleep.jpg'
        }
    ]
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
                <ColumnList columns={columns}/>
            </Stack>
            <Stack direction="row" justifyContent="center" mt={26}>
                <Button>コラムをもっと見る</Button>
            </Stack>
        </Container>
    </Stack>
}