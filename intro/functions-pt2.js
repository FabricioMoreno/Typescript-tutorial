"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
addTwo(345);
var loginUser = function (name, email) {
    console.log("login");
};
loginUser("fabricio", "exameple@email.con");
var names = ["fabricio", "maria", "luis"];
names.map(function (name) {
    return "Name: ".concat(name);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
