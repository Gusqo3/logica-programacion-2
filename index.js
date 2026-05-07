function convertir() {
    const gradosCelsius = document.getElementById("grCelsius").value;
    const divConv = document.getElementById("conversion");

    const gradosF = ((9 / 5) * gradosCelsius) + 32;
    const gradosK = parseFloat(gradosCelsius) + 273.15;

    if (gradosCelsius !== "") {
        const pgradosC = document.createElement("p");
        pgradosC.innerText = `Grados Celsius: ${gradosCelsius}
                        Grados Fahrenheit: ${gradosF}
                        Grados Kelvin: ${gradosK}`;
        divConv.append(pgradosC);
    } else
        alert("Completa los campos");

}

const input = document.getElementById("grCelsius");

input.addEventListener("input", () => {
    input.value = input.value.replace(/[^0-9.]/g, "");
});