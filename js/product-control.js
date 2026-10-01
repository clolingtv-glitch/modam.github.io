function formatWithCommas(value) {
  if (value == null) return '';
  const str = String(value).replace(/,/g, '').trim();
  if (str === '' || isNaN(Number(str))) return value;
  const [intPart, decPart] = str.split('.');
  const intFormatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return decPart !== undefined ? `${intFormatted}.${decPart}` : intFormatted;
}

const saleUlTag = document.querySelector('.sale');
let result = productArray.map(product=>{
    return `<li>
                <a href="#">
                    <figure>
                        <img src="./img/${product.pthumbFileName}" alt="${product.pname}">
                    </figure>
                    <div class="sale-txt">
                        <h4 class="title-1">${product.pname}</h4>
                        <p class="desc-1">${product.pdesc}</p>
                        <div class="pay-frame">
                            <div class="pay-original">
                                <span>${formatWithCommas(product.price)}</span>원
                            </div>
                            <div class="pay-discount">
                                    <div class="discount">${product.pdiscount*100}%</div>
                                    <div class="pay"><b>${formatWithCommas(product.price-(product.price*product.pdiscount))}</b>원</div>
                                </div>
                        </div>
                        <span class="like-badge noab"><img src="./img/heart-1.svg" alt="좋아요하트">${product.plikes}</span>
                    </div>
                </a>
            </li>`
}).join('')

saleUlTag.innerHTML = result