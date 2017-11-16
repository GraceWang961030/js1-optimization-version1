'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    let result=[];

    for(var i=0;i<collectionA.length;i++)
    {
        for(var a=0;a<collectionB.length;a++){
            if(collectionA[i]==collectionB[a]){
                result.push(collectionA[i]);
            }
        }
    }
    return result;
}
