(()=>{
    let productTitle = "my amazing product";
    productTitle = "my amazing product changed";

    console.log('product title ', productTitle);

    const description : string = 'this is the description of my product';

    console.log ('product description: ', description);

    let myProductPrice = 14005;
    let isNew = false;

    const summary = `
        title: ${productTitle}
        description: ${description}
        price: ${myProductPrice}
        isNew: ${isNew}
    `

    console.log(summary);
})();