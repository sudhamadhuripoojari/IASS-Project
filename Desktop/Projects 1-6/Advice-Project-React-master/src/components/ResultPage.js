import React from 'react'
import mindblown from "../Images/mindblown.gif"


export const ResultPage = () => {
  var request = new XMLHttpRequest();
var item = {};

request.open('GET', 'https://api.adviceslip.com/advice');


request.onload = function() {
    var response = request.response;
    console.log(typeof response);
    var parsedData = JSON.parse(response);
  
  //   GENERATING THE ADVICE WITH A LOOP
    for(item in parsedData) {
        var slip = parsedData[item].advice;
        var id = document.createElement('p');
        id.innerHTML = slip;
        document.body.appendChild(id);
    }
  };
  
  request.send();

  return (
    <>
    <img src={mindblown} alt="Mindblown" className="mindblown"/>
    </>
  )
}





  