package controller

import (
	"bytes"
	"encoding/json"
	"io/ioutil"
	"net/http"

	"github.com/gin-gonic/gin"
)

type GHNController struct{}

func InitGHNController(r *gin.RouterGroup) {
	ghnRoutes := r.Group("ghn")
	controller := &GHNController{}
	ghnRoutes.GET("search", controller.Search)
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

	ctx.JSON(http.StatusOK, len(body["data"].Data))
}
