function showTime() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    return `当前时间:${year}年${month}月${day}日-${hour}时${minute}分${second}秒`
}

let showTimeBox = $('.showTime')
$(document).ready(() => {
    setInterval(() => {
        showTimeBox.text(showTime())
    }, 1000)
});


(function () {
    let box = document.querySelector('.bar')
    let chart = echarts.init(box)
    let option = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        color: ["#2f89cf"],
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true
        },
        xAxis: [
            {
                type: "category",
                data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: {
            type: 'value',
            // y 轴文字标签样式
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
            },
            // y轴线条样式
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    // width: 1,
                    // type: "solid"
                }
            },
            // y 轴分隔线样式
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        },
        series: [
            {
                name: "直接访问",
                type: "bar",
                // 修改柱子宽度
                barWidth: "35%",
                data: [200, 300, 300, 900, 1500, 1200, 600],
                itemStyle: {
                    // 修改柱子圆角
                    barBorderRadius: 5
                }
            }
        ]
    }
    chart.setOption(option)
    window.addEventListener("resize", function () {
        chart.resize();
    });
})();


let myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
(function () {
    let box = document.querySelector('.bar2')
    let chart = echarts.init(box)
    let option = {
        // 图标位置
        grid: {
            top: "10%",
            left: "22%",
            bottom: "10%"
        },
        xAxis: {
            show: false
        },
        yAxis: [
            {
                type: 'category',
                inverse: true,
                //不显示y轴线条
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "#fff"
                },
                data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
            },
            {
                type: 'category',
                inverse: true,
                show: true,
                data: [702, 350, 610, 793, 664],
                // 不显示y轴的线
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 12,
                        color: "#fff"
                    }
                }
            }
        ],
        series: [
            {
                type: 'bar',
                name: "条",
                // 柱子之间的距离
                barCategoryGap: 50,
                //柱子的宽度
                barWidth: 10,
                // 柱子设为圆角
                itemStyle: {
                    normal: {
                        barBorderRadius: 20,
                        color: function (params) {
                            return myColor[params.dataIndex]
                        }
                    }
                },
                data: [70, 34, 60, 78, 69],

                // 图形上的文本标签
                label: {
                    normal: {
                        show: true,
                        // 图形内显示
                        position: "inside",
                        // 文字的显示格式
                        formatter: "{c}%"
                    }
                },
                yAxisIndex: 0,
            },
            {
                name: "框",
                type: "bar",
                barCategoryGap: 50,
                barWidth: 15,
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                },
                data: [100, 100, 100, 100, 100],
                yAxisIndex: 1,
            }
        ],

    }
    chart.setOption(option)
    window.addEventListener("resize", function () {
        chart.resize();
    });
})();

(function () {
    const yearData = [
        {
            year: '2020',  // 年份
            data: [  // 两个数组是因为有两条线
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
            year: '2021',  // 年份
            data: [  // 两个数组是因为有两条线
                [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }
    ];
    let chart = echarts.init(document.querySelector('.line'))
    let option = {
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
            trigger: 'axis'
        },
        // 图例组件
        legend: {
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色
            },
            right: '10%' // 距离右边10%
        },
        // 设置网格样式
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,// 显示边框
            borderColor: '#012f4a',// 边框颜色
            containLabel: true // 包含刻度文字在内
        },
        xAxis: {
            boundaryGap: false,
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            axisLine: {
                show: false
            },
            boundaryGap: false
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false  // 去除刻度
            },
            axisLabel: {
                color: '#4c9bfd' // 文字颜色
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            }
        },
        series: [
            {
                name: '新增粉丝',
                data: yearData[0].data[0],
                type: 'line',
                smooth: true
            }, {
                name: '新增游客',
                data: yearData[0].data[1],
                type: 'line',
                smooth: true
            }
        ]
    }
    chart.setOption(option)

    $('.lineMap h2').on('click', 'a', function () {
        let obj = yearData[$(this).index()]
        option.series[0].data = obj.data[0]
        option.series[1].data = obj.data[1]
        chart.setOption(option)
    })
})()