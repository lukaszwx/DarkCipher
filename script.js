function cipher(mode) {
    const input = document.getElementById("inputText").value;
    const outputDiv = document.getElementById("output");

    if(!input){
        outputDiv.innerText = "ERRO: NENHUM DADO DETECTADO";
        return;
    }

    try{
        if(mode=== 'encode'){
            const encoded = btoa(input);
            outputDiv.innerText = encoded;
        } else{
            const decoded = atob(input);
            outputDiv.innerText = decoded;
        }
    } catch (error) {
        outputDiv.innerText = "ERRO: FALHA AO PROCESSAR OS DADOS";
    }
}