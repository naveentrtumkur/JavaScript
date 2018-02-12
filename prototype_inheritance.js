// Using prototype inheritance in Javascript.

'use strict';
function Animal(voice)
{
    this.voice = voice;
}
Animal.prototype.speak = function()
{
display(this.voice);
}

function cat(name,color)
{
    Animal.call(this, 'Meow');
    this.name = name;
    this.color = color;
}

cat.prototype = Object.create(Animal.prototype);
cat.prototype.constructor = cat
var fluffy = new cat('Fluffy', 'white')
display(fluffy._proto_._proto_);
