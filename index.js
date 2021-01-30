// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver (snax) {
    drivers.push(snax);
  }
function destructivelyPrependDriver (gem) {
    drivers.unshift(gem);
}
function destructivelyRemoveLastDriver () {
    drivers.pop();
}
function destructivelyRemoveFirstDriver () {
    drivers.shift();
}
function appendDriver (gimme) {
return [...drivers, gimme];
}
function prependDriver (smash) {
return [smash, ...drivers];
}
function removeFirstDriver () {
    return drivers.slice(1);
}
function removeLastDriver() {
return drivers.slice(0, drivers.length - 1);
}