document.addEventListener("DOMContentLoaded",()=>{
    const searchButton = document.getElementById("search-btn")
    const usernameInput = document.getElementById("user-input")
    const statsContainer = document.querySelector(".stats-container")
    const easyProgress = document.querySelector(".easy-progress")
    const mediumProgress = document.querySelector(".medium-progress")
    const hardProgress = document.querySelector(".hard-progress")
    const easyLabel = document.querySelector("#easy-label")
    const mediumLabel = document.querySelector("#medium-label")
    const hardLabel = document.querySelector("#hard-label")
    const cardStatsContainer = document.querySelector(".stats-cards")

    const url = ''

    function validateUsername(username){
        if(username.trim()===""){
            alert("Username cannot be empty");
            return false
        }
        const regex = /^[a-zA-z0-9-]{1,15}$/
        const ismatching = regex.test(username)
        if(!ismatching){
            alert("Invalid username")
        }
        return ismatching
    }

    async function fetchuserdetails(username) {

        try{
            searchButton.textContent="Searching...";
            searchButton.disabled=true;
            const proxyurl = 'https://cors-anywhere.herokuapp.com/'
            const url = 'https://leetcode.com/graphql/';//url of the api
            // created a header 
            const myheaders = new Headers();
            myheaders.append("content-type","application/json");
            // created a query
            const query = JSON.stringify({
            query: "\n query userSessionProgress($username: String!){\n allQuestionCount {\n difficulty\n count\n }\n matchedUser (username: $username) {\n submitstats {\n acSubmissionNum \n }\n totalSubmission {\n difficulty\n count\n Submission\n }\n  }\n}\n}\n ",variables:{"username":"${username}"}
            })
            // created a options
            const requestoptions={
            method:"POST",
            headers:myheaders,
            body: graphql,
            redirect: "follow"
            };
            // get request to the api
            const response = await fetch(proxyurl+url,requestoptions);
            // if probelm ten
            if(!response.ok){
                alert("Unable to fetch user details");
            }
            // everythin thung fine then
            const data = await response.json();
            console.log("Logging data: "+data);
            }catch(error){
            statsContainer.innerHTML="<p>No data found</p>"
            }finally{
            searchButton.textContent="Search";
            searchButton.disabled=false
            }
    }

    searchButton.addEventListener("click",function (){
        const username =usernameInput.value;
        console.log(username)
        if(validateUsername(username)){
            fetchuserdetails()
        }
    })

})

