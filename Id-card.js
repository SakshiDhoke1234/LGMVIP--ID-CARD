function addInfo(){
    var f1 = document.getElementById("form1").value;
    var f2 = document.getElementById("form2").value;
    var f3 = document.getElementById("form3").value;
    var f4 = document.getElementById("form4").value;
    var result1 = " ";
    var result2 =" ";

    var gen = document.getElementsByName('gender');

    for (i = 0; i < gen.length; i++) {
        if (gen[i].checked)
        //    result =  document.getElementById("spanResult").innerHTML= gen[i].value;
        result1 = gen[i].value;
    }

    var check = document.getElementsByName('skill');

    for (i = 0; i < check.length; i++) {
        if (check[i].checked)
        //    result = document.getElementById("spanResult").innerHTML = check[i].value;
        result2 = check[i].value;
    }
    
    document.getElementById("spanResult").innerHTML = f1 +" "+f2+" "+f3+" "+result1+" "+ ","+result2;

    document.getElementById("image1").style.display = "block";
    // document.getElementById("enroll").style.display = "none";
}





















// const output = document.getElementById("output");
// for (let i = 1; i < 5000; i++) {
//     const img = document.createElement("img");
//     img.src = 
//     output.appendChild(img);
    
//     const br = document.createElement("br");
//     output.appendChild(br);
// }