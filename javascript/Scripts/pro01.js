let arrNum = [1, 3, 5, 7, 9];
let index = 0;
if (Array.isArray(arrNum)) {
 while(index < arrNum.length) (
    console.log(arrNum[index]);
    index++;
)
} else {
    console.log("Não é um ARRAY");
}
console.log("Fim...");