function inverter(arg)
{
    if(typeof arg === "boolean") return console.log(!arg);
    if(typeof arg === "number") return console.log(arg * -1);

    console.log("Argumento inválido! Esperado dado booleano ou real. Argumento do tipo: ", typeof arg);
}

inverter(5);
inverter(true);
inverter(-3);
inverter(false);


