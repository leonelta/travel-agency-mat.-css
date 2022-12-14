const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

//slider

const slider = document.querySelector('.slider');
M.Slider.init(slider,{
    indicators: false,
    height: 600,
    transition: 400,
    interval: 6000
});