$(function(){
    let indice = -1;
    let data = localStorage.getItem("data");
    data = JSON.parse(data);
    if(data == null)
        data = [];
});

function add(){
    let toSave = JSON.stringify({
        Comp    : $("#txtComp").val()
    });

    data.push(toSave);
    localStorage.setItem("data", JSON.stringify(data));
    alert("Comp adicionada.");
    return true;
}

function remove(){
    data.splice(indice, 1);
	localStorage.setItem("data", JSON.stringify(data));
	alert("Comp excluída.");
}

function Listar(){
    $("#tblLiWistar tbody").append("</tr>");
}

$("#generate").on("click",function(){
    console.log("add")
	return Adicionar();
});