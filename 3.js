"use strict"

/**
 * Here is console.log using instead of alert.
 */

const func1 = function(message) {
    this(message);
}

const func2 = func1.bind(console.log);
func2('Test'); // alert 'Test'

function myBind(func, context) {
    return function() {
        return func.apply(context, arguments);
    };
}

const func3 = myBind(func1, console.log);
func3('Test'); // alert 'Test'
