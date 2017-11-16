'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    let result=[];
    for(let i=0;i<collectionA.length;i++)
    {
        for(let a=0;a<collectionB[0].length;a++)
        {
            if(collectionA[i]==collectionB[0][a])
            {
                result.push(collectionA[i]);
            }
        }
    }
    return result;
}
