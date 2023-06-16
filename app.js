console.log("Hello World!\n==========\n");

// Exercise 1 Section

console.log("EXERCISE 1:\n==========\n");
for(let i=1;i<=100;i++){
    if(i%2!=0){
        console.log(i);
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let i=0;i<=100;i++)
{let message=i;
    if(i%3==0){
message+="FIZZ";
    }
    if(i%5==0){
        message+="BUZZ";
    }
    console.log(message)
}
//Exercise 3 section
console.log("EXERCISE 3:\n===========\n")
//EXERCISE 1 in do/while
let i=1;
do{
    if(i%2!=0){
    console.log(i)
    }
    i++;
} while (i<=100)
//EXERCISE 2 in while
let z=0;
while(z<=100){
    let message=z;
    if(z%3==0){
message+="FIZZ";
    }
    if(z%5==0){
        message+="BUZZ";
    }
    z++;
    console.log(message)
}
//EXERCISE 4

console.log("EXERCISE 4:\n===========\n")
let value= Math.round((Math.random()*500));
let n=Math.round(Math.random()*(500-100)+100);
for(let i=0;i<=n;i++){
    if(i==value){
        console.log("Found value!"+ value);
        break;
    }
 
if(i==n){
    console.log("Did not find number "+value+"in numbers 0 to "+n)
}}
    


//EXERCISE 5

console.log("EXERCISE 5:\n===========\n")
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
for(let i=start;i<=end;i++){
    let message=i+" ";
    if(i%fizzDivisor==0){
        message+="FIZZ";
    }
    if(i%buzzDivisor==0)
    {
        message+="BUZZ";
    }
    console.log(message)
}
console.log(fizzDivisor,buzzDivisor)