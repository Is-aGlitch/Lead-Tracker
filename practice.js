//INNER HTML "It is used in Js to define HTML"
const container = document.getElementById("container")
container.innerHTML = "<button onclick = 'buy()'> Buy! </button>"

function buy() {
  container.innerHTML += "<p> Thankyou for buying </p>"
}
//+= has to be used otherwise the earlier contents will be overwritten
//----------------------------------------------------------------------
const inputBtn = document.getElementById("input-btn") //Instead of using onclick function
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)

  //Push the value from the inputEl into the myLeads array instead of the hard-coded "www.awesomeleads.com"
})
  //----------------------------------------------------------

  let listItems = ""
 for (let i = 0; i < myLeads.length; i++) {
    // ulEl.innerHTML += "<li>" +  myLeads[i] + "</li>"
    listItems += "<li>" +  myLeads[i] + "</li>"

    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
  }
ulEl.innerHTML =listItems
//-------------------------------------------------------------------------------

//With the template strings we can break our code into multiple lines so that it could look more clear
//` ` is used for template strings

listItems += "<li><a target = '_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "\a"
//Below we have broken the above code into pieces using template strings, also we use ${ } to escape from string and shove the Js expression into the string
listItems += `
    <li>
        <a target= ' _blank' href = '${myLeads[i]}'>
            ${myLeads[i]} 
        </a>
    </li>`
  
//------------------------------------------------------------//Another example of template string
 const recipient = "James"

 let email = "Hey " + recipient + "! How is it going?"
 console.log(email)

 //Changing the above line into template string
email= `Hey ${recipient} ! How is it going?`
 

//-----------------------------------------------
//JSON: javascript object notation
//It is a way to store and send data,to configure our app and provide metadata about it

/*{
  "manifest_version" : 3,
  "version" : "1.1" ,
  "name" : "Leads Tracker",
  "action": {
      "default_popup" : "index.html" ,
      "default_icon" : "icon.png"
  }
} */
//Manifest version tells about the version of json
//action is what will happen when the user will click at our extension

//-----------------------------------------------------------
localStorage.setItem("myLeads" ,"www.example.com" )
//local storage objec allows you to save key/vaue pairs in the browser
//localStorage.setItem(key, value) ->Run the code to store this value
//localStorage.getItem(key) -> console log this to get the previously stored items
localStorage.clear() //to clear out the values stored
//Both key and value need to be strings

//-----------------------------------------------------------
//TO pass arrays instead of strings in localStorage
//JSON.stringify converts arrays in to strings
localStorage.setItem("names", JSON.stringify(names))

//When we have to fetch data from local storage 
//Changing back from string to array
var storeNames = JSON.parse(localStorage.getItem("names"))