$(document).ready(function(){
    $('select').material_select();

    $('.modal').modal();

    // $('.addCompany').on("click",function(){
    //     $('#addCompanyModal').modal('open');
    // });

    $('.close-modal').on("click",function(){
        $('.modal').modal('close');
    });

    $('.updateCompany').on("click",function(){
        $('#updateCompanyModal').modal('open');
    });

});