function generateNumber() {
    
    const min = Math.ceil(document.querySelector("#between").value);
    const max = Math.floor(document.querySelector("#and").value);

    if(min >= max){
        alert("O valor minimo TEM que ser menor que o valor maximo")
    }
    else{
        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        alert(result);
    }

}
