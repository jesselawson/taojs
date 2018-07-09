# ☯ tao.js
A tiny, pure JS testing tool for tiny, pure JS projects.

## Quick Start

1. Copy the `tests/` folder into your project root.
2. Ensure `tests/index.html` is calling your project.
3. Write your tests in `tests/test.js`, following the instructions in the below "Overview" section.
4. Run a web server from your project root, then navigate your browser to `/tests`.

## Overview

Tao.js was designed to be dropped into your existing project with ease. 

Let's say your JavaScript project looks like this:

```
your-project/
    src/
        yourproject.js
    file1.js
    file2.html
    readme.md
```

Here's what you'll do to get up and running with tao.js: 

#### Step 1: drop the `tests/` folder into the root of your project

#### Step 2: Modify `tests/index.html` so that it calls your project file

The delivered `index.html` has placeholder text where your script needs to be. Replace `yourproject` with the name of your project file that is located in your `src/` folder--or, if you aren't using a `src/` folder, simply put the relative path to your file.
```
<!-- Library to be tested -->
<script src="../src/yourproject.js"></script>
```

#### Write your tests in `tests/test.js`

Tao.js tests are all contained in a single object and follow a specific paradigm:

`Given an <expectation> by a <function>, well, <inner expectation> because <inner function>.`

Here's the most basic type of test you can create: *given a single condition, assert an expectation*:

```js
[
	{
    	given: <string>,
        by: <function>,
        then: [
        	{ well: <string>, because: <function> }
        ]
    }
]
```

| element | description |
|:------------  |:-----------------|
| given         | A string that defines the test group |
| by            | A function used to setup the test group variables. | 
| then          | The holder of all tests inside this test group.    |
| - well        | A string that defines a test in a test group.      |
| - because     | A function that must return either true or false. True means the test passes. | 

Each tests has exactly one `given`, `by`, and `then`, and each `then` can have up to 64,297,383 tests. Please don't have that many tests.

As a more detailed example, here's what the tests object would look like for three tests, where the first test has one part, the second tests has two parts, and the third tests has three parts: 

```js
[
	{
    	given: <string>,
        by: <function>,
        then: [
        	{ well: <string>, because: <function> }
        ]
    },
    {
    	given: <string>,
        by: <function>,
        then: [
        	{ well: <string>, because: <function> },
            { well: <string>, because: <function> }
        ]
    },
    {
    	given: <string>,
        by: <function>,
        then: [
        	{ well: <string>, because: <function> },
            { well: <string>, because: <function> },
            { well: <string>, because: <function> }
        ]
    },
```
            
Finally, here's a *"Hello, World!"* equivalent of the tao.js tests object:

```js
// tests/tests.js

// Test scaffolding variables
var frameworkChosen = ""

// Tests
var tests = [
	{
    	given: 'a simple framework is chosen',
        by: function() { 
        	frameworkChosen = "tao"
        },
        then: [
        	{
            	well: 'the framework chosen should be "tao"',
                because: function() {
                	return (frameworkChosen == "tao" ? true : false)
                }
            }
         ]
    }
]

// Run the tests
tao(tests)
```

If you spin up a web server (ex: `localhost:8080`) at your project root with the above `tests.js` file, your browser will show the following page when you navigate to `localhost:8080/tests/`:

![Example Tao.js Output](test-example.png)

## Example Projects

A good example of tao.js in the wild is [campfire.js](https://www.github.com/lawsonry/campfirejs). Check out the `tests/` folder there.

## Contributing 

Please feel free to help improve tao.js. Just keep in mind that the project is supposed to 1) be minimal, 2) get the job done as effortlessly as possible, and 3) be fun.