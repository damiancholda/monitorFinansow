function switchView(viewName){

    const section = document.querySelectorAll('main > section');
    section.forEach(s => s.classList.add('hidden'));

    const target = document.getElementById('view-${viewName}');
    if(target){
        target.classList.remove('hidden');
    }
}
window.onload = initApp;