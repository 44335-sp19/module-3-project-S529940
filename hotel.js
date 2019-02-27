/* The script is placed inside an immediately invoked function expression
   which helps protect the scope of variables */

//PART ONE: GENERATE A RANDOM ROOM RATE. Write a function called genRand() that has no paremeters that will return a room rate between 100 and 400. HINT: You should hit a number within this range within 10 tries.
//creates genRand function 
  function genRand()
{
   
    for (var count = 0; count < 10; count++)
        {
            var randomRate = Math.floor(Math.random() * 400);       //gets random number between 0 - 400, rounds down
                               if (randomRate < 100)                //changes to 100 - 400
                              {
                              break;
                              }
        
        }
        return randomRate;
}
    
    

  // PART TWO: CALCULATE AND RETURN THE EXPIRY DETAILS FOR THE OFFER. Write a function called offerExpires that has one parameter a Date object. The function should return a string in the format "OFFER EXPIRES NEXT "WeekDay" (Date Month Year)". The date should be one week from today's date
    
    
    
function offerExpires(today)
{
    var expiryMsg;
    var weekFromToday, day, date, month, year, dayNames, monthNames;
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    
    dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    monthNames = ["Janurary","Feburary","March","April","May","June","July","August","September","October","November","December"];
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();
    expiryMsg = 'Offer expires next: ';
    expiryMsg += day + '<br/>' + (+ date + " " + month + " " + year);
    
    return expiryMsg;
}
  
//PART THREE: CALL THE FUNCTIONS AND WRITE INFO TO WEBPAGE

//Call getRand() function to get random room rate and write it to the special rate section on the webpage
document.getElementById("specialRate").innerHTML = genRand();
var today = new Date;
document.getElementById("offerEnds").innerHTML = offerExpires(today);            
