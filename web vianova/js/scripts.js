const Formulario = document.getElementById("Sugerencia");
Formulario.addEventListener("submit", function(event){
    event.preventDefault(); 
    const Correo = document.getElementById("Correo").value;
    const Texto_Sugerencia = document.getElementById("Texto_Sugerencia").value;
    console.log("Correo: " + Correo + " | Sugerencia: " + Texto_Sugerencia);
    document.getElementById("resultado").textContent = "Gracias por la sugerencia, la tomaremos en cuenta.";
    Formulario.reset();
}); 
