//local storage function on email

function subscribe(){
  let email = document.getElementById("e").value;
  console.log(email);
  localStorage.setItem("email1", email);
  let emailAddress =localStorage.getItem("email1");
  console.log(emailAddress);
  console.log(typeof (emailAddress));
  }


  //Time function on email


const day = document.querySelector(".days .numb");
const hour = document.querySelector(".hrs .numb");
const min = document.querySelector(".mins .numb");
const sec = document.querySelector(".secs .numb");

var timer = setInterval(comingSoon, 1000);
function comingSoon()
      {
var currentDate = new Date().getTime();
var launchDate = new Date('Dec 18, 2021 00:00:00').getTime();
var duration = launchDate - currentDate;
var days = Math.floor(duration / (1000 * 60 * 60 * 24));
var hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((duration % (1000 * 60)) / 1000);
day.innerHTML = days;
hour.innerHTML = hours;
min.innerHTML = minutes;
sec.innerHTML = seconds;
if(days < 10){
  day.innerHTML = '0' + days;
}
if(hours < 10){
  hour.innerHTML = '0' + hours;
}
if(minutes < 10){
  min.innerHTML = '0' + minutes;
}
if(seconds < 10){
  sec.innerHTML = '0' + seconds;
}
 if(duration < 0){
    clearInterval(timer);
}
      }
 //Time function of pop

      function popUp(){
        let email = document.getElementById("e").value;
        if (email == "")
        { 
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter an email address',
          })
        }
        
      else 
        Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Subscribed',
        showConfirmButton: false,
        timer: 1500
      })
    }

       //Visitor CounterVisitor
var n = localStorage.getItem('on_load_counter');
if (n === null) {
n = 0;
}
n++;

localStorage.setItem("on_load_counter", n);
document.getElementById('CounterVisitor').innerHTML = n;

// console.log("visit",n);
// localStorage.removeItem("on_load_counter");
// // nums = n.toString().split("").map(Number);
// // console.log("nums",nums);
// document.getElementById('CounterVisitor').innerHTML = n;

// for (var i of nums) {
//   document.getElementById('CounterVisitor').innerHTML += '<span class="counter-item">' + i + '</span>';
// }  