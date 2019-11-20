var $table1 = $('#table');
//编辑列函数
function operateFormatter(value, row, index) {
    return [
        '<a class="edit" href="javascript:void(0)" title="编辑数据">',
        '<i class="fa fa-edit"></i>',
        '</a>  ',
        '<a class="remove" href="javascript:void(0)" title="删除数据">',
        '<i class="fa fa-trash"></i>',
        '</a>'
    ].join('')
}
var updateIndex=1;//更新位置索引
window.operateEvents = {
    'click .edit': function (e, value, row, index) {
        // alert('You click like action, row: ' + JSON.stringify(row))
        updateIndex=index;
        initModal(e, value, row, index);
        $('#editItem').modal('show');
    },
    'click .remove': function (e, value, row, index) {
        $('#table').bootstrapTable('remove', {
            field: 'id',
            values: [row.id]
        })
    }
}
//填充模态框
function initModal(e, value, row, index) {
    $('#name_edit').val(row.name);
    $('#function_edit').val(row.function);
    $('#cost_edit').val(row.cost);
}
//编辑行数据
function  editRow() {
    $('#editItem').modal('hide');
    // var rowData1=[];
    // rowData1.push({
    //     id:10,
    //     name:$('#name_edit').val(),
    //     function:$('#function_edit').val(),
    //     cost:$('#cost_edit').val()
    //
    // });
    $('#table').bootstrapTable('updateRow', {index: updateIndex,row:{
            name:$('#name_edit').val(),
            function:$('#function_edit').val(),
            cost:$('#cost_edit').val()
        }});
}
//添加一条记录时弹出模态对话框
function addRow() {
    //alert("添加设备信息");
    $('#addItem').modal('show');
}
function addItem(){
    var dataNum=$('#table').bootstrapTable('getData').length;
    var rowData=[];
    rowData.push({
        id:dataNum+1,
        name:$('#name').val(),
        function:$('#function').val(),
        cost:$('#cost').val()

    });
    // $table.bootstrapTable('append',rowData);
    $('#table').bootstrapTable('append', rowData);
}
//footer函数
function idFormatter(data) {
    return 'Total';
}

function nameFormatter(data) {
    return data.length
}

function functionFormatter(data) {
    var field = this.field
    var data=data.map(function (row) {
        return +row[field]
    }).reduce(function (sum, i) {
        return sum + i
    }, 0);
    sum_function=data;
    return data;
}
function costFormatter(data) {
    var field = this.field
    var data=data.map(function (row) {
        return +row[field]
    }).reduce(function (sum, i) {
        return sum + i
    }, 0);
    sum_cost=data;
    return data;
}