module.exports = function solveSudoku(matrix){
  
Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
  };  
  Array.prototype.analog = function(a) {
    return this.filter(function(i) {return a.indexOf(i) >= 0;});
  };   



let potentZeros=[];
console.log(zeroCell(matrix))

if(zeroCell(matrix)){
let zeroRow=zeroCell(matrix)[0];
console.log(zeroCell(matrix)[0])
console.log(zeroCell(matrix)[1])

let zeroCol=zeroCell(matrix)[1];
potentZeros=potencialValues(zeroRow,zeroCol,matrix);
console.log(potentZeros);
}else{
return matrix;}
  if(potentZeros.length>0){
    for(let i=0; i<potentZeros.length; i++){
      potentZeros[i];
      solveSudoku(matrix);
      }
     }
     
     
console.log(matrix);     

function potencialValues(row,col,arr){
    let rowZeros=[];
    let etalonArray=[1,2,3,4,5,6,7,8,9];
    let columnArr=[];
    let columnZeros=[];
    let square=[];
    let squareZeros=[];
    
    rowZeros=etalonArray.diff(arr[row]);
    console.log(rowZeros)
    
    for(let i=0; i<9; i++){     //массив массив столбцов
    {
     columnArr[i]=arr[i][col];
    }  
  }
  
  columnZeros=etalonArray.diff(columnArr);
  console.log(columnZeros);
  
  for(let i=0; i<9; i++){ 
    for(let j=0; j<9; j++){
      if(squareNumber(row,col)==squareNumber(i,j))
    square.push(arr[i][j]);
  }
  }
  
  squareZeros=etalonArray.diff(square);
  console.log(squareZeros);
  
  function squareNumber(a,b){
  return Math.floor(b/3)+Math.floor(a/3)*3;
  }
  
  
  
  return rowZeros.analog(columnZeros).analog(squareZeros);
  
  
}  
  
  
  function zeroCell(arr){
  for(let i=0; i<9; i++){ 
    for(let j=0; j<9; j++){
      if(arr[i][j]==0){return [i,j];}
    }
  }
}
  
 
   
}
