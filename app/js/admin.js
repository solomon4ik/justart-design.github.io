//LOG IN
$(document).ready(function(){
    var myUser = {};
    myUser.name = "Andrii";
    myUser.surname = "Vivchar";
    myUser.username = "andrii_vivchar";
    myUser.password = "vivchar00";
        $("#submitter").on("click", function () {
            let user = JSON.stringify(myUser);
            localStorage.setItem("user", user);
            let userN = $("#exampleInputEmail1").val();
            let pasw = $("#exampleInputPassword1").val();
            if (userN === myUser.username && pasw === myUser.password) {
                window.location.replace("adminPanel.html");
            }
        });
});
//////




$( document ).ready(function() {
    var allProject = [];
    var funnyUser = JSON.parse(localStorage.getItem("user"));
$("#greeting").text("  Привіт! "+ funnyUser.name + " " );
$("#storyBtn").on("click", function(){
    let project = {};
    project.name = $("#name").val();
    project.location =$("#location").val();
    project.area =$("#area").val();
    project.checker = $("input:checked").val()
    project.file = $("#inputGroupFile02").val();
    allProject.push(project);
    let projectArray= JSON.stringify(allProject);
    localStorage.setItem("project", projectArray );
    updateItmes();
});
$("#gotoHomePage").on("click", function(){
    window.location.replace("projectHome.html");
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
