'use strict';

module.exports = function countSameElements(collection) {
    let  result=[];
    for(let i=0;i<collection.length-1;i++)
    {
      let count=0;
      for(let j=i;j<collection.length;j++)
      {
        if(collection[i]==collection[j])
        {
          count++;
        }
      }
      result.push({key:collection[i],count});
      i=i+count-1;
    }
      var length=collection.length;
      var cou=parseInt(collection[length-1].charAt(2));
    if(collection[length-1])
    {
      result.push({key:collection[length-1].charAt(0),count:cou})
    }
    return result;
}
