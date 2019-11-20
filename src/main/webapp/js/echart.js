//利用echarts图表进行可视化显示
//目前只显示了价值系数(为什么不显示功能和成本？不想显示，就是为了留坑)
var image;//保存截图
function show() {
    //获取绘图所需数据
    getData();

    var dom = document.getElementById("container");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        title: {
            text: 'FDM分析结果'
        },
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data:xData// X轴数据
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} '
            }
        },
        series: [
            //价值系数系列
            {
                name:'价值系数',
                type:'line',
                // data:[11, 11, 15, 13, 12, 13, 10],
                data:yValue,
                markPoint: {
                    data: [
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
    setTimeout( function(){image = myChart.getDataURL();},2000 );
}
//X轴坐标
var xData=[];
//Y轴功能得分系数
var yFunction=[];
//Y轴成本系数
var yCost=[];
//Y轴价值系数
var yValue=[];
function getData() {
    var data=$('#table1').bootstrapTable('getData');//获取结果数据
    for (var i=0;i<data.length;i++) {
        //X轴数据
        xData.push(data[i].name_parameter);
        //Y轴数据
        yFunction.push(data[i].function_parameter);
        yCost.push(data[i].cost_parameter);
        yValue.push(data[i].value_parameter);
    }
}
