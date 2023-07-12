document.addEventListener('DOMContentLoaded', function () {
  const btnNext = document.querySelector('.popular__carousel-btn_right')
  const btnPrev = document.querySelector('.popular__splide-btn_left')

  const splide = new Splide('.popular__cards', {
    arrows: false,
    pagination: true,
    perMove: 1,
    focus: 'center',
    gap: '.2rem',
    perPage: 3,
    autoWidth: true,

    breakpoints: {
      // 1070: {
      //   perPage: 3,
      // },
      714: {
        perPage: 2,
      }
    }
  })

  splide.on('pagination:mounted', (data) => {
    console.log(data.list.classList)
    data.list.classList.add('current-item');
    console.log(data.items)
    
    data.items.forEach((item) => {
      item.button.textContent = '0' + String(item.page + 1);
    });
  })

  splide.mount();

  btnNext.addEventListener('click', e => {
    splide.go('>')
  })

  btnPrev.addEventListener('click', e => {
    splide.go('<')
  })

})