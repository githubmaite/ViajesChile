$(function() {

    //globo tooltip
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    $('.AlertaCorreo').click(function() {
        alert("Se envio correo");

    });


    //desplazamiento hacia otra sección, en este caso hacia el nav
    /*
        $("#idIrArriba").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1800, function() {
                    window.location.hash = hash;
                });
            }
        });
    */

    /*
        //globo popover en imágenes
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl)
        })
    */


    //forma 1
    /* $('.desaparecer').click(function() {
         $('#seccion-grilla img').toggle();
     });*/

    //forma 2
    /*
        $('.desaparecer').click(function() {
            // alert("aparece/desaparece");
            $('.miToggle').toggle();
        });
    */
    /*
    $('#cambioColor h5').on('dblclick', function() {
        $(this).css({
            "color": "red"
        });
    });
    */

})