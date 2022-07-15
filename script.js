window.onload = function () {
    start();
}
var v = new Array(4);//抽取數字陣列
var an = new Array(4);//家
var a;
var b;
function start() {
    for (let i = 0; i < 4; i++) {
        v[i] = ((Math.ceil(Math.random() * 9)));
        console.log("i=", i, v[i])
        for (let k = 0; k < 4; k++) {
            if (v[i] == v[k]) {
                console.log("k=", k, v[k])
                if (i != k) {
                    v[i] = ((Math.ceil(Math.random() * 9)));
                    i = 0;
                }
            }
        }
    }
    // document.getElementById("k").style.visibility="hidden";
    // alert("成功抽取");//+v[0]+" "+v[1]+" "+v[2]+" "+v[3]
    document.getElementById("demo").innerHTML = "";
    console.log(v);
}

function ok() {
    var ans;
    text = "";
    ans = document.getElementById("num").value;
    ansStr = ans.length;
    if (ansStr < 4) {
        alert("請輸入四位數字");
        document.getElementById("num").value = "";
    }
    else {
        for (let i = 3; i >= 0; i--) {
            an[i] = ans % 10;
            ans = Math.floor(ans / 10);
            //alert(an[i]);
        }
        a = 0;
        b = 0;
        for (let i = 0; i < 4; i++) {
            for (let k = 0; k < 4; k++) {
                if (v[k] == an[i]) {
                    b = b + 1;
                    //alert("b"+i);
                }
            }
            if (v[i] == an[i]) {
                a = a + 1;
                //alert("a"+i);
            }
        }
        if (a == 4) {
            alert("猜中了!(請再次抽取亂數)");
            // document.getElementById("k").style.visibility="visible";
            document.getElementById("demo").innerHTML = "";
            document.getElementById("num").value = "";
            start();
        }
        else {
            let ans = document.getElementById("num").value;
            // alert(a+"A"+" "+(b-a)+"B");
            document.getElementById("demo").innerHTML += ans + "&emsp;=>&emsp;" + a + "A" + " " + (b - a) + "B<br>";
            document.getElementById("num").value = "";
        }
    }


    event.preventDefault();

}