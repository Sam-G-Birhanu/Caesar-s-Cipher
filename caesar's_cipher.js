function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let arr = alphabet.split("");
  let newWord = []
  let myRegex = /[^A-Za-z]/gi
  let words = str.toUpperCase().split(" ")
  
  for(let i=0; i<words.length;i++){
    let x = words[i]
    console.log(x);
    let single = []
      for(let j=0; j<x.length;j++){
console.log(x[j])
if(myRegex.test(x[j])){
  single.push(x[j])

  continue;
}
let index = alphabet.indexOf(x[j])
if(index >= 13){
var indexA = index - 13}
else{
  indexA = index + 13
}
console.log(alphabet[indexA])
single.push(alphabet[indexA])
console.log(single)

  }
  console.log(single)
  newWord.push(single.join(""))}
// console.log(single)
console.log(newWord.join(" "))
  return newWord.join(" ");
}

// rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!")
