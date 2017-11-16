'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let  result=[];
    for(let  i=0;i<collectionA.length;i++)
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
    for(let n=0;n<result.length;n++)
    {
        for(let m=0;m<objectB.value.length;m++)
        {
            if (result[n].key==objectB.value[m])
            {

                    result[n].count = result[n].count-parseInt(result[n].count/3);

            }
        }
    }
    return result;
}
