//Q1
document.write('<p><b>Q1 : <br>"<i>function counter(){<br>var counter = 0;<br><br>function IncreaseCounter() {<br>    return counter += 1;<br>};<br><br>return IncreaseCounter;<br>}<br><br>var counter = counter();<br>alert(counter());<br>alert(counter());<br>alert(counter());<br>alert(counter()); "</i></b><br>"</i></p> ');


document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify(1)}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify(2)}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify(3)}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify(4)}</i></pre>`);



document.write(`<p><br><mark><b>Reason for output:</b></mark><br><b>var counter = counter();:</b> This line declares a variable called <b>counter</b> and assigns it the result of invoking the <b>counter</b> function. When you invoke <b>counter()</b>, it sets up the inner function <b>IncreaseCounter</b> and returns it, effectively capturing the counter variable within its closure.<br>Now, <b>counter</b> refers to the <b>IncreaseCounter</b> function with access to the <b>counter</b> variable.<br><br>1.<b>alert(counter());:</b> This line calls the <b>counter</b> function (which is now the <b>IncreaseCounter</b> function) and alerts the result. The <b>IncreaseCounter</b> function increments the <b>counter</b> variable by 1 and returns its current value. So, it alerts the value <b>1.</b><br>2.<b>alert(counter());:</b> Again, this line calls the <b>counter</b> (which is still the <b>IncreaseCounter</b>) function and alerts the result. The <b>IncreaseCounter</b> function increments the <b>counter</b> variable by 1, which was 1 from the previous call, and returns its current value. So, it alerts the value <b>2.</b><br>3.<b>alert(counter());:</b> Once more, this line calls the <b>counter</b> (still the <b>IncreaseCounter</b>) function and alerts the result. The <b>IncreaseCounter</b> function increments the <b>counter</b> variable by 1, which was 2 from the previous call, and returns its current value. So, it alerts the value <b>3.</b><br>4.<b>alert(counter());:</b> Finally, this line calls the <b>counter</b> (the <b>IncreaseCounter</b>) function one more time and alerts the result. The <b>IncreaseCounter</b> function increments the <b>counter</b> variable by 1, which was 3 from the previous call, and returns its current value. So, it alerts the value <b>4.</b></p><hr>`);






//Q2
document.write('<p><b>Q2 : <br><i>"let count = 0;<br>    (function () {<br>        if (count === 0) {<br>            let count = 1;<br>            console.log(count); // What is logged?<br>        }<br>        console.log(count); // What is logged?<br>    })();"</i></b><br>"</i></p> ');


document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify(1)}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify(0)}</i></pre>`);


document.write(`<p><br><mark><b>Reason for output:</b></mark><br>1.Initially, a variable <b>count</b> is declared in the outer scope and assigned the value <b>0.</b><br>2.Inside the immediately-invoked function expression (IIFE), there is another variable <b>count</b> declared using the <b>let</b> keyword within the <b>if</b> block. This is a separate variable with block scope that shadows (hides) the outer <b>count</b> variable within the block. So, there are two different variables named <b>count</b> here.<br>3.Inside the <b>if</b> block, there is a <b>console.log(count)</b> statement. This will log the value of the inner <b>count</b> variable, which is <b>1.</b> So, the first <b>console.log(count)</b> will output <b>1.</b><br>4.After the <b>if</b> block, there is another <b>console.log(count)</b> statement outside of the <b>if</b> block. This will log the value of the outer <b>count</b> variable, which is still <b>0.</b> So, the second <b>console.log(count)</b> will output <b>0.</b><li>The first <b>console.log(count)</b> inside the <b>if</b> block logs <b>1</b> because it refers to the inner <b>count</b> variable declared within the block.<li>The second <b>console.log(count)</b> outside of the <b>if</b> block logs <b>0 </b>because it refers to the outer <b>count</b> variable declared in the outer scope.</p><hr>`);





//Q3
document.write('<p><b>Q3 : <br><i>"for (var i = 0; i < 3; i++) {<br>    setTimeout(function log() {<br>    console.log(i); // What is logged?<br>}, 1000);<br>}<br>"</i></b></p> ');

