let button=document.getElementById('button');
button.addEventListener('click',()=>{
    let input=document.getElementById('input').value;
    let input1=input.toLowerCase();
    let result=document.getElementById('result');
    let arr=input1.split("");
    let rev=arr.reverse();
    let str=rev.join("");
    if(input1.localeCompare(str)==0)
    {
        let soln="GIVEN INPUT IS PALINDROME";
        result.textContent=soln;
    }
    else{
        let soln=" GIVEN INPUT IS NOT PALINDROME";
        result.innerHTML=soln;
    }
})