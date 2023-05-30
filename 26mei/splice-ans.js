function splice(data, add, start, del) {
    
    let result = [];
    if (data === undefined){
        return result;
    }
    if ( !Array.isArray(data)){
        return result;
    }

    for (let i = 0; i < data.length; i++) {
        let isiData = data[i];
        if (i === start) {
            result.push(add)
        }
        result.push(isiData);
    }
    let result2 = [];
    for (let j = 0; j < result.length - del; j++) {
        let hapus = result[j];
        result2.push(hapus);
    }



    return result2;
}




console.log(splice())
