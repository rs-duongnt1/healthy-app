/// <reference types="vite-plugin-svgr/client" />

import { Chart } from "@/components/Chart";
import Container from "@/components/base/Container";
import MealItem from "@/components/MealItem";
import { ReactComponent as Knife } from "@/assets/svg/knife.svg";
import { ReactComponent as Cup } from "@/assets/svg/cup.svg";
import CardList from "@/components/CardList";
import Button from "@/components/base/Button";
import Stack from "@/components/Stack";
import { useEffect, useState } from "react";
import { useFetchMealLogsQuery, useFetchMealsQuery } from "@/services/meal";
import {
  HexList,
  HomeChartRoot,
  HomeRoot,
  HomeStats,
  HomeStatsRoot,
  HomeTop,
} from "./styles";
import Loading from "@/components/Loading";

export default function Home() {
  const mealTypeList = [
    {
      id: 1,
      icon: <Knife />,
      text: "Morning",
      value: "morning",
    },
    {
      id: 2,
      icon: <Knife />,
      text: "Lunch",
      value: "lunch",
    },
    {
      id: 3,
      icon: <Knife />,
      text: "Dinner",
      value: "dinner",
    },
    {
      id: 4,
      icon: <Cup />,
      text: "Snack",
      value: "snack",
    },
  ];

  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [meals, setMeals] = useState<any[]>([]);
  const [mealTypeSelected, setMealTypeSelected] = useState<string>();
  const { data, refetch, isFetching } = useFetchMealLogsQuery({
    page: page,
    mealType: mealTypeSelected,
  });

  useEffect(() => {
    if (data) {
      setLastPage(data.last_page);
      setMeals((meals) => [...meals, ...data.meal_logs]);
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [page]);

  const fetchList = () => {
    setPage((page) => page + 1);
  };


  const handleSelectMealType = (mealType: any) => {
    if (isFetching || mealType.value === mealTypeSelected) return;
    setPage(1)
    setMeals([]);
    setMealTypeSelected(mealType.value);
  };

  return (
    <HomeRoot>
      <HomeTop>
        <HomeStatsRoot>
          <HomeStats>
            <div>
              <span className="stats-date">05/21</span>
              <span className="stats-percent">75%</span>
            </div>
          </HomeStats>
        </HomeStatsRoot>
        <HomeChartRoot>
          <Chart />
        </HomeChartRoot>
      </HomeTop>
      <Container>
        <Stack mt={25} mb={25}>
          <HexList>
            {mealTypeList.map((meal) => (
              <MealItem
                key={meal.id}
                mealItem={meal}
                selected={mealTypeSelected === meal.value}
                onClick={() => handleSelectMealType(meal)}
              ></MealItem>
            ))}
          </HexList>
        </Stack>
        <CardList items={meals} />
        {isFetching && (
          <Stack direction="column" alignItems="center">
            <Loading />
          </Stack>
        )}
        {page < lastPage && !isFetching && (
          <Stack justifyContent="center" mt={28}>
            <Button onClick={fetchList}>記録をもっと見る</Button>
          </Stack>
        )}
      </Container>
    </HomeRoot>
  );
}
