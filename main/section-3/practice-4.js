'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let  result=[];
  for(let i=0;i<collectionA.length-1;i++)
  {
    let count=0;
    for(let j=i;j<collectionA.length;j++)
    {
      if(collectionA[i]==collectionA[j])
      {
        count++;
      }
    }
    result.push({key:collectionA[i],count});
    i=i+count-1;
  }
    var length=collectionA.length;
    var cou=parseInt(collectionA[length-1].charAt(2));
  if(collectionA[length-1])
  {
    result.push({key:collectionA[length-1].charAt(0),count:cou})
  }
  for(let i=0;i<result.length;i++)
  {
      for(let j=0;j<objectB.value.length;j++)
      {
          if (result[i].key == objectB.value[j])
          {

              result[i].count = result[i].count-parseInt(result[i].count/3);

          }
      }
  }
  return result;
}
