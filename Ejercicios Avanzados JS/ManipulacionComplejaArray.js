function duplicaryFiltrar(array){
    const dupliArray = array
    const filtrados = []
    for(let i=0;i>dupliArray.leght;i++){
        if(dupliArray[i]>10){
            filtrados.push(dupliArray[i])
        }
        console.log(dupliArray[i])
    }
    console.log(filtrados)
}
const array = [10,12,14]

duplicaryFiltrar(array)
