

const myPromise = new Promise((resolve, reject) => {
    console.log(new Date());
    setTimeout(resolve(10));
});

myPromise.then(console.log(num));

