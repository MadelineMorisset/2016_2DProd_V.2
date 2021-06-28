// Show date on loading page.
if (!document.all&&!document.getElementById)
  getTheDate()

// Show the current date.
function getTheDate() {

  var mydate = new Date()
  var year   = mydate.getYear()

  if (year < 1000)
    year+=1900

  var hours   = mydate.getHours()
  var minutes = mydate.getMinutes()
  var seconds = mydate.getSeconds()

  var dn = ""

  if (hours >= 24)
    dn = ""

  if (hours > 24)
    hours = hours - 24

  if (hours == 0)
    hours = 24

  if (minutes <= 9)
    minutes = "0" + minutes

  if (seconds <= 9)
    seconds = "0" + seconds

  //change font size here
  var cdate = "<small><font color='2aa1d9' face='Segoe Print'><b>"
              + hours + ":" + minutes + ":" + seconds + " " +dn
            +"</b></font></small>";

  if (document.all)
    document.all.clock.innerHTML=cdate
  else if (document.getElementById)
    document.getElementById("clock").innerHTML=cdate
  else
    document.write(cdate)
}

function goforit() {
  if (document.all||document.getElementById)
    setInterval("getTheDate()",1000)
}
