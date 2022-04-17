(() => {
    let isNew : boolean;

    let randomNumber : number = Math.random();

    console.log ("Item quality: ", randomNumber);
    
    isNew = randomNumber > 0.1 ? false : true;

    console.log("This is the quality of the item: ", isNew)
}
)();