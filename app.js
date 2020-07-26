var orderlist = document.getElementById("list");
var editText=0;

function add(id) {
    var text = document.getElementById(id);
    var list = document.createElement('li');
   var create=document.createElement('input');
   create.setAttribute("type","checkbox");
   create.setAttribute("onclick","check(this)");
   create.setAttribute("class","radio");
   list.appendChild(create);
    var node = document.createTextNode(text.value)
    list.appendChild(node);
    orderlist.appendChild(list);
    text.value = "";

    var but1 = document.createElement('button');
    but1.setAttribute("onclick", "edit(this)");
    var t1 = document.createTextNode("Edit");
    but1.appendChild(t1);
    but1.setAttribute("class", "butt");
    list.appendChild(but1);

    var but2 = document.createElement('button');
    but2.setAttribute("onclick", "del(this)");
    var t2 = document.createTextNode("Delete");
    but2.appendChild(t2);
    list.appendChild(but2);

}

function del(e){
    e.parentNode.remove();

}

function edit(e){
     editText=e;
    var t=e.parentNode.firstChild.nextSibling.nodeValue;
e.parentNode.firstChild.nextSibling.nodeValue="";
var a=document.createElement('input');
e.parentNode.appendChild(a);
a.value=t;

var but2 = document.createElement('button');
but2.setAttribute("onclick", "save(this)");
var t2 = document.createTextNode("Save");
but2.appendChild(t2);
e.parentNode.appendChild(but2);
}

function save(e){
   var edit= e.previousSibling.value;
   e.previousSibling.remove();
   e.remove();
    editText.parentNode.firstChild.nextSibling.nodeValue=edit;
}


function delall(){
orderlist.innerHTML="";
}


function check(e){
    if(e.checked){
        var del= document.createElement('del');
        del.setAttribute("class","d")
    var txt=e.nextSibling;
       var d=e.parentNode.lastChild; 
    del.appendChild(txt);
    e.parentNode.appendChild(del);
    e.parentNode.appendChild(d);
    e.parentNode.firstChild.nextSibling.remove();
    }
    else{
        var a=e.nextSibling.firstChild;
        var b=e.nextSibling.nextSibling;
        e.nextSibling.remove();
        e.parentNode.appendChild(a);
        var but1 = document.createElement('button');
    but1.setAttribute("onclick", "edit(this)");
    var t1 = document.createTextNode("Edit");
    but1.appendChild(t1);
    but1.setAttribute("class", "butt");
    e.parentNode.appendChild(but1);
        e.parentNode.appendChild(b);
       
    
}}
