function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


  function validateForm (prefix = "")
  {
      if (prefix == null)prefix = "";

      if (prefix.length > 0)
      prefix = prefix + " ";

      var emailInput = document.querySelector(prefix +".email input");
      var error = document.querySelector (prefix +".email .error");

      var emailCheck = validateEmail (emailInput.value);


      error.innerHTML = emailCheck ? "" : "Please provide a valid email address";

      return emailCheck;

}