var test = require('tape');
var format = require('./index')

test('it should format strings with different attributes of an object', function (t) {
    let string = 'Hello {name}, happy {age} bday!'
    let object = {name: 'Bob', age: 32}

    let result = format(string, object)

    t.equals(result, 'Hello Bob, happy 32 bday!');
    t.end();
});

test('it should format strings passing arrays', function (t) {
    let string = 'Hello {0}, happy {1} bday!'
    let array = ['Bob', 32]

    let result = format(string, array)

    t.equals(result, 'Hello Bob, happy 32 bday!');
    t.end();
});

test('it should format strings with nested attributes', function (t) {
    let string = 'Hello {bob.name}, happy {bob.age} bday! I call you at {bob.contact.phone}'
    let object = {
        bob: {
            name: 'Bob', 
            age: 32, 
            contact: {
                phone: '978090909'
            }
        }
    }

    let result = format(string, object)

    t.equals(result, 'Hello Bob, happy 32 bday! I call you at 978090909');
    t.end();
});