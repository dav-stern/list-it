"use strict";
const eaw = require('eastasianwidth');

function DataCell() {
    this.data = "";
}

module.exports = DataCell;

DataCell.prototype.getData = function() {
    return this.data;
};

DataCell.prototype.setData = function(data) {
    this.data = data;
};

DataCell.prototype.visibleLength = function() {
    if(typeof(this.data) != "string") {
        return ("" + this.data).length;
    }
    return DataCell.visibleLength(this.data);
};

DataCell.visibleLength = function(data) {
    // Remove escape sequences for text style from the string
    const s = data.replace(/\x1b[^m]*m/g, '');
    return eaw.length(s);
};
