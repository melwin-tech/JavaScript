// Asyc function and await and fetch api in javascript

// we know well about the sync code and async code now lets explore the async code.

// how to write async function using async keyword

function sayMyName(){
    console.log("My name is: love babbar") //sync code
}
sayMyName()

// how to put this code into the async code format
// 1. using setTimeout
setTimeout(sayMyName,5000)
// 2. using async function - always returns promises
async function getData() {
    console.log("Hi")
    setTimeout(sayMyName,3000)
}
getData()
let v = getData()
console.log(v)

// await

// fetch api 
// api = api is nothing but the application programm interface which allow us to use the other application progamm intonour appilcation prgramm. ex we can use gooogle maps api for useing gmaps in our website
// Methods of the api 
// 1.get 2. post 3.put 4.patch 5.delete

// case secenario
// 1.prepare->url/api endpoint\ ->sync
// 2.fetch data -> network call->async
// 3.process data ->sync
// line 1 will be execued as it is but since line 2 is async code it will take some time and that time depends on the api side response but during this time bline no 3 will be executed because of the event loop concept but how can you process the data if you dont have the date with you this creates a problem to solve this we need to make sur first that the data i recieved completey in order to achieve this we need to makle line no 2 sync so the conversion of async code to sync is done by using await keyword this the reason we use the await keyword

// api for get and post will be different

// get api request( it will get some data from the api)
const url = 'https://jsonplaceholder.typicode.com/posts/1' //get url
async function getDatas() {
    // get request - async
    let response = await fetch(url)//for get request fetch(url/apikey of get request)
    // parse jason - async
    let data = await response.json()
    // process data
    console.log(data)
}
getDatas()

// post api request( it will add some data to the api)
const url1 = 'https://jsonplaceholder.typicode.com/posts' //post url
const options = {
    method:"POST",
    body:JSON.stringify({username:"Love babbar"})
}
async function postData() {
    let response = await fetch(url1,options)
    let data = await response.json()
    console.log(data)
}
postData()



