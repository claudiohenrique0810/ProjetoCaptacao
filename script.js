function isTipo(pVal) {
     var reTipo = /[A-z][ ][A-z]/; return reTipo.test(pVal); 
    }
function validarNome(nome){

    if ( nome != null && nome != ' '){
        if (!isTipo(nome)){
            return false;
        }
        else{
            return true;
        }
    }
    else{
        return false;
    }
}
function validarEmail(field) {
        usuario = field.value.substring(0, field.value.indexOf("@"));
        dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
        
        if ((usuario.length >=1) &&
            (dominio.length >=3) &&
            (usuario.search("@")==-1) &&
            (dominio.search("@")==-1) &&
            (usuario.search(" ")==-1) &&
            (dominio.search(" ")==-1) &&
            (dominio.search(".")!=-1) &&
            (dominio.indexOf(".") >=1)&&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
                return true;
        }
        else{

            return false;
        }
}   


function mostrarValidacao(){

    const form = document.getElementById("form-captacao");
    const modal = document.getElementById("modal")
    const input1 = document.getElementById("nome-dev");
    const input2 = document.getElementById("email-dev");
    var altura = window.screen.height;
    var largura = window.screen.width;
    
    if(validarNome(input1.value) == true && validarEmail(input2) == true){
        if(largura >= 700){
            modal.style.backgroundColor = "#7cf8ba";
            modal.style.width = "20%";
            modal.style.marginTop = "10px";
            modal.style.padding= "30px";
            form.style.display = "none";
            document.querySelector("#modal").innerHTML = `
            <p>
                Email Enviado com sucesso!
            </p>
             `
        }
        else{
            alert("Email Enviado com sucesso!")
        }
       
    }
    else{
        if(largura >= 700){
            modal.style.width = "20%";
            modal.style.marginTop = "10px";
            modal.style.padding= "30px";
            modal.style.backgroundColor = "#FA8072";
            document.querySelector("#modal").innerHTML = `
            <p>
                Digite seu nome completo sem acento e seu email corretamente!
            </p>
            `
        }
        else{
            alert("Digite seu nome completo sem acento e seu email corretamente!")
        }
        
    }

}
