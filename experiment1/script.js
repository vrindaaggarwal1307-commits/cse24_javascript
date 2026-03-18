function calculateResult() {
    const n=document.getElementById("subjects").value;

    let total=0;
    let i;

    for(i=0;i<n;i++) 
    {

        let x=parseFloat(prompt("Enter the subject Number" +(i+1)));

        total=total+x; }

         let average=total/n;

let grade;

if(average >= 90)
grade = "A";

else if(average >= 75)
grade = "B";

else if(average >= 60)
grade = "C";

else if(average >= 50)
grade = "D";

else
grade = "Fail";

document.getElementById("result").innerHTML =
"Average Marks: " + average + "<br>Grade: " + grade;



 let r;
    if(average>40)
        r="pass";
    else r="fail";

    document.getElementById("result").innerHTML += "<br>Result: " + r;
}


//NAME: VRINDA AGGARWAL
//ROLL NO. : 2503201001337