$(document).ready(function(){
    $('select').material_select();

    $('.modal').modal();

    $('.addCompany').on("click",function(){
        $('#addCompanyModal').modal('open');
    });

    $('.modal-close').on("click",function(){
        $('#modal1').modal('close');
    });

    $('.updateCompany').on("click",function(){
        $('#updateCompanyModal').modal('open');
    });
});