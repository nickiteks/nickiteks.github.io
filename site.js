function addNew(){
    const form = document.forms[0];


    form.addEventListener("submit", function(event) {

     event.preventDefault();
         var data = new FormData(form);
         var str = 'Новость добаленна';
         var doRedirect = true;
         var icon = "success";

        if (data.get('name') == '') 
        {           
            str ='Заполните название новости';
            icon = "error";
            doRedirect = false;
        }
        if (data.get('descriptionShort') == '') 
        {       
            str ='Добавте краткое содержание новости';
            icon = "error";
            doRedirect = false;
        }
        if(data.get('descriptionLong')== '')
        {
            str ='Добавте содержание новости';
            icon = "error";
            doRedirect = false;
        }

        Swal.fire({
            text: str,
            icon: icon,
            showConfirmButton: false
        });

        if (doRedirect) {
            setTimeout(function () {
                
                window.location.href = "addNews.html";
            }, 1800); 
        }       
    });

    form.addEventListener("formdata", event => {
        console.log(event.formData);
    });
}