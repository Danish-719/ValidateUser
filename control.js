function danishPres() {
            // Your code here
           //stored name and password 
           //checks if the input values (name and password) match the stored values
           //name input value
           var nameInput = document.getElementById("idname").value;  /// user jo naam likh raha hai
           let passwordInput = document.getElementById("idpassword").value;  // user jo password likh raha hai
           let storedName = "danish";  // stored name
           let storedPassword = "123";  // stored password
           if(nameInput.toLowerCase()==storedName && passwordInput===storedPassword){
            alert("login successful");
            let newInput = document.getElementById("input").value;
            let v="danish"
            
            // newInput.type = "integer";
            newInput = placeholder="Enter your city name";

            let space = document.getElementById("idDiv1");
           
            space.appendChild(newInput);
           }else{
            alert("login failed");
           }

           
        }