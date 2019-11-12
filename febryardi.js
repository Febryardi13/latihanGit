// const vowelkonsonat = (kata) =>{
//     var abjat = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     var output = 0
//     for(i=0;i<kata.length;i++){
//         if(kata[i] == 'a' || kata[i] == 'i' || kata[i] == 'u' ||kata[i] == 'e' ||kata[i] == 'o'){
//             output++
//         }
//         else{
//             var urutan = abjat.indexOf(kata[i])+1
//             output+=urutan
//         }
//     }
//     return output
// }
// console.log(vowelkonsonat('bb'))
// //untuk menjumlahkan urutan dari string yang diinput sesuai nomor urut


// ============================================== HOME WORK DAY 16 =========================================================

//1. getMiddle Char
function getMiddle(str) {
    var position
    var length

    if(str.length % 2 == 1) {
        position = str.length / 2;
        length = 1
    } else {
        position = str.length / 2 - 1;
        length = 2
    }

    return str.substring(position, position + length)
}

// console.log(getMiddle("test"))
// console.log(getMiddle("testing"))
// console.log(getMiddle("middle"))
// console.log(getMiddle("A"))


//2. Plat ganjil genap
const ganjilGenap =(a,b) =>{
    var sub = a.substring(a.lastIndexOf(" ")[0],a.lastIndexOf(" "))
    var output = parseInt(sub.substr(2,sub.length))
    var statusa =output%2
    var statusb =b%2
    // console.log(statusa)
    // console.log(statusb)

    if(statusa !==0 && statusb!==0){
        return 'Boleh lewat'
    }else if(statusa == 0 && statusb == 0){
        return 'Boleh Lewat'
    }else{
        return 'Tidak boleh lewat'
    }
}
// console.log(ganjilGenap('b 8 ar',28))
// console.log(ganjilGenap('b 778466 ar',22))

//3. getDomain
function getDomain (input){
    // var output = input.replace(/[^\w\w\s]/gi,'')//menghilangkan spesial karakter
    var get1 = input.split('wwww.').pop().split('.')[0]
    var cek = get1.includes('//')
    
    if(cek){
        return get1.split('//')[1]
    }else{
        return get1
    }
}
// console.log(getDomain('https://github.com/carbonfive/raygun'))
// console.log(getDomain('https://wwww.cnet.com'))
// console.log(getDomain('https://wwww.zombie-bites.com'))

//4. Harga setelah diskon
const diskonFungsi = (hargaAsli,diskon)=>{
    return hargaAsli-(hargaAsli*(diskon/100))
    
}
console.log(diskonFungsi(50000,10))