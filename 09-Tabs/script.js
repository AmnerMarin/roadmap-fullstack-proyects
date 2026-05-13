
const tabData = [
    "Contenido de la primera pestaña: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque repellendus a voluptatum quo veritatis vel.",
    "Contenido de la segunda pestaña: Aquí puedes poner información detallada sobre el segundo tema. Es rápido y dinámico.",
    "Contenido de la tercera pestaña: Los arreglos en JS son perfectos para almacenar este tipo de datos estáticos.",
    "Contenido de la cuarta pestaña: Finalmente, el último bloque de texto cargado eficientemente."
];


const tabs = document.querySelectorAll('nav ul li');
const articleDOM = document.querySelector('section article');

tabs[0].classList.add('active');
articleDOM.textContent = tabData[0];

tabs.forEach((tab, index) => {
    tab.addEventListener('click',()=>{
        if(tab.classList.contains('active'))return;

        tabs.forEach(t=>t.classList.remove('active'));

        tab.classList.add('active');
        articleDOM.classList.add('fade-out');
        articleDOM.textContent=tabData[index];
    })
})