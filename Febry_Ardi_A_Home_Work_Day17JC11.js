// const number = (array)=>{
//     return array.map((val,index)=>(index+1)+': '+val)    //buat merubah isi index pakai map
// }
// console.log(number(['a','b','c']))
// console.log(number([]))

// const kuadrat = (a) =>{
//     if(Math.sqrt(a)%1===0) return true
//     return false
// }
//console.log(kuadrat(9))

function countingValley (str){
    var arr = str.split('')
    //console.log(arr)
    var countU=0
    //var countF=0
    var countD=0
    for(i=0;i < arr.length; i++){
        if(arr[i].indexOf('U') !== -1){
           countU++
        }
        if(arr[i].indexOf('F') !== -1){
           countF=0
        }
        if(arr[i].indexOf('D') !== -1){
           countD--
        }
    }
    //return countU++
    return countD++
}
console.log(countingValley('UFFDDFDUDFUFUUFFDDUFFDDUFFDDUFFDDUDUDUDUDUUUUUUUUU'))
//console.log(countingValley('DFFFU'))
//console.log(countingValley('UFFFD'))



