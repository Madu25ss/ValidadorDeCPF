function escopo() {
    const hideToggle = document.querySelector(".hideContent");

    const toggleListIcon = document.querySelector(".toggleList");

    const servicos = document.querySelector(".servicos");
    const iconServicos = servicos.getElementsByTagName('i');
    

    toggleListIcon.addEventListener('mouseover', (e) => {
        hideToggle.style.display = 'block';
    });

    

    toggleListIcon.addEventListener('mouseleave', (e) => {
        hideToggle.style.display = 'none';
    });


    let iconEstado;
    Array.from(iconServicos).forEach(icon => {
        
        icon.addEventListener('click', function() {
            if (icon.classList.contains('fa-regular') && icon.classList.contains('fa-heart')) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
                iconEstado = true;
            } else if (icon.classList.contains('fa-solid') && icon.classList.contains('fa-heart')) {
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
                iconEstado = false;
            }
            
            if (iconEstado == true) {
                console.log('favoritado');
            }
        });
    });
        
    
}
escopo();