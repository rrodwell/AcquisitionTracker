$(document).ready(function(){
    $('select').material_select();

    $('.modal').modal();

    $(document).on("click",".addCompany",function(){
        $('#addCompanyModal').modal('open');
    });

    $('.close-modal').on("click",function(){
        $('.modal').modal('close');
    });

    $(document).on("click",".updateCompany",function(){
         $('#updateCompanyModal').modal('open');
    });

});