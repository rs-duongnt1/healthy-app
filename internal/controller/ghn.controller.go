package controller

import (
	"bytes"
	"encoding/json"
	"io/ioutil"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/nleeper/goment"
)

type GHNController struct{}

func InitGHNController(r *gin.RouterGroup) {
	ghnRoutes := r.Group("ghn")
	controller := &GHNController{}
	ghnRoutes.GET("search", controller.Search)
	ghnRoutes.GET("stats", controller.Stats)
}

func (ghn GHNController) Search(ctx *gin.Context) {
	postBody, _ := json.Marshal(map[string]interface{}{
		"shop_id": 3287409,
		"status": []string{
			"all",
			"picked",
			"sorting",
			"storing",
			"transporting",
			"delivering",
			"delivery_fail",
			"money_collect_delivering",
		},
		"payment_type_id": []int32{
			1,
			2,
		},
		"from_time":               1678122000,
		"to_time":                 1679418000,
		"offset":                  0,
		"limit":                   100, // MAX: 100
		"option_value":            nil,
		"from_cod_amount":         0,
		"to_cod_amount":           0,
		"ignore_shop_id":          false,
		"shop_ids":                nil,
		"is_search_exactly":       true,
		"is_print":                nil,
		"is_cod_failed_collected": nil,
		"source":                  "5sao",
	})
	client := http.Client{}
	responseBody := bytes.NewBuffer(postBody)
	req, err := http.NewRequest("POST", "https://fe-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/search", responseBody)

	if err != nil {
		panic(err)
	}

	req.Header = http.Header{
		"Content-Type": {"application/json"},
		"token":        {"c69e58d3-c7f1-11ed-bcba-eac62dba9bd9"},
	}

	res, err := client.Do(req)
	if err != nil {
		panic(err)
		//Handle Error
	}

	defer res.Body.Close()

	bodyBytes, err := ioutil.ReadAll(res.Body)

	var body map[string]struct {
		Data []interface{} `json:"data"`
	}
	json.Unmarshal(bodyBytes, &body)

	ctx.JSON(http.StatusOK, body["data"].Data)
}

type Stat struct {
	Date  string `json:"date"`
	Total int    `json:"total"`
}

func (ghn GHNController) Stats(ctx *gin.Context) {
	weeks := getCurrentWeekRange()
	months := getCurrentMonthRange()
	// startM, endM := getCurrentMonthRange()
	// dataByWeek := search(SearchParams{
	// 	FromTime: startW,
	// 	ToTime:   endW,
	// 	Token:    "c69e58d3-c7f1-11ed-bcba-eac62dba9bd9",
	// })
	// dataByMonth := search(SearchParams{
	// 	FromTime: startM,
	// 	ToTime:   endM,
	// 	Token:    "c69e58d3-c7f1-11ed-bcba-eac62dba9bd9",
	// })

	var totalByDate []Stat
	var totalByMonth []Stat
	for _, week := range weeks {
		total := search(SearchParams{
			FromTime: week.Start.ToUnix(),
			ToTime:   week.End.ToUnix(),
			Token:    "c69e58d3-c7f1-11ed-bcba-eac62dba9bd9",
		})
		totalByDate = append(totalByDate, Stat{
			Total: total,
			Date:  week.Start.Format("YYYY-MM-DD"),
		})
	}

	for _, month := range months {
		total := search(SearchParams{
			FromTime: month.Start.ToUnix(),
			ToTime:   month.End.ToUnix(),
			Token:    "c69e58d3-c7f1-11ed-bcba-eac62dba9bd9",
		})
		totalByMonth = append(totalByMonth, Stat{
			Total: total,
			Date:  month.Start.Format("YYYY-MM-DD"),
		})
	}

	ctx.JSON(http.StatusOK, gin.H{
		"stats": map[string]interface{}{
			"months": totalByMonth,
			"weeks":  totalByDate,
		},
	})
}

type RangeDate struct {
	Start *goment.Goment `json:"start"`
	End   *goment.Goment `json:"end"`
}

func getCurrentMonthRange() []RangeDate {
	g, err := goment.New()
	if err != nil {
		panic(err)
	}
	daysInMonth := g.DaysInMonth()
	m := g.Month()
	y := g.Year()

	var rangeDate []RangeDate

	for i := 0; i < daysInMonth; i++ {
		gStart, _ := goment.New(time.Date(y, time.Month(m), i+1, 0, 0, 0, 0, time.UTC))
		gEnd, _ := goment.New(time.Date(y, time.Month(m), i+1, 23, 59, 59, 59, time.UTC))
		rangeDate = append(rangeDate, RangeDate{
			Start: gStart,
			End:   gEnd,
		})
	}
	return rangeDate
}

func getCurrentWeekRange() []RangeDate {
	g, err := goment.New()
	if err != nil {
		panic(err)
	}
	m := g.Month()
	y := g.Year()
	startOfW := g.StartOf("isoWeek").Date()

	var rangeDate []RangeDate

	for i := 0; i < 7; i++ {
		gStart, _ := goment.New(time.Date(y, time.Month(m), startOfW+i, 0, 0, 0, 0, time.UTC))
		gEnd, _ := goment.New(time.Date(y, time.Month(m), startOfW+i, 23, 59, 59, 59, time.UTC))
		rangeDate = append(rangeDate, RangeDate{
			Start: gStart,
			End:   gEnd,
		})
	}
	return rangeDate
}

func getPrevWeekRange() (startWeek int64, endWeek int64) {
	g, err := goment.New()
	if err != nil {
		panic(err)
	}
	g.Subtract(1, "weeks")
	startW := g.StartOf("isoWeek").ToUnix()
	endW := g.EndOf("isoWeek").ToUnix()

	return startW, endW
}

func getPrevMonthRange() (startMonth int64, endMonth int64) {
	g, err := goment.New()
	if err != nil {
		panic(err)
	}
	g.Subtract(1, "months")
	startW := g.StartOf("month").ToUnix()
	endW := g.EndOf("month").ToUnix()
	return startW, endW
}

type SearchParams struct {
	FromTime int64
	ToTime   int64
	Token    string
}

func search(params SearchParams) int {
	postBody, _ := json.Marshal(map[string]interface{}{
		"shop_id": 3287409,
		"status": []string{
			"all",
			"picked",
			"sorting",
			"storing",
			"transporting",
			"delivering",
			"delivery_fail",
			"money_collect_delivering",
		},
		"payment_type_id": []int32{
			1,
			2,
		},
		"from_time":               params.FromTime,
		"to_time":                 params.ToTime,
		"offset":                  0,
		"limit":                   1, // MAX: 100
		"option_value":            nil,
		"from_cod_amount":         0,
		"to_cod_amount":           0,
		"ignore_shop_id":          false,
		"shop_ids":                nil,
		"is_search_exactly":       true,
		"is_print":                nil,
		"is_cod_failed_collected": nil,
		"source":                  "5sao",
	})
	client := http.Client{}
	responseBody := bytes.NewBuffer(postBody)
	req, err := http.NewRequest("POST", "https://fe-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/search", responseBody)

	if err != nil {
		panic(err)
	}

	req.Header = http.Header{
		"Content-Type": {"application/json"},
		"token":        {params.Token},
	}

	res, err := client.Do(req)
	if err != nil {
		panic(err)
		//Handle Error
	}

	defer res.Body.Close()

	bodyBytes, err := ioutil.ReadAll(res.Body)

	var body struct {
		Data map[string]int `json:"data"`
		Code interface{}    `json:"code"`
	}
	json.Unmarshal(bodyBytes, &body)

	return body.Data["total"]

}
