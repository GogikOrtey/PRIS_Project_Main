
document.addEventListener('DOMContentLoaded', function() { 

    let GoToMainPage = document.querySelector('.go-back-to-main');
    
    GoToMainPage.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
    
});
