function getHistory(){
    return document.getElementById("history-value").innerText;
}

function printHistory(num){
    document.getElementById("history-value").innerText=num;

}

function getOutput(){
    return document.getElementById("output-value").innerText;
}

function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }
    else document.getElementById("output-value").innerText=getCommaSeparated(num);
}
function getCommaSeparated(num){
    if(num=="-"){return "";}
    var n=Number(num);
    var r=n.toLocaleString();
    return r;
}

function getReverse(num){
    return Number(num.replace(/,/g,''));
}

var operator=document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id=="dl"){
            var output=getReverse(getOutput()).toString();
            if(output){
                output=output.substr(0,output.length-1);
            }
            printOutput(output);
        }
        else {
            var output=getOutput();
            var history=getHistory();
            if(output==""&&history!=""){
                if(isNaN(history[history.length-1])){
                    history=history.substr(0,history.length-1);
                }
            }
            if(output!="" || history!=""){
                output= output==""?output:getReverse(output);
                history=history+output;
                if(this.id=="equal"){
                    var result=eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else if(this.id=="squre"){
                    var result= eval("output*output");
                    printOutput(result);
                    document.getElementById("history-value").innerText=output+"^2";
                }

                else if(this.id=="sqrt"){
                    var result= Math.sqrt(output);
                    printOutput(result);
                    document.getElementById("history-value").innerText=output;
                }

                else if(this.id=="sin"){
                    var result=output*(Math.PI/180);
                    result=Math.sin(result);
                    printOutput(result);
                    document.getElementById("history-value").innerText="sin("+output+")";
                }

                else if(this.id=="cos"){
                    var result=output*(Math.PI/180);
                    result=Math.cos(result);
                    printOutput(result);
                    document.getElementById("history-value").innerText="cos("+output+")";
                }
                else if(this.id=="tan"){
                    var result=output*(Math.PI/180);
                    result=Math.tan(result);
                    printOutput(result);
                    document.getElementById("history-value").innerText="tan("+output+")";
                }
                
                

                else{
                    history=history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }

    });
}
var number=document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output=getReverse(getOutput());
        if(output!= NaN){
            output+=this.id;
            printOutput(output);
        }
    });
}