document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify(3)}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify(3)}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify(3)}</i></pre>`);


document.write(`<p><br><mark><b>Reason for output:</b></mark><br>1.The loop runs and sets up three <b>setTimeout</b> calls with the same callback function <b>log.</b><br>2.After the loop finishes, the value of <b>i</b> is 3 because the loop condition <b>i < 3</b> is no longer true, and the loop terminates.<br>3.The <b>setTimeout</b> function schedules its callback function to run after 1000 milliseconds (1 second).<br>4.After 1 second, all three callback functions are executed. However, when they execute, they all reference the same variable <b>i.</b> Since JavaScript closures capture variables by reference and not by value, they will all see <b>i</b> as its final value, which is 3.<br><br>when the callbacks execute, they all log the value of <b>i</b>, which is 3, resulting in the output: <b>3 3 3</b><br>the key point to understand here is that closures capture variables by reference, and in this case, they all reference the same <b>i</b> variable with its final value of 3.</p><hr>`);





//Q4
document.write('<p><b>Q4 : Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.</i></b><br><br>    <i style = "color: darkred;"><b>Code : </b><br>function calculateRectangleArea(length) {<br>  // Inner function that accepts breadth as a parameter<br>  function innerFunction(breadth) {<br>        return length * breadth;<br>    }<br><br>  return innerFunction;<br>}<br><br>// Usage<br>const calculateAreaWithLength5 = calculateRectangleArea(5);<br>const area = calculateAreaWithLength5(10);<br>console.log(area); // Output: 50</i></p> ');


document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify(50)}</i></pre>`);


document.write(`<p><br><mark><b>Reason for output:</b></mark><br>1.We define an outer function <b>calculateRectangleArea</b> that takes a parameter <b>length.</b> This outer function serves as a closure that encapsulates the <b>length</b> parameter.<br>2.Inside the outer function, we define an inner function <b>innerFunction</b> that takes a parameter <b>breadth</b>. This inner function has access to the <b>length</b> variable due to the closure created by the outer function.<br>3.The inner function calculates the area of the rectangle by multiplying the length and <b>breadth</b> parameters and returns the result.<br>4.We then call the outer function <b>calculateRectangleArea</b> with an argument of <b>5</b>, and it returns the inner function <b>innerFunction</b> with <b>length</b> set to <b>5</b>.<br>5.Next, we store the returned inner function in the variable <b>calculateAreaWithLength5.</b> Now, <b>calculateAreaWithLength5</b> is a function that calculates the area of a rectangle with a fixed length of <b>5</b>.<br>6.Finally, we call <b>calculateAreaWithLength5</b> with an argument of <b>10</b>, which represents the breadth. This call calculates and returns the area, which is <b>5 * 10 = 50</b>.<br><br>The output of the code is <b>50</b> because the inner function, which is a closure, retains access to the <b>length</b> parameter provided to the outer function when it was initially called. This allows us to calculate the area of a rectangle with a specific length and varying breadth.</p><hr>`);



//Q5
document.write('<p><b>Q5 : Take a variable in outer function and create an inner function to increase the counter every time it is called</i></b><br><br>    <i style = "color: darkred;"><b>Code : </b><br>function outer() {<br>  let counter = 0;<br><br>function inner() {<br>    counter++;<br>    console.log(counter);<br>}<br><br>return inner;<br>}<br><br>const closure = outer();<br>closure(); // Call 1<br>closure(); // Call 2<br>closure(); // Call 3</i></p> ');


document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify(1)}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify(2)}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify(3)}</i></pre>`);


document.write(`<p><br><mark><b>Reason for output:</b></mark><br>1.<b>const closure = outer();:</b> When <b>outer</b> is called, it returns the <b>inner</b> function. However, it also "closes over" the <b>counter</b> variable, creating a closure. This means that <b>counter</b> is not destroyed when <b>outer</b> completes execution; instead, it's retained in memory because the <b>inner</b> function still has access to it.<br>2.<b>closure(); // Call 1:</b> Here, you invoke the <b>inner</b> function through the <b>closure</b> variable. It increments the <b>counter</b> (which is still in scope due to the closure) from 0 to 1 and logs 1 to the console.<br>3.<b>closure(); // Call 2:</b> The second call to <b>closure</b> again invokes the <b>inner</b> function. It increments the <b>counter</b> from 1 to 2 and logs 2 to the console.<br>4.<b>closure(); // Call 3:</b> The third call to <b>closure</b> follows the same pattern. It increments the <b>counter</b> from 2 to 3 and logs 3 to the console.<br><br>The reason for this output is the closure mechanism in JavaScript. The <b>inner</b> function maintains a reference to the <b>counter</b> variable even after <b>outer</b> has finished executing, allowing it to persist and be modified across multiple calls to <b>closure</b>.</p><hr>`);




//Q6
document.write('<p><b>Q6 : "Print Output<br><br>var a = 12;<br>(function () {<br>    alert(a);<br>})();" </b></p> ');

