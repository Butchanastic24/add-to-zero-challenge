// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

const addToZero = (array) => {
    let addsToZero = false
    for (let i = 0; i < array.length; i++){
        for (let j = (i + 1); j < array.length; j++){
            if ((array[i] + array[j]) == 0){
                addsToZero = true
                break
            }
        }
    }
    console.log(addsToZero)
}
addToZero(array)