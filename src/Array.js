'use strict';

Array.prototype.head = function() {
    if(!this.isEmpty()) {
        return this[0];
    }
};
Array.prototype.tail = function() {
    return this.slice(1);
};
Array.prototype.isEmpty = function() {
    return this.length === 0;
};
Array.prototype.contains = function(item) {
    return this.indexOf(item) !== -1;
};