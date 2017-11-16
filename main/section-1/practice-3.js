'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    let result=[]
    for(let i=0;i<collectionA.length;i++)
    {
        for(let a=0;a<objectB.value.length;a++)
        {
            if(collectionA[i]==objectB.value[a])
            {
                result.push(collectionA[i]);
            }
        }
    }
    return result;
}
