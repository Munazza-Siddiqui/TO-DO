var orderlist = document.getElementById("list");
var editText=0;

function add(id) {
    var text = document.getElementById(id);
    var list = document.createElement('li');
   // list.setAttribute("class", "li");
    var node = document.createTextNode(text.value)
    list.appendChild(node);
    orderlist.appendChild(list);
    console.log(orderlist);
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
   // but2.setAttribute("class", "butto");
    list.appendChild(but2);

}

function del(e){
    e.parentNode.remove();

}

function edit(e){
     editText=e;
    var t=e.parentNode.firstChild.nodeValue;
e.parentNode.firstChild.nodeValue="";
var a=document.createElement('input');
e.parentNode.appendChild(a);
a.value=t;

var but2 = document.createElement('button');
but2.setAttribute("onclick", "save(this)");
var t2 = document.createTextNode("Save");
but2.appendChild(t2);
// but2.setAttribute("class", "butto");
e.parentNode.appendChild(but2);
console.log(t);
}

function save(e){
   var edit= e.previousSibling.value;
   e.previousSibling.remove();
   e.remove();
    editText.parentNode.firstChild.nodeValue=edit;
}


function delall(){
orderlist.innerHTML="";
}

    function select(e){
        e.disabled="true";
        for(var i=0; i<orderlist.childNodes.length; i++){
            // if(orderlist.childNodes[i].firstChild=='del'){
            //     i++;
            // }
        var create=document.createElement('input');
        create.setAttribute("type","radio");
        create.setAttribute("onclick","check(this)");
        create.setAttribute("class","radio");
        orderlist.childNodes[i].appendChild(create);
    }}

    function check(e){
        var del= document.createElement('del');
    var txt=e.parentNode.firstChild;
    var d=e.parentNode.firstChild.nextSibling.nextSibling;
    del.appendChild(txt);
    del.appendChild(d);
    e.parentNode.appendChild(del);
    for(var i=1; i<=2; i++){
    e.parentNode.firstChild.remove();
    }

    }

    function back(){
        document.getElementById("sel").disabled="false";
        
    }