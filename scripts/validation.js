$(document).ready(function () {
    $("#ListServForm").on("submit", function(){
        var formValid = true;

        if( $("#name").prop("validity").valid){
            $("#nameError").addClass("hidden");
        }   else{
            $("#nameError").removeClass("hidden");
            formValid = false;
        };

        if( $("#email").prop("validity").valid){
            $("#emailError").addClass("hidden");
        }   else{
            $("#emailError").removeClass("hidden");
            formValid = false;
        };

        if( $("#interest").prop("validity").valid){
            $("#interestError").addClass("hidden");
        }   else{
            $("#interestError").removeClass("hidden");
            formValid = false;
        };

        return formValid;
    });
});
