$( document ).ready(function() {
    $(".portfolio-section").empty();
    let projectArray =JSON.parse( localStorage.getItem("project"));
    for(var i =0; i<projectArray.length;i++){
        $(".portfolio-section").append("<div class=\"mix "+projectArray[i].checker+" portfolio-item grid\" style=\"background-image: url(img/8.jpg);\">\n" +

            "  <span> "+projectArray[i].name+" </span>\n" +
            " <br>\n" +
            "  <i class=\"fa fa-arrows-alt\"> "+projectArray[i].location+" </i>\n" +
            " <br>\n" +
            "  <i class=\"fa fa-home\"> "+ projectArray[i].area+" м<sup>2</sup> </i>\n" +
            "</div>");
        
        
    }
});
