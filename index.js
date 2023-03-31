console.log('Hello')                           // window.alert('Wassup')
console.log(123)
console.log(true)
let ela = 15
let elb = 25
let elc = 1
let eld = 1
elc = ela * elb
eld = (elc * (elc - (elb + ela)) - ela - elb) % ela
document.getElementById('para1').innerHTML = 'Element A is ' + ela
document.getElementById('para2').innerHTML = 'Element B is ' + elb
document.getElementById('para3').innerHTML = 'Multiplying them gives us ' + elc
document.getElementById('para4').innerHTML = 'Element D is ' + eld
/* username = window.prompt("What's your name?")
   console.log(username)                          */

let userage
document.getElementById('myButton').onclick = function(){
  userage = document.getElementById('myAge').value
  console.log('You are ' + userage + ' years old')
}

let nickname
document.getElementById('mySubmit').onclick = function(){
  nickname = document.getElementById('myText').value
  console.log(nickname)
  document.getElementById('para5').innerHTML = "Welcome " + nickname
}

/*let side1 = window.prompt('The first side of the triangle is:')
side1 = Number(side1)
let side2 = window.prompt('The second side of the triangle is:')                     // EASY
side2 = Number(side2)
let hyp
side1 = Math.pow(side1, 2)
side2 = Math.pow(side2, 2)
hyp = Math.sqrt(side1 + side2)
console.log('The resulting hypothenuse is ' + hyp + 'cm long') */

let side1 
let side2
let hyp
document.getElementById('myCalculator').onclick = function(){
    side1 = document.getElementById('side1').value
    side1 = Math.pow(side1, 2)
    side2 = document.getElementById('side2').value                                          // WE MAKE IT LOOK EASY
    side2 = Math.pow(side2, 2)
    hyp = Math.sqrt(side1 + side2)
    console.log('The resulting hypothenuse is ' + hyp + 'cm long')
    document.getElementById('para6').innerHTML = 'The resulting hypothenuse is ' + hyp + ' cm long'
}

let numb = 0
document.getElementById('submitNumb').onclick = function(){
  numb = document.getElementById('Numb').value
  document.getElementById('para7').innerHTML = numb
}
document.getElementById('resetButton').onclick = function(){
  numb = numb - numb
  document.getElementById('para7').innerHTML = numb
}
document.getElementById('downButton').onclick = function(){
  numb = numb - 1
  document.getElementById('para7').innerHTML = numb
}
document.getElementById('upButton').onclick = function(){
  numb = Number(numb)
  numb = numb + 1
  document.getElementById('para7').innerHTML = numb
}

/*myName = 'Ali Yamin'
yourName = 'Dobrosh Robert Andrei'
hisName = 'Ivanof David Stefan'
ourName = '              Ali Robert Stefan                 '
console.log(myName.length)
console.log(yourName.length)
console.log(hisName.length)
console.log(myName.charAt(8))
console.log(yourName.charAt(8))
console.log(hisName.charAt(8))
console.log(myName.indexOf('i'))
console.log(yourName.indexOf('o'))
console.log(hisName.indexOf('a'))
console.log(myName.lastIndexOf('i'))
console.log(yourName.lastIndexOf('o'))
console.log(hisName.lastIndexOf('a'))
console.log(myName.replaceAll('i','e'))
console.log(yourName.replaceAll('o','a'))
console.log(hisName.replaceAll('f','v'))
console.log(myName.toLowerCase())
console.log(yourName.toUpperCase())
console.log(hisName.toUpperCase())
console.log(ourName.trim()) */

document.getElementById('randomBtn').onclick = function(){
  numba = Math.ceil(Math.random() * 100)
  document.getElementById('randomNumba').innerHTML = numba
  console.log(numba)
}

document.getElementById('submitGamer').onclick = function(){
    const aTrait = document.getElementById('checkAngerIssues')
    const rTrait = document.getElementById('checkRasist')
    const hTrait = document.getElementById('checkHomophobic')
    if(aTrait.checked & rTrait.checked & hTrait.checked){
    document.getElementById('para8').innerHTML = 'You are a Gamer'
    }
    else if(aTrait.checked == false & rTrait.checked == false & hTrait.checked == false){
    document.getElementById('para8').innerHTML = 'You are NOT a Gamer'
    }
    else{
    document.getElementById('para8').innerHTML = 'You are part a Gamer'
    }
}


let age
document.getElementById('submitAge').onclick = function(){
  age = document.getElementById('Age').value
  switch(true){
case age >= 130:
  document.getElementById('labelAge').innerHTML = "You're " + age + " years old" + ". You're dead"
   console.log('Youre dead')
   break
case age >= 100:
  document.getElementById('labelAge').innerHTML = "You're " + age + " years old" + ". You're a century old"
   console.log('Youre a century old')
   break
case age >= 80:
  document.getElementById('labelAge').innerHTML = "You're " + age + " years old" + ". You're very old"
  console.log('Youre very old')
  break
case age >= 60:
  document.getElementById('labelAge').innerHTML = "You're " + age + " years old" + ". You're old"
  console.log('Youre old')
  break
case age >= 40:
  document.getElementById('labelAge').innerHTML = "You're " + age + " years old" + ". You're middle aged"
  console.log('Youre middle aged')
  break
case age >= 18:
  document.getElementById('labelAge').innerHTML = "You're " + age + " years old" + ". You're an adult"
  console.log('Youre an adult')
  break
case age >= 1:
  document.getElementById('labelAge').innerHTML = "You're " + age + " years old" + ". You're a child"
  console.log('Youre a child')
  break
default:
    document.getElementById('labelAge').innerHTML = "You're " + age + " years old" + ". You're not born yet"
  console.log('Youre not born yet')
}
}



