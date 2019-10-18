module.exports = function solveSudoku(matrix){
  

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
      matrix[zeroRow][zeroCol]=0;
     }   
   
}


function zeroCell(arr){
  for(let i=0; i<9; i++){ 
    for(let j=0; j<9; j++){
      if(arr[i][j]==0){return [i,j];}
    }
  }
  return false;
}


function potencialValues(row,col,arr){
  
function analog(a,b){
    let result=[];
    for(let item of a){
      if(b.indexOf(item)>=0){result.push(item);}
    }
    return result;
  }  

function diff(a,b){
    let result=[];
    for(let item of a){
      if(b.indexOf(item)<0){result.push(item);}
    }
    return result;
  }  




    let rowZeros=[];
    let etalonArray=[1,2,3,4,5,6,7,8,9];//эталонный массив
    let columnArr=[];
    let columnZeros=[];
    let square=[];
    let squareZeros=[];
    
    rowZeros=diff(etalonArray,arr[row]);//массив нулей рядов, проверен
   
    for(let i=0; i<9; i++){    
     columnArr[i]=arr[i][col];
    }
  columnZeros=diff(etalonArray,columnArr); //массив нулей столбцов, 
  

    
  for(let i=0; i<9; i++){ 
    for(let j=0; j<9; j++){
      if(squareNumber(row,col)==squareNumber(i,j)){square.push(arr[i][j]);}
  }}
  squareZeros=diff(etalonArray,square); //массив нулей квадратов
 
  function squareNumber(a,b){return Math.floor(b/3)+Math.floor(a/3)*3;} //номер квадрата, проверен
  
  return analog(squareZeros,analog(columnZeros,rowZeros));//поиск совпадений в массиве нулей рядов, столбцов и квадратов, проверен
}

