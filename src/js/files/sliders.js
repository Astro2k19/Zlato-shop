/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Parallax, Pagination, Autoplay, Thumbs } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/ 

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {

	if (document.querySelector('.main-block__slider')) { 

		new Swiper('.main-block__slider', { 
			modules: [Navigation, Parallax, Pagination, Autoplay],
			observer: true,
			observeParents: true, 
			slidesPerView: 1,
			spaceBetween: 50,
			autoHeight: true, 
			speed: 800, 

			autoplay: { 
				delay: 3000,
				disableOnInteraction: false,
			},
			
			
			pagination: {
				el: '.main-block-controlls__dotts',
				clickable: true,
			},

			on: {
				init() { 
					const allFraction = document.querySelector('.main-slider-fraction__all'); 
					const allSlides = document.querySelectorAll('.main-block__slide:not(.swiper-slide-duplicate)').length;
					allFraction.textContent = allSlides < 10 ? `0${allSlides}` : allSlides;
				}, 

				slideChange(slider) {
					const currentFraction = document.querySelector('.main-slider-fraction__current');
					currentFraction.textContent = slider.realIndex < 10 ? `0${slider.realIndex + 1}` : slider.realIndex + 1
				}
			}
		});
	}

	if (document.querySelector('.product-cards__slider')) {  
		new Swiper('.product-cards__slider', {   
			modules: [Navigation, Pagination, Autoplay],
			observer: true,
			observeParents: true,   
			slidesPerView: 4,
			spaceBetween: 30,  
			speed: 1200,
			// loop: true, 

			autoplay: { 
				delay: 3000,
				disableOnInteraction: false,
			},
			
			pagination: {
				el: '.product-cards__dotts',
				clickable: true, 
			},
			
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			
		});
	}

	if (document.querySelector('.products-new__slider')) {     
		new Swiper('.products-new__slider', { 

			modules: [Navigation, Pagination, Autoplay],
			observer: true,
			observeParents: true,   
			slidesPerView: 3,
			spaceBetween: 33,  
			speed: 1200,
			// loop: true, 

			autoplay: {   
				delay: 3000,
				disableOnInteraction: false,
			},
			
			
			pagination: {   
				el: '.products-new__dotts', 
				clickable: true,
			},
			
			breakpoints: {
				320: { 
					slidesPerView: 1,
				},
				992: { 
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1350: { 
					slidesPerView: 3,
					spaceBetween: 30,
				}, 
			},
			
		});
	}

	if (document.querySelector('.images-product')) {   
		
		const productThumbs = new Swiper('.product-thumb-slider', { 

			modules: [],
			observer: true,
			observeParents: true,   
			slidesPerView: 3,
			spaceBetween: 15,
			speed: 1200,
			loop: true, 

			autoplay: {   
				delay: 3000,
				disableOnInteraction: false,
			},
						
			breakpoints: {
				1350: { 
					slidesPerView: 4,
					spaceBetween: 15,
				}, 
			},
			
		}); 


		 new Swiper('.product-main-slider', { 

			modules: [Thumbs],
			observer: true,
			observeParents: true,   
			slidesPerView: 1,
			spaceBetween: 33,  
			speed: 1200,
			loop: true, 
			fadeEffect: {
				crossFade: true
			},

			thumbs: {
				swiper: productThumbs 
			}, 

			autoplay: {   
				delay: 3000,
				disableOnInteraction: false,
			},
						
		});
	}

}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});