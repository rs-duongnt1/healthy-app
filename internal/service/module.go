package service

import "go.uber.org/fx"

var Module = fx.Provide(
	InitMealService,
	InitBodyRecordService,
	InitExerciseService,
	InitDiaryService,
	InitUserService,
)
