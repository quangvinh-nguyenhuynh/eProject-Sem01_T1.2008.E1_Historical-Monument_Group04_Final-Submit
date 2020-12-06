//SEARCH BUTTON

document.getElementById('Search').addEventListener('submit', function(e){
    alert("We cannot find the information that you are looking for!");
    e.preventDefault();
  })
  // VALIDATE LOGIN
  document.getElementById('loginForm').addEventListener('submit', validateAccount);
  
  function validateAccount(e){
      e.preventDefault();
       let error=0;
  
      const name = document.getElementById('loginUsername');
      const namecheck = "fptaptech123";
      const password = document.getElementById('loginPassword');
      const passwordcheck = "@thebest";
      
      
      if(name.value!=namecheck || password.value!=passwordcheck){
          alert("Your username or password is incorrect!");
          error=1;
      } else {alert("Welcome! Have a good reading day!");
          $("#loginModal").modal('hide');
  }
      }
  
  
  //VALIDATE SIGN UP
  
  document.getElementById('signupForm').addEventListener('submit', validateSignupInfo);
  
  function validateSignupInfo(e){
      e.preventDefault();
       let x,y,z,t,u,v,k=0;
  
       const Firstname = document.getElementById('signupFirstname');
       const reFirstname = /^[a-zA-Z]{1,25}$/;
       if(!reFirstname.test(Firstname.value)){
        Firstname.classList.add('is-invalid');
        x=0;
      } else {
        Firstname.classList.remove('is-invalid');
        x=1;
      }
  
      const Lastname = document.getElementById('signupLastname');
      const reLastname = /^[a-zA-Z]{1,25}$/;
      if(!reLastname.test(Lastname.value)){
        Lastname.classList.add('is-invalid');
       y=0;
     } else {
      Lastname.classList.remove('is-invalid');
       y=1;
     }
     
  
     const Username = document.getElementById('signupUsername');
     const reUsername = /^[a-zA-Z0-9._]{4,10}$/;
     if(!reUsername.test(Username.value)){
      Username.classList.add('is-invalid');
      t=0;
    } else {
      Username.classList.remove('is-invalid');
      t=1;
    }
  
    const Email = document.getElementById('signupEmail');
     const reEmail = /^([a-zA-Z0-9_/./-]+)@([a-zA-Z0-9_/-]+)(\.([a-zA-Z]{2,5}))$/;
     if(!reEmail.test(Email.value)){
      Email.classList.add('is-invalid');
      u=0;
    } else {
      Email.classList.remove('is-invalid');
      u=1;
    }
  
      const password = document.getElementById('signupPassword');
      const repassword = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/  ;
      if(!repassword.test(password.value)){
        password.classList.add('is-invalid');
        v=0;
      } else {
        password.classList.remove('is-invalid');
        v=1;
      }
  
      const Confirmedpassword = document.getElementById('signupConfirmedpassword');
      if(Confirmedpassword.value !== password.value){
        Confirmedpassword.classList.add('is-invalid');
        z=0;
      } else {
        Confirmedpassword.classList.remove('is-invalid');
        z=1;
      }
  
      const Agredbox = document.getElementById('signupAgreedbox');
      if(Agredbox.checked == false){
        Agredbox.classList.add('is-invalid');
        k=0;
      } else {
        Agredbox.classList.remove('is-invalid');
        k=1;
      }
  
      if(x+y+z+t+u+v+k==7)
      {
        alert("CONGRATULATIONS! \n Your account has been created successfully!");
        $("#signupModal").modal('hide');
      }
      
      }
  
  
  