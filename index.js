const app = "I don't do much.";
var kittens =[
  'Milo',
  'Otis',
  'Garfield'
  ];
<<<<<<< HEAD
function destructivelyAppendKitten(name) {
  kittens.push(`${name}`);
}
function destructivelyPrependKitten(name) {
  kittens.unshift(`${name}`);
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop(`${name}`);
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift(`${name}`);
}
function appendKitten(name) {
  var moreKittens = [...kittens, `${name}`];
  
 return moreKittens;
}
function prependKitten (name) {
  var moreKittens = [`${name}`,...kittens];
  
  return moreKittens;
}
function removeLastKitten () {
  var lessKittens = kittens.slice(0, kittens.length - 1);
  
  return lessKittens;
}
function removeFirstKitten() {
  var lessKittens = kittens.slice(1);
  
  return lessKittens;
}
=======
  
>>>>>>> 2fd7aa1030b68e9e2b52cf8cfb96e35b2745d073
