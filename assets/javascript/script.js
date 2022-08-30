var currentDay = moment().format("MMM Do, YYYY");
$("#currentDay").text(currentDay);

$(".saveBtn").on("click", function () {
    var textInfo = $(this).siblings(".description").val();
    var timeInfo = $(this).parent().attr("id");
    localStorage.setItem(timeInfo, textInfo);
    console.log(textInfo)

});

for (i = 9; i <= 17; i++) {
    let data
    if (i < 12) {
         data = localStorage.getItem(i + "am")
         $("#" + i + "am").children().eq(1).append(data)
    } else if (i === 12){
        data = localStorage.getItem(i + "pm")
        $("#" + i + "pm").children().eq(1).append(data)
    }
    else {
         data = localStorage.getItem((i - 12) + "pm")
         $("#" + i + "pm").children().eq(1).append(data)
    }
        
};

