"use strict"

/**
 * I'm not sure that I understood this task properly
 * and I think there could be a typo in it
 * so I just wrote how I think works bind function.
 *
 * Also I used console.log instead of alert.
 */

const func1 = function(message) {
    console.log(message);
}

const func2 = func1.bind('Context');
func2('Test'); // alert 'Test'

function myBind(func, context) {
    return function() {
        return func.apply(context, arguments);
    };
}

const func3 = myBind(func1, 'Context');
func3('Test'); // alert 'Test'
