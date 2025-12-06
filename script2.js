// bouton "M’envoyer un message"
function afficherMessage(){
    alert("Merci pour votre intérêt ! Vous pouvez m’écrire par email ");
}

// boutons "Voir Plus" des projets
document.querySelectorAll(".project-btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
        alert("Détails du projet seront ajoutés plus tard.");
    });
});
// 🌙 Dark mode switch
const darkBtn = document.getElementById("darkToggle");
darkBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-mode");

    // Change text button
    if(document.body.classList.contains("dark-mode")){
        darkBtn.textContent = "☀ Light Mode";
        darkBtn.classList.remove("btn-outline-dark");
        darkBtn.classList.add("btn-light");
    }else{
        darkBtn.textContent = "🌙 Dark Mode";
        darkBtn.classList.add("btn-outline-dark");
        darkBtn.classList.remove("btn-light");
    }
});
