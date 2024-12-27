const form = document.querySelector("#form");


form.addEventListener("submit" , (event) => {
    event.preventDefault();

    let password = document.querySelector("#userpass");
    let confirm = document.querySelector("#userpassconfim");
    let errorMessage = password.parentElement.parentElement.querySelector("span");
    
    const isUpperCase = (str) => /^[A-Z]$/.test(str);
    const isLowerCase = (str) => /^[a-z]$/.test(str);
    const isNumber = (str) => /^[0-9]$/.test(str);
    const isSpecial = (str) => /^([\/\\\|\-_+=@#%^&*.<>,?;:])$/.test(str);

    // Password validation
    /*
        - check if the password is more than 8 character
        - check if its include a mix of : 
        uppercase , 
        lowercase , 
        numbers , 
        special characters
    */
    let isUpperCaseCh = false;
    let isLowerCaseCh = false;
    let isNumberCh = false;
    let isSpecialCh = false;
    if(password.value === confirm.value)
    {
        if(password.value.length < 8)
        {
            errorMessage.style.display = "block";
            errorMessage.textContent = "Password should be atleast 8 characters";
            return;
        }

        for(let i = 0; i < password.value.length; i++)
        {
            let currentCharacter = password.value.charAt(i);
            if(isUpperCase(currentCharacter))
            {
                isUpperCaseCh = true;
            }
            else if (isLowerCase(currentCharacter))
            {
                isLowerCaseCh = true;
            }
            else if (isNumber(currentCharacter))
            {
                isNumberCh = true;
            }
            else if (isSpecial(currentCharacter))
            {
                isSpecialCh = true;
            }
        }

        if(isLowerCaseCh == false || isUpperCaseCh == false || isNumberCh == false || isSpecialCh == false)
        {
            alert("Your password should have:\n- atleast 8 characters\n- uppercase and lowercase\n- atleast one number\n- atleast one special character");
        }
        else
        {
            const modal = document.querySelector(".modal");
            modal.style.display = "flex";
            setTimeout(() => {
                modal.style.display = "none";
                form.submit();
            } , 2000);
        }
    }
    else
    {   
        errorMessage.style.display = "block";
        errorMessage.textContent = "Password doesn't match"
        setTimeout(() => {
            errorMessage.style.display = "none";
        }, 1000)
    }

});