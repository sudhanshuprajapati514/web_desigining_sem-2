function calculateResult(){
    let n=document.getElementById("subjects").value;
    let i;
    let total=0;
    for(i=0;i<n;i++)
    {
        let x=parseFloat(prompt("enter the subject no"+(i+1)));
        total+=(x);
    }
    let average=total/n;
    alert("The average is: "+average);
    let grade;
    if(average>=90)
    {
        grade="A++";
        RESULT="PASS";
    }   
    else if(average>=75)
    {
        grade="A";
        RESULT="PASS";

    }
    else if(average>=40)
    {
        grade="B";
        RESULT="PASS";
    }
    else if(average>=33)
    {
        grade="C";
        RESULT="PASS";

    }       
    else
    {
        grade="FAIL";
        RESULT="FAIL";

    }
    let r=document.getElementById("result").innerHTML="Total marks: "+total+"<br/>"+"The average marks is: "+average+"<br/>"+"The grade is: "+grade+"<br/>"+"Result: "+RESULT;

}