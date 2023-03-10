import { createApi } from "@reduxjs/toolkit/query/react";
import moment from "moment";
import { baseQuery } from "./baseQuery";

export const mealApi = createApi({
  baseQuery: baseQuery,
  reducerPath: "Meal",
  tagTypes: [],
  endpoints: (builder) => ({
    fetchMeals: builder.query<
      any,
      { page: number; category_id: number | undefined }
    >({
      query: (params) => ({
        method: "GET",
        url: "/meals",
        params: {
          page: params?.page,
          ...(params.category_id && { category_id: params?.category_id }),
        },
      }),
      transformResponse: (response: any) => response!.data!,
    }),
    fetchMealLogs: builder.query<
      any,
      { page: number; mealType?: string | undefined }
    >({
      query: (params) => ({
        method: "GET",
        url: "/meals/logs",
        params: {
          page: params?.page,
          ...(params.mealType && { meal_type: params?.mealType }),
        },
      }),
      transformResponse: (response: any) => response!.data!,
    }),
  }),
});

export const { useFetchMealsQuery, useFetchMealLogsQuery, useLazyFetchMealLogsQuery } = mealApi;
