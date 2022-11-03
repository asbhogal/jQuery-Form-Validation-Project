function isEmail(email) {               // FUNCTION WHICH VALIDATES AN EMAIL ADDRESS VIA REGEX
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);           // test FUNCTION RETURNS EITHER FALSE OR TRUE
  }

$("#submit-btn").click(function() {

    let errorMessage = "",
        fieldsMissing = "";

    if($("#name").val() == "") {
        fieldsMissing += "<li>Name</li>";
    }

    if ($("#email").val() == "") {
        fieldsMissing += "<li>Email Address</li>";
    }

    if ($("#phone").val() == "") {
        fieldsMissing += "<li>Phone Number</li>";
    }

    if ($("#password").val() == "") {
        fieldsMissing += "<li>Password</li>";
    }

    if ($("#password-confirm").val() == "") {
        fieldsMissing += "<li>Password Confirmation</li>";
    }

    if (fieldsMissing != "") {
        errorMessage += "<p>The following field(s) are missing: </p>" + fieldsMissing;
    }

    if (isEmail($("#email").val()) == false) {                                                  // // BY DEFAULT, THE CHECK WILL BE TRUE. HERE, THIS IS CHANGED TO ACTION A COMMAND IF IT IS FALSE - THIS IS OF PARTICULAR INTEREST
        errorMessage +=  "<p>Please enter a valid email address</p>";                           // THE += OPERATOR APPENDS THE ASSIGNED STRING VALUE TO THE END OF THE CONTENTS OF errorMessage
    }
    
    if ($.isNumeric($("#phone").val()) == false) {
        errorMessage += "<p>Please enter a valid phone number</p>";
    }   

    if ($("#password").val() != $("#password-confirm").val()) {             // THE != OPERATOR IS USED TO CHECK IF TWO VALUES ARE NOT EQUAL TO EACH OTHER. BOTH MUST BE THE SAME TYPE IE. ELEMENT IDs IN THIS CASE
        errorMessage += "<p>Please check the passwords match</p>"
    }
    
    if(errorMessage != "") {
        $("#error-message").html(errorMessage);
    }
});

// THE TEST FUNCTION NEEDS TO BE PARSED AGAINST THE CONTENTS OF THE HTML INPUT USING ITS ID
// .val, AS IMPLIED, RETRIEVES THE VALUE OF THIS HTML INPUT. AN EMPTY PARAMETER IS USED, AS THE VALUE IS BEING RETRIEVED, NOT SET
// THE AIM IS TO RUN THE FUNCTION isEmail ON THE VALUE RETRIEVED FROM
// FINALLY, THIS IS WRAPPED AROUND THE alert, WHICH DISPLAYS THE RESULT (true OR false)
// THIS IS ALL CARRIED OUT WHEN THE SUBMIT BUTTON IS CLICKED.
// NB. THE alert HAS BEEN REPLACED WITH AN if CONDITIONAL CHECK
// PRACTICAL APPLICATIONS AND USER INTUITIVITY AND EXPERIENCE IS IMPORTANT TO CONSIDER HERE, AND TRANSLATING REAL-WORLD APPLICATIONS TO THE CODE
// IT IS NOT IDEAL TO DISPLAY AN ERROR MESSAGE FOR EVERY ISSUE DETECTED FOR THE USER EACH TIME THEY TRY AND SUBMIT, BUT RATHER DISPLAY ALL POSSIBLE ERRORS AT THE SAME TIME
// THE IDEA THEREFORE IN THIS CASE IS TO DECLARE AND ASSIGN AN EMPTY STRING VALUE TO THE VARIABLE errorMessage, THEN APPEND AN ERROR RELATIVE TO THE FIELD INPUT WITH EACH PARSE - OUTPUTTING THE FINAL MESSAGE WHICH WILL LIST ALL THE ERROR MESSAGES FROM CHECKS MADE

// THE VALIDATION HERE IS TO CHECK IF THE PHONE NUMBER ENTERED IS NUMERIC
// $. WILL CALL ALL THE jQUERY FUNCTIONS. A REGEX CAN BE USED ON LINE 13, HOWEVER SINCE jQUERY OFFERS IT, ITS IDEAL TO LEVERAGE THIS


