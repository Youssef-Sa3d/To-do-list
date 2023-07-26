var mode = false;

function dele() {
    var ele = this.parentNode;
    ele.remove();
}

function checked() {
    var element = this.parentNode;
    var p = element.childNodes[1];
    if (this.checked) {
        p.style.textDecorationLine = "line-through";
    } else {
        p.style.textDecorationLine = "";
    }
}

function suii() {
    if (document.getElementById("txt").value == '' || document.getElementById("txt").value == ' ') {
        document.getElementById("txt").placeholder = "Add something!";
    }
    // else if (parentNode.childNodes.length < 1) {
    //     document.getElementById("txt").placeholder = "Add to list again!";
        
    // }
    else {
        var value = document.getElementById("txt").value;
        var ele = document.getElementById("list");


        var div = document.createElement("div");
        ele.appendChild(div);
        div.className = "parent";
        
        var done = document.createElement("input");
        done.setAttribute('type', 'checkbox');
        div.appendChild(done);
        done.addEventListener("change", checked);
        done.className = 'done';
        
        var p = document.createElement("p");
        var txt = document.createTextNode(value);
        p.appendChild(txt);
        div.appendChild(p);
        document.getElementById("txt").value = '';
        document.getElementById("txt").placeholder = "Add more!";
        
        var x = document.createElement("button");
        var del = document.createTextNode("x");
        x.appendChild(del);
        div.appendChild(x);
        x.addEventListener("click", dele);
        if (mode === false) {
            p.className = 'p';
            x.className = 'x';
        } else {
            
            p.className = 'dp';
            x.className = 'dx';
        }
        
    }
}


var pp = document.getElementsByClassName("p");
var xx = document.getElementsByClassName("x");
function m() {
    if (mode === false) {
        document.body.style.backgroundColor = "black";
        document.querySelector(".logo").className = "dlogo";
        document.querySelector(".darkbtn").innerHTML = "Light Mode";
        document.querySelector(".darkbtn").className = "lightbtn";
        document.querySelector(".container").className = "dcontainer";
        document.querySelector(".txt").className = "dtxt";
        document.querySelector(".list").className = "dlist";
        for (var i = 0; i < pp.length; i++) {
            pp[i].classList.toggle("dp");
            xx[i].classList.toggle("dx");
        }
        document.querySelector(".btn").className = "dbtn";
        mode = true;
    } else {
        document.body.style.backgroundColor = "white";
        document.querySelector(".dlogo").className = "logo";
        document.querySelector(".lightbtn").innerHTML = "Dark Mode";
        document.querySelector(".lightbtn").className = "darkbtn";
        document.querySelector(".dcontainer").className = "container";
        document.querySelector(".dtxt").className = "txt";
        document.querySelector(".dlist").className = "list";
        
        for (var i = 0; i < pp.length; i++) {
            pp[i].classList.toggle("dp");
            xx[i].classList.toggle("dx");
        }
        document.querySelector(".dbtn").className = "btn";
        mode = false;
        
    }

}

