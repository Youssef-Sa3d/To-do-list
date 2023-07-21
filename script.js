var counter = 1;

function dele() {
    var ele = this.parentNode;
    ele.remove();
}

function checked() {
    var pp = this.parentNode;
    if (this.checked) {
        pp.style.textDecorationLine = "line-through";
    } else {
        pp.style.textDecorationLine = "";
    }
}

function suii() {
    if (document.getElementById("txt").value == '') {
    } else {
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

        var x = document.createElement("button");
        var del = document.createTextNode("x");
        x.appendChild(del);
        div.appendChild(x);
        x.addEventListener("click", dele);
        x.className = 'x';

        counter++;
    }
}


function dark() {
    var backbody = document.body.style;
    backbody.background = "rgb(255, 255, 255)";

    if (backbody.backgroundColor === "rgb(255, 255, 255)") {
        console.log("messiiii");
        backbody.background = "black";
        document.getElementById("logo").style.color = "white";
        document.getElementById("darkbtn").style.background = "white";
        document.getElementById("darkbtn").style.color = "black";
        document.getElementById("darkbtn").innerHTML = "Light Mode";
        document.getElementById("container").style.background = "white";
        document.getElementById("txt").style.background = "black";
        document.getElementById("txt").style.color = "white";
        document.getElementById("btn").style.background = "white";
        document.getElementById("btn").style.borderColor = "black";
        document.getElementById("btn").style.color = "black";
    } else if (backbody.backgroundColor === "rgb(0, 0, 0)") {
        console.log("suiiiii");
        backbody.background = "white";
        document.getElementById("logo").style.color = "black";
        document.getElementById("darkbtn").style.background = "black";
        document.getElementById("darkbtn").style.color = "white";
        document.getElementById("darkbtn").innerHTML = "Dark Mode";
        document.getElementById("container").style.background = "black";
        document.getElementById("txt").style.background = "white";
        document.getElementById("txt").style.color = "black";
        document.getElementById("btn").style.background = "black";
        document.getElementById("btn").style.borderColor = "white";
        document.getElementById("btn").style.color = "white";
    }
}