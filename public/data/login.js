var email, password;
$("#signupbtn").click(function(event) {
  email = $('#email').val();
  password = $('#password').val();
event.preventDefault();       $.post('/api/create/user-signup', {email: email, password:password}, function(data) {
console.log(data);       if (data.id){
document.getElementById('id01').style.display='block'       }     });

})


// Get the modal
// var modal = document.getElementById('id01');
// $(document).click(function(){
//   modal.style.display = "none";
// });

// // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
   if (event.target == modal) {
       modal.style.display = "none";
   }
}