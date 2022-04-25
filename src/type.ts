(()=>{
    type UserId = string | boolean | number;

    let userId : UserId;

    function greeting (userId: UserId){
        if (typeof(userId) === 'string'){
            console.log("Hola ", userId.toLowerCase());
        }
    }

    type ShirtSizes = 'S' | 'M' | 'L' | 'XL';

    let shirt : ShirtSizes;

    shirt = 'XL';

    greeting(shirt);
})();