document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify(12)}</i></pre>`);

document.write(`<p><br><mark><b>Reason for output:</b></mark><br>1.<b>var a = 12; </b>declares a variable <b>a</b> in the global scope and assigns it the value <b>12</b>.<br>2.<b>(function () { ... })();</b> defines an anonymous function and immediately invokes it. This is often used to create a private scope for variables and functions to prevent them from polluting the global scope.<br>3.Inside the IIFE, there's an <b>alert(a);</b> statement that tries to access the variable <b>a.</b> Since <b>a</b> is not defined within the scope of the IIFE, JavaScript will look for it in the closest outer scope, which is the global scope in this case.<br><br>The expected output will be an alert dialog with the message "12". This is because when the <b>alert(a);</b> statement is executed inside the IIFE, JavaScript looks for the variable <b>a</b> in the nearest outer scope, which is the global scope. In the global scope, <b>a</b> has been defined and assigned the value <b>12</b>, so when the <b>alert</b> function is called with <b>a</b> as its argument, it displays the value of <b>a</b>, which is "12", in the alert dialog.<br><br>The output of the code is an alert with the message "12" because the IIFE accesses the variable <b>a</b> from the global scope, where it has been defined and initialized to the value <b>12</b>.</p><hr>`);





//Q7
document.write('<p><b>Q7 : "var a = 10;<br>var x = (function () {<br>    var a = 12;<br>    return function () {<br>        alert(a);<br>    };<br>})();<br>x();"</b></p>');


document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify(12)}</i></pre>`);


document.write(`<p><br><mark><b>Reason for output:</b></mark><br>1.<b>var a = 10; </b>declares a global variable 'a' with a value of 10. This variable is in the global scope.<br>2.Inside the IIFE (Immediately-Invoked Function Expression), <b>var a = 12;</b> declares a local variable 'a' with a value of 12. This variable is in the scope of the IIFE.<br>3.The IIFE returns an inner <b>function: function () { alert(a); }.</b> This inner function captures the 'a' variable from its outer function's scope, which means it remembers the value of the 'a' variable declared inside the IIFE.<br>4.Finally, <b>x();</b> is called, which invokes the inner function returned by the IIFE. The inner function alerts the value of 'a', which is 12.<br><br>The correct output of the code is an alert with the value <b>12</b>. The reason behind this output is that the inner function maintains access to the 'a' variable from its enclosing (parent) function's scope, and that variable has a value of 12 within that scope.</p><hr>`);





//Q8
document.write('<p><b>Q8 : "var globalVar = "xyz";<br><br>    (function outerFunc(outerArg) {<br>        var outerVar = "a";<br><br>        (function innerFunc(innerArg) {<br>            var innerVar = "b";<br><br>            console.log(<br>                "outerArg = " + outerArg + "\n" +<br>                "innerArg = " + innerArg + "\n" +<br>                "outerVar = " + outerVar + "\n" +<br>                "innerVar = " + innerVar + "\n" +<br>                "globalVar = " + globalVar);<br><br>        })(456);<br>    })(123); " </b></p> ');


document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify("outerArg = 123")}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify("innerArg = 456")}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify("outerVar = a")}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify("innerVar = b")}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify("globalVar = xyz")}</i></pre>`);


document.write(`<p><br><mark><b>Reason for output:</b></mark><br>1.<b>globalVar</b> is declared in the global scope and assigned the value <b>"xyz"</b>.<br>2.An immediately invoked function expression (IIFE) <b>outerFunc</b> is defined and executed with <b>outerArg</b. set to <b>123</b>.<br>Inside <b>outerFunc, outerVar</b> is declared and assigned the value <b>'a'</b>.<br>It then defines and immediately invokes <b>innerFunc</b> with <b>innerArg</b> set to <b>456.</b><br>Inside <b>innerFunc, innerVar</b> is declared and assigned the value <b>'b'.</b><br>The <b>console.log</b> statement prints the values of <b>outerArg, innerArg, outerVar, innerVar,</b> and <b>globalVar.</b><br><br><li><b>outerArg</b> is <b>123</b> because it's the argument passed to the outer function <b>outerFunc.</b><br><li><b>innerArg</b> is <b>456</b> because it's the argument passed to the inner function <b>innerFunc.</b><br><li><b>outerVar</b> is <b>a</b> because it's declared and initialized in the outer function <b>outerFunc.</b> It's within the scope of <b>innerFunc</b> as well due to closure.<br><li><b>innerVar</b> is <b>b</b> because it's declared and initialized in the inner function <b>innerFunc.</b><br><li><b>globalVar</b> is <b>xyz</b> because it's declared in the global scope, and functions can access variables in their parent scopes, including the global scope. Since there's no <b>globalVar</b> declared within the functions, it takes the value from the global scope.</p><hr>`);
