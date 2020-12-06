// I. THE DEPARTURE INFORMATION
  
//   Load Country
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'js/countrylist.json', true);

  xhr.onload = function(){
    if(this.status === 200) {

      let countries = JSON.parse(this.responseText);

      let i, output = "";
        output = `<option value="">Please select</option>`;
       for (i in countries){
        output += `<option value="${i}">` + countries[i].name + `</option>`;
      };

      document.getElementById('countryList').innerHTML = output;
      document.getElementById('countryList2').innerHTML = output;
    }
  }

  xhr.send();

// -------------------------------------------------------


document.getElementById('countryList').addEventListener('change', loadState);

// Load State
function loadState(e) {
    
    xhr.open('GET', 'js/countrylist.json', true);
    xhr.onload = function(){
    if(this.status === 200) {
    let countries = JSON.parse(this.responseText);
    let j,x, output2 = "";
    let u = document.getElementById("countryList").value;

    if(u==""){
        output2 = `<option>Select Country first</option>`;
         document.getElementById('stateList').innerHTML = output2;
    } else{
        output2 = `<option>Please select</option>`;
    for (j in countries[u].states){   
        output2 += `<option value="${j}">` + countries[u].states[j].name + "</option>";
      };
        document.getElementById('stateList').innerHTML = output2;
    } }}
        xhr.send();
    }



// II. THE DESTINATION INFORMATION

document.getElementById('countryList2').addEventListener('change', loadState2);
document.getElementById('stateList2').addEventListener('change', validatePlaces);
// Load State
function loadState2(e) {
  
  xhr.open('GET', 'js/countrylist.json', true);
  xhr.onload = function(){
  if(this.status === 200) {
  let countries = JSON.parse(this.responseText);
  let j,x, output2 = "";
  let v = document.getElementById("countryList2").value;
  console.log(v);
  if(v==""){
      output2 = `<option>Select Country first</option>`;
       document.getElementById('stateList').innerHTML = output2;
  } else{
      output2 = `<option value="">Please select</option>`;
  for (j in countries[v].states){   
      output2 += `<option value="${j}">` + countries[v].states[j].name + "</option>";
    };
      document.getElementById('stateList2').innerHTML = output2;
  } }}
      xhr.send();
  }

  ////// VALIDATE DEPARTURE - DESTINATION
function validatePlaces(){
  if( document.getElementById('countryList').value == document.getElementById('countryList2').value && document.getElementById('stateList').value == document.getElementById('stateList2').value){
    alert("The departure place and destination should not be the same");
  }
}


  //// VALIDATE START DATE - END DATE
  var today = new Date();

  document.getElementById('startdate').addEventListener('change', validateStartdate);
  document.getElementById('enddate').addEventListener('change', validateEnddate);

  function validateStartdate(){
    var startdate = new Date(document.getElementById('startdate').value);
    
    if(today>startdate){
      alert('Start Date should be after today');
    } 
  }

  function validateEnddate(){
    var startdate = new Date(document.getElementById('startdate').value);
    var enddate = new Date(document.getElementById('enddate').value);
    
    if(enddate<startdate){
      alert('Start Date should be after today');
    } 
  }





