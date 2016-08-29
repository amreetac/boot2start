var email, password;
$("#signupbtn").click(function(event) {
  email = $('#email').val();
  password = $('#password').val();
event.preventDefault();       $.post('/api/create/user-signup', {email: email, password:password}, function(data) {
console.log(data);       if (data.id){
document.getElementById('id01').style.display='block'       }     });

})
