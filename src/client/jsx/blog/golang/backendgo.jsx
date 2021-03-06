import React from 'react';
import PrismCode from '../../feature/Prism';

const backendgo = () => (
  <div>
    <h3>Go ---Switch Usage</h3>
    <PrismCode lang="go">{`
      package main

      import (
        "fmt"
        "time"
      )

      func main() {
        today := time.Now().Weekday()
        // “:=”符号Go语言会自动识别today变量的类别，这点和typescript类似
        fmt.Println("什么时候放假？")
        switch time.Saturday {
          //Fantasy ---> time.Now().Weekday()+1 ====>   "Wednesday" === "Thursday" - 1
          case today - 2:
            fmt.Println("假日已度过。。。")
          case today - 1:
            fmt.Println("昨天都已经放假了！")
          case today + 0:
            fmt.Println("今天放假！")
          case today + 1:
            fmt.Println("明天放假~！")
          case today + 2:
            fmt.Println("后天放假~~！")
          default:
            fmt.Println("想太多~~~！")
        }
      }
    `}
    </PrismCode>
  </div>
);
export default backendgo;
