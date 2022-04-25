(()=>{
    type ShirtSizes = 'S' | 'M' | 'L' | 'XL';

    function createProduct (
        title : string,
        price : number,
        size : ShirtSizes
    ){
        return {
            title,
            price,
            size
        }
    }

    console.log("Product: ", createProduct('hat', 300, 'L' ) );

    let createProductV2 = ( 
        title : string,
        price : number,
        size : ShirtSizes
    ) => (
            {
                title,
                price,
                size
            }
    )
    console.log("Product 2: ", createProductV2('hat', 300, 'L' ) );

    let createProductV3 = () => (createProductV2("shoe", 200, 'S'));

    console.log('Product 3: ', createProductV3());
})();