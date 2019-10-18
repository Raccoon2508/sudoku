function solveSudoku(matrix){
  

let potentZeros=[];
let zeroRow;
let zeroCol;


if(zeroCell(matrix)){
zeroRow=zeroCell(matrix)[0];
zeroCol=zeroCell(matrix)[1];
potentZeros=potencialValues(zeroRow,zeroCol,matrix);

}else{return matrix;}
 
 
 if(potentZeros.length>0){
    for (let i=0;i<potentZeros.length; i++){
      matrix[zeroRow][zeroCol]=potentZeros[i];
      solveSudoku(matrix);
      if(!zeroCell(matrix)){return matrix;}
      }
    }   
  }
function potencialValues(row,col,arr){
  
  Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
  };  
  Array.prototype.analog = function(a) {
    return this.filter(function(i) {return a.indexOf(i) >= 0;});
  };   
    let rowZeros=[];
    let etalonArray=[1,2,3,4,5,6,7,8,9];//эталонный массив
    let columnArr=[];
    let columnZeros=[];
    let square=[];
    let squareZeros=[];
    
    rowZeros=etalonArray.diff(arr[row]);//массив нулей рядов, проверен
    
    for(let i=0; i<9; i++){    
     columnArr[i]=arr[i][col];
    }
  columnZeros=etalonArray.diff(columnArr); //массив нулей столбцов, проверен
    
  for(let i=0; i<9; i++){ 
    for(let j=0; j<9; j++){
      if(squareNumber(row,col)==squareNumber(i,j)){square.push(arr[i][j]);}
  }}
  squareZeros=etalonArray.diff(square); //массив нулей квадратов
 
  function squareNumber(a,b){return Math.floor(b/3)+Math.floor(a/3)*3;} //номер квадрата, проверен
  
  return rowZeros.analog(columnZeros).analog(squareZeros);//поиск совпадений в массиве нулей рядов, столбцов и квадратов, проверен
  function zeroCell(arr){//поиск нулевой ячейки
  for(let i=0; i<9; i++){ 
    for(let j=0; j<9; j++){
      if(arr[i][j]==0){return [i,j];}
    }
  }
  return false;
}
  
  
}    