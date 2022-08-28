var currentDay = moment().format("MMM Do, YYYY");
$("#currentDay").text(currentDay);

$(".saveBtn").on("click", function () {
    var dateInfo = $(".information")

    localStorage.setitem(dateInfo);
})