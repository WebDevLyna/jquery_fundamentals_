// SOLUTIONS GO BELOW EACH EXERCISE

// STEP 0: Document Needs to be ready first!
// Ensure that all the code you'll write below only execute when the document is ready
// Hint: you can use .ready on the document object

$( document ).ready(function() {
  console.log( "ready!" );
});




// STEP 1: Change Background

// Change the background color of '#step-1' by script.
// Hint: you can use .css

$( document ).ready(function() {
  $( "#step-1" ).css({ "background-color": "#9966ff" })
});



// STEP 2: Change Parent

// Change the text in the span, a child of "#step-2"
// Hint: you can use .text

$( document ).ready(function() {
  $( "#step-2 span" ).text( "Atticus Finch" );
});




// STEP 3: Create Clone

// Create a clone of the span in "#step-3" and position it under the original one.
// Hint: you can use .clone and .insertAfter

$(document).ready(function() {
  var original =  $(".target-3 span");
  original.clone().appendTo(original.parent());
});




// STEP 4: Use Filter

// Change background color of the second ".target"
// Hint: you can use .eq and .css

$( ".target-4").css({ "background-color" : "red"});




// STEP 5: Disable Buttons

// Disable the button
// Hint: you will have to select the button and can use .attr

$( "button" ).attr( "disabled" );




// STEP 6: Uncheck CheckBoxes

// Uncheck all checkboxes using jQuery
// Hint: you will have to select the input and can use .removeAttr

$("[type=checkbox]").removeAttr("checked");




// STEP 7: Change Parent

// Move "#child-7" from "#step-7a" to "#step-7b"
// Hint: you can use .appendTo

$("#step-7a div").appendTo($("#step-7b"));




// STEP 8: Change Size

// Double the size of "#step-8"
// Hint: you can use .css, .width and .height

$( "#step-8" ).css()


// $("#step-8").css({"width": $("#step-8").width() * 2})




// STEP 9: Empty Elements

// Remove all children and text of "#step-9"
// Hint: you can use .empty

$( "#step-9").empty();




// STEP 10: Delay

// Show Alert with 1 second delay (Use "setTimeout")
// Hint: you can use setTimeout and alert (these aren't jQuery functions!)

function explode(){
  alert("This is a one second delay!");
}
setTimeout(explode, 1000);




// STEP 11: Count

// Show the number of children in an alert
// Hint: you can use .children, .length and alert or you could use .find, .size and alert. the alert should show 5

alert($("#step-12").children("div").length );





// STEP 12: Animate

// Make "#step-12" double size with animation
// Hint: you can use .animate, .width, and .height

$( "#step-12" ).animate( {
    width: $("step-12").height() * 2
  }, 3000, function() {
});




// STEP 13: All But One

// Remove all children of "#step-13" other than any h4 tags
// Hint: you can use .children, .not and .remove

$("#step-13").children().not("h4").remove();





// STEP 14: Without Children

// Remove all 'div's from "#step-14" which have no child elements.
// Hint: you can use .not and .remove. Look closely at what options you can pass .not

$("#step-14").remove();
