function classificaTipoTriangulo(a,b,c)
{
    if(a === b && b === c) console.log("Triângulo Equilátero");
    else if(a === b && b != c) console.log("Triângulo Isóceles");
    else{ console.log("Triângulo Escaleno"); }
}

classificaTipoTriangulo(12,12,12);
classificaTipoTriangulo(5,5,7);
classificaTipoTriangulo(1,2,3);
