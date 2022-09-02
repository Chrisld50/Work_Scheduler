var currentDay = moment().format("MMM Do, YYYY"); //This is the code to set up the current day utilizing moment.
$("#currentDay").text(currentDay);

$(".saveBtn").on("click", function () {
    var textInfo = $(this).siblings(".description").val(); //the save button here saves the items on the textarea line to locastorage.
    var timeInfo = $(this).parent().attr("id");
    localStorage.setItem(timeInfo, textInfo);
    console.log(textInfo)

});

for (i = 9; i <= 17; i++) {  //here is where we get the stored items from the save button out of local storage. 
    let data 
    if (i < 12) {
         data = localStorage.getItem(i + "am")
         $("#" + i + "am").children().eq(1).append(data)
    }
     if (i === 12){
        data = localStorage.getItem(i + "pm")
        $("#" + i + "pm").children().eq(1).append(data)
    }
    if (i > 12) {   
        var key = i - 12
        var itemEl = JSON.stringify(key) + "pm"
        data = localStorage.getItem(itemEl)
        $("#" + key + "pm").children().eq(1).append(data)

    }
        
};

function trackTime(){  
    var currentHour = moment().hour(); // here is the beginning of the function to track the time, displaying military time in the variable of moment().hour() . 
    var timeBlockArray = $(".time-block");

    
   for (let x = 0; x < timeBlockArray.length; x++) {  //this code converts the standard time that I had used on the html to the military time above for the ids. below continues the code to convert it to military time. 
    const textareaEl = timeBlockArray[x].children[1];
    var currentBlockTime = timeBlockArray[x].getAttribute("id")


    var standardTime = parseInt(currentBlockTime.replace(/\D/g, '' )) 
        if (standardTime < 9) {
            standardTime += 12
       }
       if (standardTime < currentHour){ //here is the code to change the colors of the columns depending on the time of day. 
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