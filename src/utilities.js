export default function createArray(lengthOfArray) {
    let array =  [];
    for(var i = 0; i < Number(lengthOfArray); i++){
        array.push(i);
    }
    return array;  
  }