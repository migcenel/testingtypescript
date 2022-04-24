(()=>{
    let myVar : any;
    myVar = "Hola";

    const result = (myVar as string).toLowerCase();

    console.log(result);
})();