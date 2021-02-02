window.onbeforeunload = confirmExit;
function confirmExit()
{
    if(document.getElementById("comentario").value != ""){
        return "Deseja realmente sair desta página?";
    }
}