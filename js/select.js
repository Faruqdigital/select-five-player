document.getElementById('messi').addEventListener('click', function(){
    const lionelMessiField = document.getElementById('lionel-messi');
    const currentName = lionelMessiField.innerText;

    const typeNameField = document.getElementById('messi-sucess');
    const typeName = typeNameField.innerText;

    if(typeName === currentName){
        const messiSucessMessage = typeNameField ;
        messiSucessMessage.style.display = 'block';
    }
})
