module.exports = function solveSudoku(matrix){

  let squareArray=[[],[],[],[],[],[],[],[],[]];//массив квадратиков
  let squareArrayZeros=[[],[],[],[],[],[],[],[],[]];//массив нулей квадратиков
  let rowArray=[[],[],[],[],[],[],[],[],[]];//массив строк
  let rowArrayZeros=[[],[],[],[],[],[],[],[],[]];//массив нулей строк
  let columnArray=[[],[],[],[],[],[],[],[],[]];
  let columnArrayZeros=[[],[],[],[],[],[],[],[],[]];
  let etalonArray=[1,2,3,4,5,6,7,8,9];
  
  function count(a,i){
   var result = 0;
   for(var o in a)
    if(a[o] == i)
     result++;
   return result;
  }  
    
   
  
  
  //i- ряд, j-столбец
  for(let i=0; i<9; i++){
    for(let j=0; j<9; j++){
      
      squareArray[squareNumber(i,j)][([i][j])-1]=[i][j];
     
  }
  } 
  
  for(let i=0; i<9; i++){
    for(let j=0; j<9; j++){
      if(squareArray[i][j]==undefined){
        
        squareArrayZeros[i].push(j+1);
      }
    }
  }
        
        
        
  
  
  
  for(let i=0; i<9; i++){     //массив строк
    for(let j=0; j<9; j++){
      if([i][j]!==0){
      rowArray[i][([i][j])-1]=[i][j];}
      else{
       for(l=0; l<compareArrays(i,j).length; l++){
        rowArrayZeros[i].push(compareArrays(i,j)[l]); 
        } 
       
      }
    }
  }  
  
  
  
  for(let i=0; i<9; i++){     //массив массив столбцов
    for(let j=0; j<9; j++){
      if([i][j]!==0){
      columnArray[j][([i][j])-1]=[i][j];
      }else{
        
        for(l=0; l<compareArrays(i,j).length; l++){
        columnArrayZeros[j].push(compareArrays(i,j)[l]);
        }
      }
    }
  }  
  
  
  
  
  
  for(let i=0; i<9; i++){
    for(let j=0; j<9; j++){
      if([i][j]==0){
            if(compareArrays(i,j).length==1){
            [i][j]=compareArrays(i,j)[0]; 
            
            }else{
            [i][j]=compareZeros(i,j);
              
            
          }
        }
      } 
    }
  
  
  
  function compareZeros(i,j){
    variantsOfZerozFromZeroz=[];
    
    for(p=0; p<compareArrays(i,j).length; p++){
      if(compareArrays(i,j).length>1
      &&count(squareArrayZeros[i],compareArrays(i,j)[p])==1
      ||count(rowArrayZeros[i],compareArrays(i,j)[p])==1
      ||count(columnArrayZeros[j],compareArrays(i,j)[p])==1)
      {
        
        variantsOfZerozFromZeroz.push(compareArrays(i,j)[p]);   
        break;
        }
  if(variantsOfZerozFromZeroz=1){
    return variantsOfZerozFromZeroz; 
    }else{
  return variantsOfZerozFromZeroz.push(0);    
    }      
  } 
  }
  
  
  
    
    
  function compareArrays(i,j){
    let variantsOfZeroz=[];
    let variantsOfZerozFromZeros=[];
    for(p=0; p<9; p++){
      let etalon=etalonArray[p];
     
      if(squareArray[squareNumber(i,j)][p]!=etalon
      &&rowArray[i][p]!=etalon
      &&columnArray[j][p]!=etalon){
        variantsOfZeroz.push(etalonArray[p]);
        break;            
        }
      }
            
  return variantsOfZeroz;      
  } 
      
  
  function squareNumber(a,b){
    let index;
    index=Math.floor(b/3)+Math.floor(a/3)*3;
    return index;
    
  }  
  
  
}
  