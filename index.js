// Display today's day and date
$('#currentDay').text(moment().format('dddd, MMMM Do'));



$(document).ready(function() {

    var textAreas = $('textarea')
    var hour = moment().hour();
    
    for (var i = 0; i < textAreas.length; i++)  {
        var currentTextArea = textAreas[i]
        var currentId = parseInt(currentTextArea.id)
        // If hour is less than Hour represented
        if(hour < currentId) {
            $(currentTextArea).addClass("future");
        }
        else if (hour > currentId) {
            $(currentTextArea).addClass("past");
        }
        else {
            $(currentTextArea).addClass("present");
        }
    }
})
           

            

            



        
  
    
