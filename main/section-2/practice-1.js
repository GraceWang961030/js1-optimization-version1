'use strict';

module.exports = function countSameElements(collection) {
    let  result=[];
    for(let i=0;i<collection.length;i++)
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
    return result;
}
