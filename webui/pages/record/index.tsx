import Button from "@/components/base/Button"
import { Chart } from "@/components/Chart"
import Container from "@/components/base/Container"
import Stack from "@/components/Stack"
import { allExcercises, diaryList, excercises, recordCategories } from "@/data/record"
import { MyDiaryCard, MyDiaryCardDate, MyDiaryCardDesc, MyDiaryCardTitle, MyDiaryTitle, RecordCategory, RecordMyExcercise, RecordMyExcerciseDate, RecordMyExcerciseList, RecordMyExcerciseListItem, RecordMyExcerciseListItemDot, RecordMyExcerciseListItemText, RecordMyExcerciseListItemTime, RecordMyExcerciseListItemWeight, RecordMyExcerciseTitle, RecordRoot } from "./styles"

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