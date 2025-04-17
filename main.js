$(document).ready(function() {
    // Toggle do menu principal
    $('.btn-menu button').click(function() {
        $('.menu').slideToggle();
    });

    // Toggle do submenu
    $('.submenu-toggle').click(function(e) {
        e.stopPropagation(); // Impede que o clique feche o menu principal
        var $submenu = $(this).next('.submenu');
        $submenu.slideToggle();
        // Atualiza aria-expanded para acessibilidade
        $(this).attr('aria-expanded', $submenu.is(':visible'));
        // Fecha outros submenus (se houver)
        $('.submenu').not($submenu).slideUp();
        $('.submenu-toggle').not(this).attr('aria-expanded', 'false');
    });

    // Impede que cliques no submenu fechem o menu principal
    $('.submenu').click(function(e) {
        e.stopPropagation();
    });

    // Máscara de telefone
    $("#telefone").mask("(00) 00000-0000");

    // Validação do formulário
    $("form").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: `<span> Por favor, insira seu nome </span>`,
            email: `<span> E-mail inválido </span>`,
            mensagem: `<span> Por favor, insira sua mensagem </span>`
        }
    });
});