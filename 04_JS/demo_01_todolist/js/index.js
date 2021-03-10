// 设置时间
var h1 = document.getElementById("concrete_time");

setInterval(function() {
    var myDate = new Date();

    var y = myDate.getFullYear();
    var m = myDate.getMonth();
    var d = myDate.getDate();
    var h = myDate.getHours();
    var min = myDate.getMinutes();
    var s = myDate.getSeconds();


    h1.innerHTML = y + "年" + "月" + d + "日" + h + "时" + min + "分" + num(s)
}, 1000)

function num(n) {
    if (n < 10) {
        return '0' + n;
    }
    return n
}

var todolist = document.getElementById('todolist');
var donelist = document.getElementById('donelist');

var todoCount = document.getElementById('todocount');
var doneCount = document.getElementById('donecount');

var todoc = 0;
var donec = 0;

// 添加todo的内容
function postAction() {
    var title = document.getElementById("title");

    if (title.value === " ") {
        alert("内容不能为空！")
    } else {
        var li = document.createElement("li");
        li.innerHTML = '<input type="checkbox" onchange="update();">' +
            '<input class="title" type=text onchange="change();" onclick="edit();">' +
            '<a href="javascript:remove();">remove</a>';
        if (todoc === 0) {
            todolist.appendChild(li);
        } else {
            todolist.insertBefore(li, todolist, children[0]);
        }
        var txtTitle = document.getElementsByClassName("title")[0];
        txtTitle.value = title.value;

        loop('todolist')
        todoc++;
        todoCount.innerText = todoc;

        title.value = "";
    }
}