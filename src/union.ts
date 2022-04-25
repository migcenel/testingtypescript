(()=>{
    let myUnionVar : string | boolean;

    myUnionVar = "hola";
    myUnionVar = false;

    function greeting (text:string | number){
        if (typeof(text) === 'string'){
            console.log("Hola ", text.toLowerCase());
        }
        else{
            console.log("Hola ", text.toFixed(2));
        }
    }

    greeting ("Darling");
    greeting (235443);
})();