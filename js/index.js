const smallMenu = document.getElementById('smallMenu');
const sideBar = document.getElementById('sideBar');
const closeBtn =document.getElementById('closeBtn');
const body  = document.body;
const bgChange = document.getElementById('bgChange');
// console.log(sideBar);
// console.log(smallMenu)
smallMenu.addEventListener('click',()=>{
    console.log('i was clicked');
    sideBar.style.display = 'flex';
    smallMenu.style.display = 'none';
    // header.style.backgroundImage = 'linear-gradient(to bottom right,rgba(88, 83, 83, 0.06), rgb(206, 41, 41))';
});
closeBtn.addEventListener('click', ()=>{
    sideBar.style.display = 'none';
    smallMenu.style.display = 'block';

})

if (typeof(localStorage) !== undefined)
{
    console.log('localstorage is available.')
}

const header = document.getElementById('header');

// get localstorage on theme
localStorage.setItem('theme', 'dark');
const userTheme = localStorage.getItem('theme');
console.log(`current theme : ${userTheme}`);
if (userTheme == 'dark')
{
    body.style.color = 'white';
    bgChange.style.color = 'white';
    body.style.backgroundColor = 'black';
}

bgChange.addEventListener('click', ()=>{
    console.log('changeBg button is clicked')
    if (userTheme == 'dark')
    {
        body.style.color = 'black';
        bgChange.style.color = 'black';
        body.style.backgroundColor = 'white';
    }
})
