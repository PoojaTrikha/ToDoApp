//Logical operators

console.log("1",true && true);

console.log("2",true && false);

console.log("3",true || false);

console.log("4",!true || false);

console.log("5",false || false || true);

console.log("6",false || true && true);

console.log("7",!false && true || false);

console.log("8",'1' == 1);

console.log("9",'1' != 1);

console.log("10",'1' !== 1);

console.log("11",5 > 4);

console.log("12",5 > 5);

console.log("13",3 <= 3);

console.log("14",3 < 5 || '1' === 1);

// For loop
console.log("Program in For loop");

var i=5;

for(i=5;i<=50;i=i+5)
{
    console.log(i);
}


//While Loop

console.log("Program for while loop");
var j=5

while(j<=50)

{
    console.log(j);
    j+=5;
}

// True statement

var k=5

while(true)

{  
     if(k<=50)
    {
        break;
    }
    console.log(k);
    j+=5;
}

// Array of the fruits

var languages = ['apple', 'oranges', 'pears','apricots']

for (i=0; i < languages.length;i++) {
  console.log(`I love :${languages[i]}`);// add the language to the result

}


