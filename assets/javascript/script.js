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

function trackTime(){
    var currentHour = moment().hour(); //military time 
    var timeBlockArray = $(".time-block");

    
   for (let x = 0; x < timeBlockArray.length; x++) {
    const textareaEl = timeBlockArray[x].children[1];
    var currentBlockTime = timeBlockArray[x].getAttribute("id")


    var standardTime = parseInt(currentBlockTime.replace(/\D/g, '' ))
        if (standardTime < 9) {
            standardTime += 12
       }
       if (standardTime < currentHour){
        textareaEl.classList.add("past");
       }
       if (standardTime === currentHour){
        textareaEl.classList.add("present");
       }
       if (standardTime > currentHour){
        textareaEl.classList.add("future");
       }
   }
}
trackTime();