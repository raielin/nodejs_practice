# Section 3

## Lecture 7

Access Node prompt in Terminal. `>  ` indicates Node prompt :  
```
$ node
> console.log('Hello World!');
> Hello World!
> undefined
> 
```

 

Can run anything you run in Node, in the command line as well.

**So what is Node?**  
Node is based on JavaScript and it runs on the same JavaScript engine that internet browsers use. When a browser parses JavaScript, or reads different lines of syntax and does something, that same engine is used in your machine (via Terminal) in NodeJS.

Can run Node direction in Chrome Developer Tools' Console. 

Node has a lot more built on top of it, but at fundamental level, they're both Javascript, and both Node and JavaScript are running on the same engine.

Some things NodeJS has but browser doesn't have.

At Node prompt:
```
> process.version
'v5.0.0'
```
Printing out value of a variable that's already created. This is the version of Node we're using.

Running this in a browser does not produce the same result - get an error, saying `process.version` does not exist.

Node has a lot of built-in libraries on top of what JavaScript provides.


