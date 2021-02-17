/*
#####################################################################
#Author: Baruch                                                     #
#IBM: Introduction to Cloud Development with HTML, CSS, JavaScript  #
#Week 6: Final Project                                              #
#Feb 2021                                                           #
#####################################################################
*/

function compute() {
    //Get the amount, rate and years. Parse values and compute the interest
    let principal = Number.parseInt(document.getElementById("principal").value);
    let rate = Number.parseFloat(document.getElementById("rate").value);
    let years = Number.parseFloat(document.getElementById("years").value);
    let interest = principal * years * rate / 100;

    //Validate amount. Prevent negative values or zero
    if (principal <= 0) {
        alert("Please, enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    //Calculate the future year
    futureYear = new Date().getFullYear() + years;

    //Show the final values to the user.
    let result = document.getElementById("result");
    result.innerHTML = `If you deposit <mark>${principal}</mark>,<br>
                    at an interest rate of <mark>${rate}%.</mark><br>
                    You will receive an amount of <mark>${interest}</mark>,<br>
                    in the year <mark>${futureYear}</mark><br>`;

}

//Updates the interest string value based on the rate (slider) value
function updateInterest() {
    let interest = document.getElementById("rate").value;
    let val = document.getElementById("val");
    val.textContent = interest + "%";
}


//Resets the field years when user clicks the drop-down menu (thus, displays all values)
function resetYears() {
    document.getElementById("years").value = "";
}