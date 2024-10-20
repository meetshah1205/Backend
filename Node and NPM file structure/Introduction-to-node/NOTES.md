# What is Node.js?
Node.js is a: <br>
    Programming Language ❌<br>
    Technology ❌<br>
    Library ❌<br>
    Frameork ❌<br>
    Software ❌<br>
    JavaScript runtime environment ✅

## What is a JavaScript runtime environment?
JS cannot create backend because it does not have the functionality to do so. <br>
Just like a vanilla human can't fly because we lack the functionality to do so, JS lacks the functionality to create a backend.<br>
<div 
style="background-color: #0e0e10;
       color: #f5f5f5;
       border-radius: 10px;
       padding: 10px;
       font-family: sans-serif;
"
>

### Story of Node.js

But, then <a href="https://en.wikipedia.org/wiki/Ryan_Dahl" target="_blank"> <b>Ryan Dahl</b></a>  thought, "Why not?" and created Node.js by modifying the code of the V8 engine of Google Chrome. <br>
<b>What is V8 engine?</b> <br>
The engine (code) responsible for running JavaScript in Google Chrome.<br>
But then he thought, "I want to create something like I write JS code and it creates a backend but this V8 engine is in C++!"
</div>

### How Node.js works under the hood?
There is a wrapper layer of JS code built on top of the V8 engine of Google Chrome.<br>
When we write JS code, the wrapper convert that code in such a way that it can work with the C++ code and create the server. <br>
And this entire V8 engine along with the wrapper, is called Node.js.