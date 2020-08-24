var orderlist = document.getElementById("list");
var editText = 0;

function saveData(e) {
    var data = firebase.database().ref('todo');
    var key = data.push().key;
    var todo = {
        text: e,
        key: key
    }
    data.child(key).set(todo);
}

firebase.database().ref('todo').on('child_added', function (data) {
    var list = document.createElement('li');
    var create = document.createElement('input');
    create.setAttribute("type", "checkbox");
    create.setAttribute("onclick", "check(this)");
    create.setAttribute("class", "radio");
    list.appendChild(create);
    var node = document.createTextNode(data.val().text);
    list.appendChild(node);
    orderlist.appendChild(list);


    var but1 = document.createElement('button');
    but1.setAttribute("onclick", "edit(this)");
    but1.setAttribute("id", data.val().key);
    var t1 = document.createTextNode("Edit");
    but1.appendChild(t1);
    but1.setAttribute("class", "butt");
    list.appendChild(but1);

    var but2 = document.createElement('button');
    but2.setAttribute("onclick", "del(this)");
    but2.setAttribute("id", data.val().key);
    var t2 = document.createTextNode("Delete");
    but2.appendChild(t2);
    list.appendChild(but2);
})

function add(id) {
    var text = document.getElementById(id);
    saveData(text.value);
    text.value = "";
}

function del(e) {
    firebase.database().ref('todo').child(e.id).remove();
    e.parentNode.remove();

}

function edit(e) {
    editText = e;
    var t = e.parentNode.firstChild.nextSibling.nodeValue;
    e.parentNode.firstChild.nextSibling.nodeValue = "";
    var a = document.createElement('input');
    e.parentNode.appendChild(a);
    a.id = "txt2";
    a.value = t;

    var but2 = document.createElement('button');
    but2.setAttribute("onclick", "save(this)");
    var t2 = document.createTextNode("Save");
    but2.appendChild(t2);
    e.parentNode.appendChild(but2);
}

function save(e) {

    var edit = e.previousSibling.value;
    var key = editText.id;
    var editTODO ={
        key: key,
        text: edit

    }
    firebase.database().ref('todo').child(key).set(editTODO);
       e.previousSibling.remove();
       e.remove();
        editText.parentNode.firstChild.nextSibling.nodeValue=edit;
}


function delall() {
    firebase.database().ref('todo').remove();
    orderlist.innerHTML = "";
}


function check(e) {
    if (e.checked) {
        var del = document.createElement('del');
        del.setAttribute("class", "d")
        var txt = e.nextSibling;
        var d = e.parentNode.lastChild;
        del.appendChild(txt);
        e.parentNode.appendChild(del);
        e.parentNode.appendChild(d);
        e.parentNode.firstChild.nextSibling.remove();
    }
    else {
        var a = e.nextSibling.firstChild;
        var b = e.nextSibling.nextSibling;
        e.nextSibling.remove();
        e.parentNode.appendChild(a);
        var but1 = document.createElement('button');
        but1.setAttribute("onclick", "edit(this)");
        var t1 = document.createTextNode("Edit");
        but1.appendChild(t1);
        but1.setAttribute("class", "butt");
        e.parentNode.appendChild(but1);
        e.parentNode.appendChild(b);


    }
}
