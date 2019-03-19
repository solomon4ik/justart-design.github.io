$( document ).ready(function() {
    var allProject = [];
    var funnyUser = JSON.parse(localStorage.getItem("user"));
$("#greeting").text("  Привіт! "+ funnyUser.name + " " );
$("#storyBtn").on("click", function(){
    let project = {};
    project.name = $("#name").val();
    project.location =$("#location").val();
    project.area =$("#area").val();
    project.checker = $("input:checked").val(); //LO?попробувати через .this, аббо $(".storyBtn").on("click", function(){
    project.file = $("#inputGroupFile").val();
    allProject.push(project);
    let projectArray= JSON.stringify(allProject);
    localStorage.setItem("project", projectArray );
    updateItmes();
});
$("#gotoHomePage").on("click", function(){
    window.location.href = ("projectHome.html");
});
function updateItmes () {
    $("#cont").empty();
    let projectArray =JSON.parse( localStorage.getItem("project"));
    for(var i =0; i<projectArray.length;i++){
        $("#cont").append("<div class=\"col-10\">\n" +
        "<p>"+projectArray[i].name+"</p>"+
        "</div>");
    }

}
});