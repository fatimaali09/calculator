console.log(7)


document.getElementById('sum').addEventListener('click' , ()=>{
    console.log('clicked')
    var a= document.getElementById('first').value
    var b= document.getElementById('second').value
    console.log(parseInt(a)+parseInt(b))
    document.getElementById('result').innerText=parseInt(a)+parseInt(b)
})

document.getElementById('minus').addEventListener('click' , ()=>{
    var a= document.getElementById('first').value
    var b= document.getElementById('second').value
    document.getElementById('result').innerText=parseInt(a)-parseInt(b)
})

document.getElementById('multi').addEventListener('click' , ()=>{
    var a= document.getElementById('first').value
    var b= document.getElementById('second').value
    document.getElementById('result').innerText=parseInt(a)*parseInt(b)
})

document.getElementById('divi').addEventListener('click' , ()=>{
    var a= document.getElementById('first').value
    var b= document.getElementById('second').value
    document.getElementById('result').innerText=parseInt(a)/parseInt(b)
})