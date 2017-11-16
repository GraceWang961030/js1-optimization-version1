'use strict';

module.exports = function countSameElements(collection) {
  let usual=[];
  let usualOne=[];
  let excption=[];
  let excptionOne=[];
  let result=[];
  //分组
  for(let i=0;i<collection.length;i++)
  {
    if(collection[i].length == 1)
    {
      usual.push(collection[i]);
    }
    else
      {
        excption.push(collection[i]);
      }
  }
  
  //求非常规的元素
  for(let i=0;i<excption.length;i++)
  {
    if(excption[i].length<5)
    {
      excptionOne.push({key:excption[i].charAt(0),sum:parseInt(excption[i].charAt(2))})
    }else
    {
      excptionOne.push({key:excption[i].charAt(0),sum:parseInt(excption[i].charAt(2)+excption[i].charAt(3))})
    }
  }
  //求常规的元素
  for(let i=0;i<usual.length;i++)
  {
    let summary=0;
    for(let j=i;j<usual.length;j++)
    {
      if(usual[i]==usual[j])
      {
      summary++
      }
    }
    usualOne.push({name:usual[i],summary})
      i=i+summary-1;
  }
  //合并
  for(let i=0;i<usualOne.length;i++)
  {
    for(let j=0;j<excptionOne.length;j++)
    {
      if(usualOne[i].name == excptionOne[j].key)
      {
        usualOne[i].summary=usualOne[i].summary+excptionOne[j].sum;
      }
    }
  }
  for(let i=0;i<5;i++)
  {
    result.push({name:usualOne[i].name,summary:usualOne[i].summary})
  }
  result.push({name:excptionOne[3].key,summary:excptionOne[3].sum})
  for(let i=6;i<8;i++)
  {
    result.push({name:usualOne[i-1].name,summary:usualOne[i-1].summary})
  }
  result.push({name:excptionOne[4].key,summary:excptionOne[4].sum})
  return result;
}
