const btnMenu = document.querySelector('.btn-menu');
const smartOverlayMenu = document.querySelector('.smart-overlay-menu');
const btnMenuClose = document.querySelector('.btn-menu-close');

// 스마트 디바이스 메뉴 열기 닫기 기능
if (btnMenu) {
    btnMenu.addEventListener('click', () => {
        smartOverlayMenu.classList.add('on');
    });
}

if (btnMenuClose) {
    btnMenuClose.addEventListener('click', () => {
        smartOverlayMenu.classList.remove('on');
    });
}

const smartListe = document.querySelectorAll('.gnb-smart>li');
const gnb2depthSmart = document.querySelectorAll('.gnb2depth-smart');

smartListe.forEach((li, idx) => {
    li.addEventListener('click', (e) => {
        if(idx===0){return}
        e.preventDefault();
        smartListe.forEach(litag=>litag.classList.remove('on'));
        li.classList.add('on');
        gnb2depthSmart.forEach(div=>div.classList.remove('on'));
        gnb2depthSmart[idx-1].classList.add('on');
    })
});