const productdetailBox = document.querySelector('#product-detail-2');

productdetailBox.addEventListener('click', (e) => {

    const btn = e.target.closest('.btn-rvtxt')
    // 클릭된 부분에서 가까운 btn-rvtxt클래스를 가진 태그를 선택하여 btn변수에 저장
    btn.closest('.review-txt').classList.toggle('fold');
    if (btn.closest('.review-txt').classList.contains('fold')) {
        // 폴드라는 클래스가 있을 때 실행되는 코드
        btn.innerHTML = `더보기<img src="./img/icn-down.svg" alt="더보기아이콘">`
    } else {
        // 폴드라는 클래스가 없을 때 실행되는 코드
        btn.innerHTML = `접기<img src="./img/icn-down.svg" alt="접기아이콘">`
    }

});

// const btnRvtxt = document.querySelectorAll('.btn-rvtxt');
// btnRvtxt.forEach((btn)=>{
//     btn.addEventListener('click',()=>{
//         btn.closest('.review-txt').classList.toggle('fold');
//         if(btn.closest('.review-txt').classList.contains('fold')){
//             // 폴드라는 클래스가 있을 때 실행되는 코드
//             btn.innerHTML = `더보기<img src="./img/icn-down.svg" alt="더보기아이콘">`
//         }else{
//             // 폴드라는 클래스가 없을 때 실행되는 코드
//             btn.innerHTML = `접기<img src="./img/icn-down.svg" alt="접기아이콘">`
//         }
//     });
// });