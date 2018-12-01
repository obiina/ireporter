function json(res){
    return res.json();
  }
  document.querySelector('#signin').addEventListener('click', (e) =>{
    e.preventDefault();
    const username = document.querySelector("#username").value;  
    if(username !== ""){    
      fetch('/v2/users/admin', {
        method : "post",
        headers: {
          'Accept' :'application/json',
          'Content-Type' :'application/json'
        },
        body: JSON.stringify({username : username})
      }).then(json)
        .then(response  =>{
          if(response){
            console.log(response.admincheck.username);
            localStorage.setItem("username", response.admincheck.username);
            let username = localStorage.getItem("username");
            window.location.replace(`/admin.html?user=${username}`)
          }else{
            alert('Invalid Login')
          }
        })
    }
   
  })