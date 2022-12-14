const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

//slider

const slider = document.querySelector('.slider');
M.Slider.init(slider,{
    indicators: false,
    height: 550,
    transition: 400,
    interval: 6000
});

//Autocomplete

const ac = document.querySelector('.autocomplete')
M.Autocomplete.init(ac, {
    data: {
        "Cameroon": null,
        "Marrakech. Morrocco": null,
        "Kenya": null,
        "Cape-Town, South Africa": null,
        "Tanzania": null,
    }
})