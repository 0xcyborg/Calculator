// 2023-01-10

function lastChar(){
    Text = document.getElementById("text").value;
    return Text[Text.length - 1];
}

function Is_Number(Value){
    if(isNaN(parseInt(Value))) return false;
    return true;
}

function Append(Data){
    Condition = !Is_Number(lastChar()) && !Is_Number(Data);
    if(Condition) return;
    document.getElementById("text").value += Data;
}

function Clear(){
    document.getElementById("text").value = null;
}

function Calculate(){
    if(!Is_Number(lastChar())) return;
    document.getElementById("text").value = eval(document.getElementById("text").value);
}