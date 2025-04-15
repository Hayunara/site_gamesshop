$(document).ready(function() {
    $(".btn-menu").click(function() {
        $(".menu").slideToggle();
    });

    $("#telefone").mask("(00) 00000-0000");

    $("form").validate ({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            mensagem:{
                required: true
            }
        },
        messages:{
            nome: `<span > Por favor, insira seu nome </span> `,
            email: `<span > E-mail invalido </span> `,
            menssagem: `<span > Por favor, insira sua mensagem </span> `,
        },
    })
})