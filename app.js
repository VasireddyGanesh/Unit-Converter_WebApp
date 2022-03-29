function calculate() {
    let value = parseInt(document.getElementById("box").value);

    document.getElementById("res1").innerText =
        value +
        " meters = " +
        (value * 3.28084).toFixed(3) +
        " feet | " +
        value +
        " feet = " +
        (value * 0.3048).toFixed(3) +
        " meters";

    document.getElementById("res2").innerText =
        value +
        " liters = " +
        (value * 0.2199692).toFixed(3) +
        " gallons | " +
        value +
        " gallons = " +
        (value * 4.54609).toFixed(3) +
        " liters";

    document.getElementById("res3").innerText =
        value +
        " kilos = " +
        (value * 2.204623).toFixed(3) +
        " pounds | " +
        value +
        " pounds = " +
        (value * 0.4535924).toFixed(3) +
        " kilos";
}
