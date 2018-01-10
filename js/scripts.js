var allAppointments = [];

var saveToArray = function(name, phone, email, date){
  var appointmentArray = [name,phone,email,date];
  allAppointments.push(appointmentArray); //Pushing to global Appointment Array
  return appointmentArray;
}
//Returns true if date is taken.
var dateComparator = function(dateToCompare){
  var state = false;
  allAppointments.forEach(function(element){
    if(element[3] == dateToCompare){
      state = true;
    }
  });
  return state;
};
$(document).ready(function() {
  $("form#calculate").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var date = $("#date").val();
    var result = dateComparator(date);
    if(result){
      alert("Sorry, the date you selected is taken.");
    } else {
      alert("Your information has been saved. " + saveToArray(name,phone,email,date).toString());
    }
  });

  $("button#appointments").click(function(){
    var outputString ="";
    allAppointments.forEach(function(element){
    outputString += element.toString()+'\n';
    });
    alert(outputString);
  });
});
