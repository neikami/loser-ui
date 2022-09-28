### 获取一段时期内的天数
```javascript
export  function getDaysOfPeriod(start, end)
{
    /**
     * 获取一段时期内的天数，包含起止日期
     * @start:起始时间
     * @end:截止时间
     * */
    start = new Date(start)
    end = new Date(end)
    try
    {
        var startObj = {
            'y': Number(start.getFullYear()),
            'm': Number(start.getMonth() + 1),
            'd': Number(start.getDate())
        },
        endObj = {
            'y': Number(end.getFullYear()),
            'm': Number(end.getMonth() + 1),
            'd': Number(end.getDate())
        };
        //start和end必须包含，所以需要+1
        var startPart =  getTotalDaysOfMonthDay(startObj.y,startObj.m) - startObj.d + 1,
            monthPart = 0,
            endPart = endObj.d;
            
        if (startObj.y != endObj.y)
        { //跨年的情况
            var startMonths = 12 - startObj.m; //获取start年份中剩下的月份数
            for (var i = startObj.m + 1; i <= startObj.m + startMonths; i++)
            {
                monthPart += getTotalDaysOfMonthDay(startObj.y,i - 1)
            }
            for (var i = 1; i <= endObj.m - 1; i++)
            {
                monthPart += getTotalDaysOfMonthDay(endObj.y,i - 1)
            }
        }
        else
        {
            if (startObj.m != endObj.m)
            { //跨月
                for (var i = startObj.m + 1; i < endObj.m; i++)
                {
                    monthPart += getTotalDaysOfMonthDay(startObj.y,i - 1)
                }
            }
            else
            {
              
                startPart = 0;
                endPart = endObj.d - startObj.d + 1;
            }
        }
        return startPart + monthPart + endPart;
    } catch(e) {
        return 0;
    }
}; 
```