// 讀入網頁後就先隨機一組
window.onload = function () {
    start();
}

// 全域用
var v = new Array(5);//抽取數字陣列
var an = new Array(5);//家
var a;
var b;
var emp = 0;

// 抽取數字
function start() {
    for (let i = 0; i < 5; i++) {
        v[i] = ((Math.ceil(Math.random() * 9)));
        // console.log("i=", i, v[i])
        for (let k = 0; k < 5; k++) {
            if (v[i] == v[k]) {
                // console.log("k=", k, v[k])
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
    // console.log(v);
}

// 認輸
function showAns() {
    var realAns = v[0] * 10000 + v[1] * 1000 + v[2] * 100 + v[3] * 10 + v[4];
    // document.getElementById("help").innerHTML = realAns;
    // document.getElementById("demo").innerHTML += "===【" + realAns + "】===";
    alert("正解\n" + "===【" + realAns + "】===");
    start();
}

// 輸入數字+判定
function ok() {
    var ans;
    text = "";
    ans = document.getElementById("num").value;
    ansStr = ans.length;
    document.getElementById("sign").innerHTML = "";

    if (ansStr < 5) {
        // alert("請輸入四位數字");
        document.getElementById("sign").innerHTML = "！請輸入五位數字！";
        document.getElementById("num").value = "";
    }
    else {
        // 將輸入的四位數字拆成四個個位數塞進陣列
        for (let i = 4; i >= 0; i--) {
            an[i] = ans % 10;
            ans = Math.floor(ans / 10);
        }

        a = 0;
        b = 0;

        for (let i = 0; i < 5; i++) {
            for (let n = 4; n > i; n--) {
                if (an[i] == an[n]) {
                    // alert("數字不可重複");
                    document.getElementById("sign").innerHTML = "！數字不可重複！";
                    emp = 1;
                    break;
                }
            }
        }



        for (let i = 0; i < 5; i++) {
            for (let k = 0; k < 5; k++) {
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
        if (a == 5) {
            alert("猜中了!(請再次抽取亂數)");
            // document.getElementById("k").style.visibility="visible";
            document.getElementById("demo").innerHTML = "";
            document.getElementById("num").value = "";
            start();
        }
        else if (emp == 1) {
            document.getElementById("num").value = "";
            emp = 0;
        }
        else {
            let ans = document.getElementById("num").value;
            document.getElementById("demo").innerHTML += ans + "&emsp;=>&emsp;" + a + "A" + " " + (b - a) + "B<br>";
            document.getElementById("num").value = "";
        }
    }


    event.preventDefault();

}
