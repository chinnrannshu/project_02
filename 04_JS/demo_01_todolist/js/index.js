// 设置时间
var h1 = document.getElementById("concrete_time");

setInterval(function() {
    var myDate = new Date();
    // 获取当前年份
    var y = myDate.getFullYear();
    //获取当前月份
    var m = myDate.getMonth();
    //获取当前日
    var d = myDate.getDate();
    //获取小时
    var h = myDate.getHours();
    //获取分钟
    var min = myDate.getMinutes();
    //获取秒
    var s = myDate.getSeconds();


    h1.innerHTML = y + "年" + (m + 1) + "月" + d + "日" + h + "时" + min + "分" + num(s)
}, 1000);

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
            '<input class="title" type="text" onchange="change();" onclick="edit();">' +
            '<a href="javascript:remove();">remove</a>';
        if (todoc === 0) {
            todolist.appendChild(li);
        } else {
            todolist.insertBefore(li, todolist.children[0]);
        }
        var txtTitle = document.getElementsByClassName("title")[0];
        txtTitle.value = title.value;
        loop('todolist');
        todoc++;
        todoCount.innerText = todoc;

        title.value = "";
    }
}
// 循环 每次添加不同的i值
function loop(str) {
    var list = null;
    str === 'todolist' ? list = todolist : list = donelist;

    childs = list.childNodes;
    for (var i = 0; i < childs.length; i++) {
        childs[i].children[0].setAttribute('onchange', 'update("' +
            i + '","' + str + '")');
        childs[i].children[1].setAttribute('onclick', 'edit("' + i + '","' + str + '")');
        childs[i].children[1].setAttribute('onchange', 'change("' + i + '","' + str + '","' +
            childs[i].children[1].value + '")');
        childs[i].children[2].setAttribute('href', 'javascript:remove("' + i + '","' + str + '")');
    }
}
// update方法
function update(n, str) {
    var list = null;
    str === 'todolist' ? list = todolist : list = donelist;

    var li = null;
    childs = list.childNodes;
    for (var i = 0; i < childs.length; i++) {
        if (i === Number(n)) {
            li = childs[i];
        }
    }
    // 删除原有的，得到li并刷新了原有的li
    remove(n, str);
    if (str === 'todolist') {
        if (donec === 0) {
            donelist.appendChild(li);
        } else {
            donelist.insertBefore(li, donelist.children[0]);
        }
        loop('donelist');
        donec++;
        doneCount.innerText = donec;
    } else if (str === 'donelist') {
        todolist.appendChild(li);
        loop('todolist');
        todoc++;
        todoCount.innerText = todoc;
    }
}

// edit方法编译title
function edit(n, str) {
    var list = null;
    str === 'todolist' ? list = todolist : list = donelist;
    childs = list.childNodes;
    for (var i = 0; i < childs.length; i++) {
        if (i === Number(n)) {
            childs[i].children[1].style.border = '1px solid red';
        }
    }
}

function change(n, str, oldValue) {
    var list = null;
    str === 'todolist' ? list = todolist : list = donelist;
    childs = list.childNodes;
    for (var i = 0; i < childs.length; i++) {
        if (i === Number(n)) {
            childs[i].children[1].style.border = 'none';
            if (childs[i].children[1].value === "") {
                alert('内容不能为空');
                childs[i].children[1].value = oldValue;
            }
        }
    }
    loop(str);
}

// 清除单个列表
function remove(n, str) {
    var list = null;
    if (str === 'todolist') {
        list = todolist;
        todoc--;
        todoCount.innerText = todoc;
    } else if (str === 'donelist') {
        list = donelist;
        donec--;
        doneCount.innerText = donec;
    }
    childs = list.childNodes;
    for (var i = childs.length - 1; i >= 0; i--) {
        if (i === Number(n)) {
            list.removeChild(childs[n]);
        }
    }
    loop(str);
}

// 清除所有列表

function clear() {
    childs1 = todolist.childNodes;
    for (var i = childs1.length - 1; i >= 0; i--) {
        todolist.removeChild(childs1[i]);
    }
    childs2 = donelist.childNodes;
    for (var j = childs2.length - 1; j >= 0; j--) {
        donelist.removeChild(childs2[j]);
    }
    todoc = 0;
    donec = 0;
    todoCount.innerText = todoc;
    doneCount.innerText = donec;
}