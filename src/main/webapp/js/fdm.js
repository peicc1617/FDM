//表格数据处理核心代码
var sum_function;//全局变量，功能得分总计
var sum_cost;//全局变量，成本总计
//功能系数、成本系数、价值系数计算
function calculate() {
    var data=$('#table').bootstrapTable('getData');//获取输入表格数据
    $('#table1').bootstrapTable('removeAll');//清空结果表格
    for(var i=0;i<data.length;i++){
        var temp_function=data[i].function;
        var temp_cost=data[i].cost;
        var function_parameter=(temp_function/sum_function).toFixed(3);//功能得分系数
        var cost_parameter=(temp_cost/sum_cost).toFixed(3);//成本系数
        var rowData={
            id:data[i].id,
            name_parameter:data[i].name,
            function_parameter: function_parameter,
            cost_parameter:cost_parameter,
            value_parameter:(function_parameter/cost_parameter).toFixed(3)
        }
        $('#table1').bootstrapTable('append',rowData);

    }
}
