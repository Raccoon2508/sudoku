module.exports = function solveSudoku(matrix){

 
  
  let counter;
  let resultArr=matrix;
  
   Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
  };  
  Array.prototype.analog = function(a) {
    return this.filter(function(i) {return a.indexOf(i) >= 0;});
  };
  
  
 //do{
  counter=0;
  
  
  
  let squareArray=[[],[],[],[],[],[],[],[],[]];//массив квадратиков
  let squareArrayZeros=[[],[],[],[],[],[],[],[],[]];//массив нулей квадратиков
  let rowArray=[[],[],[],[],[],[],[],[],[]];//массив строк
  let rowArrayZeros=[[],[],[],[],[],[],[],[],[]];//массив нулей строк
  let columnArray=[[],[],[],[],[],[],[],[],[]];//массив столбцов
  let columnArrayZeros=[[],[],[],[],[],[],[],[],[]];//массив нулей в колонках
  let etalonArray=[1,2,3,4,5,6,7,8,9];//эталонный массив
  
  function count(a,i){ //счетчик количества значений в массиве
   var result = 0;
   for(var o in a)
    if(a[o] == i)
     result++;
   
   return result;
  }  
  
  function fillZeros(arr){
    for(let i=0; i<9; i++){
    for(let j=0; j<9; j++){
      
      arr[j].push(0);
      
     
  }
  }
    
}
  
 
   
  fillZeros(squareArray);
  fillZeros(rowArray);
  fillZeros(columnArray);
  fillZeros(rowArrayZeros);
  fillZeros(columnArrayZeros);
  
  
  
  //i- ряд, j-столбец
  for(let i=0; i<9; i++){ 
    for(let j=0; j<9; j++){
      
      squareArray[squareNumber(i,j)][(resultArr[i][j])-1]=resultArr[i][j];
      
     
  }
  }
  
 
  
  for(let i=0; i<9; i++){//предполагаемые нули для квадратов, Работает ОК!
    for(let j=0; j<9; j++){
      if(squareArray[i][j]==0){
        
        squareArrayZeros[i].push(j+1);
      }
    }
  }
        
  
        
  
  
  
  for(let i=0; i<9; i++){     //массив строк
    for(let j=0; j<9; j++){
      rowArray[i][j]=resultArr[i][j];}
  }  
  
  for(let i=0; i<9; i++){
   rowArrayZeros[i]=etalonArray.diff(rowArray[i]); 
  } 
  
  
  
  
  //i-строка, j-столбец
  
   
  
  
  for(let i=0; i<9; i++){     //массив массив столбцов
    for(let j=0; j<9; j++){
     columnArray[j][i]=resultArr[i][j];
        
  }  
  }
  
  for(let i=0; i<9; i++){
    columnArrayZeros[i]=etalonArray.diff(columnArray[i]); 
    
    }  
  
  
  
  
 

  
 
 for(let i=0; i<9; i++){
    for(let j=0; j<9; j++){
      if(resultArr[i][j]==0){
            resultArr[i][j]=compareZeros(i,j);
            counter++;
            ;
            if(resultArr[i][j]===0){continue;}else{
              console.log(resultArr);
              solveSudoku(resultArr);
              
              }
             
          
        }
      } 
    }
  



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
  
  
  return rowZeros.analog(columnZeros).analog(squareZeros);
  
  
  function squareNumber(a,b){
  return Math.floor(b/3)+Math.floor(a/3)*3;
  } 
  
   
}


let result=solveSudoku(initial);

  
}
  
