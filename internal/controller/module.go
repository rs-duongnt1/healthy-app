package controller

import "go.uber.org/fx"

var Module = fx.Invoke(
	InitMealController,
	InitBodyRecordController,
	InitExerciseController,
	InitDiaryController,
	InitUserController,
	InitGHNController,
)
