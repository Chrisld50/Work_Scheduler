var currentDay = moment().format("MMM Do, YYYY");
$("#currentDay").text(currentDay);

$(".saveBtn").on("click", function () {
    var textInfo = $(".textInfo");
    var timeInfo = $(this).parent().attr("id");
    localStorage.setItem("timeInfo", JSON.stringify(timeInfo));
    localStorage.setItem("textInfo", JSON.stringify(textInfo));



    


})

