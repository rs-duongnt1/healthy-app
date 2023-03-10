package repository

import "go.uber.org/fx"

var Module = fx.Provide(
	InitMealRepository,
	InitBodyRecordRepository,
	InitExerciseRepository,
	InitDiaryRepository,
	InitUserRepository,
)
