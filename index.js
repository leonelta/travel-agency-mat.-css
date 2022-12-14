const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

//slider

const slider = document.querySelector('.slider');
M.Slider.init(slider,{
    indicator: false,
    height: 600,
    transition: 500,
    interval: 6000
});