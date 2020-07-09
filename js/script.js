$(document).ready(function(){
    var $CPF = $("#jsCpf");
    $CPF.mask("000.000.000-00", {reverse: true});

    function chooseFile() {
        $("#fileInput").click();
     }

     var map;
            function initMap() {
            map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8
            });
            }
});

