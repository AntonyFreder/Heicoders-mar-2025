function getNumberPromise(){

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(10)
        },2000)

    })
    return myPromise

}

getNumberPromise().then((value)=>{
    console.log(value);
});

