import styled from "@emotion/styled"
import Button from "../components/Button"
import { Chart } from "../components/Chart"
import Container from "../components/Container"
import Stack from "../components/Stack"
import { allExcercises, diaryList, excercises, recordCategories } from "../data/record"

const RecordRoot = styled.div({
    marginTop: 56,
})

const RecordCategory = styled.div((props: { backgroundImage?: string }) => ({
    height: 240,
    width: 240,
    border: '24px solid #FFCC21',
    ...(props.backgroundImage && { backgroundImage: `url(${props.backgroundImage})` }),
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    '.category-title': {
        color: '#FFCC21',
        fontWeight: 400,
        fontSize: 25,
        lineHeight: '30px',
    },
    '.category-btn': {
        outline: 'none',
        border: 'none',
        backgroundColor: 'var(--primary)',
        fontSize: 14,
        lineHeight: '20px',
        color: 'var(--white)',
        height: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 160,
    }
}))

const RecordMyExcercise = styled.div({
    height: 264,
    backgroundColor: 'var(--secondary)',
    padding: '16px 24px'
})

const RecordMyExcerciseTitle = styled.div({
    fontWeight: 400,
    fontSize: 15,
    lineHeight: '18px',
    color: 'var(--white)',
    width: 96,
})

const RecordMyExcerciseDate = styled.div({
    fontWeight: 400,
    fontSize: 22,
    lineHeight: '27px',
    color: 'var(--white)',
})

const RecordMyExcerciseList = styled.div({
    width: '100%',
    height: '184px',
    paddingRight: 32,
    overflow: 'hidden auto',
    '::-webkit-scrollbar': {
        width: 6,
    },
    '::-webkit-scrollbar-track': {
        background: '#777777',
        borderRadius: '3px',
    },
    '::-webkit-scrollbar-thumb': {
        background: '#FFCC21',
        borderRadius: '3px',
    },
    '::-webkit-scrollbar-thumb:hover': {
        background: '#FFCC21',
    }
})

const RecordMyExcerciseListItem = styled.div({
    color: 'var(--white)',
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    borderBottom: '1px solid #777777',
    padding: '2px 0'
})

const RecordMyExcerciseListItemDot = styled.div({
    fontSize: '5px',
    width: '15px',
    marginTop: '4px',
})

const RecordMyExcerciseListItemText = styled.div({
    fontWeight: 300,
    fontSize: 15,
    lineHeight: '22px'
})
const RecordMyExcerciseListItemWeight = styled.div({
    fontWeight: 400,
    fontSize: 15,
    lineHeight: '18px',
    color: '#FFCC21'
})

const RecordMyExcerciseListItemTime = styled.div({
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '22px',
    color: '#FFCC21'
})

const MyDiaryTitle = styled.h4({
    color: 'var(--secondary)',
    fontSize: 22,
    fontWeight: 400,
    lineHeight: '27px'
})


const MyDiaryCard = styled.div({
    color: 'var(--secondary)',
    width: '25%',
    border: '2px solid #707070',
    padding: '16px'
})

const MyDiaryCardDate = styled.div({
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '22px'
})

const MyDiaryCardTitle = styled.div({
    fontWeight: 300,
    fontSize: 12,
    lineHeight: '17px',
    marginTop: 8,
})

const MyDiaryCardDesc = styled.div({
    fontWeight: 300,
    fontSize: 12,
    lineHeight: '17px'
})

export default function Record() {
    return <RecordRoot>
        <Container>
            <Stack spacing={48} justifyContent="center">
                {recordCategories.map(category => (
                    <RecordCategory backgroundImage={category.image} key={category.id}>
                        <Stack direction="column" justifyContent="center" alignItems="center" spacing={10}>
                            <span className="category-title">{category.title}</span>
                            <button className="category-btn">{category.btnText}</button>
                        </Stack>
                    </RecordCategory>
                ))}
            </Stack>
            <Stack direction="column" h={304} mt={56}>
                <Chart withFilter withTitle options={
                    {
                        layout: {
                            padding: {
                                left: 54,
                                right: 54,
                                top: 54,
                                bottom: 35,
                            }
                        }
                    }
                } />
            </Stack>
            <Stack direction="column" mt={56}>
                <RecordMyExcercise>
                    <Stack>
                        <RecordMyExcerciseTitle>MY <br /> EXERCISE</RecordMyExcerciseTitle>
                        <RecordMyExcerciseDate>2021.05.21</RecordMyExcerciseDate>
                    </Stack>
                    <Stack direction="row" mt={4} spacing={8}>
                        <Stack w="50%">
                            <RecordMyExcerciseList>
                                {excercises.map(excercise => (
                                    <RecordMyExcerciseListItem key={excercise.id}>
                                        <Stack direction="row" w="100%" justifyContent="space-between">
                                            <Stack alignItems="flex-start">
                                                <RecordMyExcerciseListItemDot>●</RecordMyExcerciseListItemDot>
                                                <div>
                                                    <RecordMyExcerciseListItemText>家事全般（立位・軽い）</RecordMyExcerciseListItemText>
                                                    <RecordMyExcerciseListItemWeight>26kcal</RecordMyExcerciseListItemWeight>
                                                </div>
                                            </Stack>
                                            <div>
                                                <RecordMyExcerciseListItemTime>10 min</RecordMyExcerciseListItemTime>
                                            </div>
                                        </Stack>
                                    </RecordMyExcerciseListItem>
                                ))}

                            </RecordMyExcerciseList>
                        </Stack>
                        <Stack w="50%">
                            <RecordMyExcerciseList>
                                {allExcercises.map(excercise => (
                                    <RecordMyExcerciseListItem key={excercise.id}>
                                        <Stack direction="row" w="100%" justifyContent="space-between">
                                            <Stack alignItems="flex-start">
                                                <RecordMyExcerciseListItemDot>●</RecordMyExcerciseListItemDot>
                                                <div>
                                                    <RecordMyExcerciseListItemText>家事全般（立位・軽い）</RecordMyExcerciseListItemText>
                                                    <RecordMyExcerciseListItemWeight>26kcal</RecordMyExcerciseListItemWeight>
                                                </div>
                                            </Stack>
                                            <div>
                                                <RecordMyExcerciseListItemTime>10 min</RecordMyExcerciseListItemTime>
                                            </div>
                                        </Stack>
                                    </RecordMyExcerciseListItem>
                                ))}

                            </RecordMyExcerciseList>
                        </Stack>
                    </Stack>

                </RecordMyExcercise>

            </Stack>

            <Stack mt={56} direction="column" mb={30}>
                <MyDiaryTitle>MY DIARY</MyDiaryTitle>
                <Stack direction="row" spacing={12} mt={10} h={231}>
                    {diaryList.map(diary => (
                        <MyDiaryCard key={diary.id}>
                            <MyDiaryCardDate>2021.05.21 <br /> 23:25</MyDiaryCardDate>
                            <MyDiaryCardTitle>私の日記の記録が一部表示されます。</MyDiaryCardTitle>
                            <MyDiaryCardDesc>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</MyDiaryCardDesc>
                        </MyDiaryCard>
                    ))}

                </Stack>
            </Stack>
            <Stack justifyContent="center">
                <Button>自分の日記をもっと見る</Button>
            </Stack>
        </Container>
    </RecordRoot>
}