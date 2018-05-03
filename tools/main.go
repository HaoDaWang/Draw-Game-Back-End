package main

import (
	"log"
	"regexp"
	"strings"
	"fmt"
	"net/http"
	"github.com/PuerkitoBio/goquery"
	"gopkg.in/mgo.v2"
)

const (
	ANSWER_URL = "https://blog.csdn.net/h247263402/article/details/60325610"
	DATABASE_URL = "localhost:27017"
)

//问题结构体
type Question struct {
	Name string
}

//储存问题的容器
var container []Question = make([]Question,0,0)

func main(){
	err := getQuestion()
	checkErr(err)
	err = dbFunc()
	checkErr(err)
}

func checkErr(err error){
	if err != nil {
		log.Fatal(err)
	}
}

//连接mongo
func dbFunc() error{
	session, err := mgo.Dial(DATABASE_URL)
	if err != nil {
		return err
	}

	//切换数据库
	db := session.DB("DrawGame")
	//切换集合
	questionsCol := db.C("Questions")
	for _, v := range container {
		err = questionsCol.Insert(&v)
		if err != nil {
			return err
		}
	}

	return nil
}

//获取题目
func getQuestion() error {
	doc, err := getDocument()
	if err != nil {
		return err
	}

	doc.Find("div[class='htmledit_views']").Children().Each(func(index int, sec *goquery.Selection){
		if index != 0 && index < 29 { 
			arr := strings.Split(sec.Text(),"：")
			newarr := strings.Split(arr[1], ".")
			tmp := newarr[1:]

			for _, v := range tmp {
				str, _ := CutNum(v)
				container = append(container, Question{str})
			}
		}
	})

	fmt.Println(len(container))

	return nil
}

//去掉字符串中的数字
func CutNum(str string) (string, bool){
	ok, err := regexp.MatchString("\\d", str)
	if err != nil {
		return "", false
	}

	if ok {
		str = str[:len(str) - 1]
	}

	return str, true
}

//获取document
func getDocument() (*goquery.Document, error){
	res, err := http.Get(ANSWER_URL)
	if err != nil{
		return nil, err
	}

	doc, err := goquery.NewDocumentFromResponse(res)
	if err != nil {
		return nil, err
	}

	return doc, nil
}