// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss 

// Подключение cтилей из node_modules
 import 'nouislider/dist/nouislider.css'; 

 const pricesFilterRange = document.querySelectorAll('[data-range');

 const addRangePriceFilter = (ranges) => {
	 ranges.forEach(rangeBlock => {
		 const fromValue = rangeBlock.querySelector('[data-range-from]');
		 const toValue = rangeBlock.querySelector('[data-range-to]');
		 const range = rangeBlock.querySelector('[data-range-value]');
		 const handles = [fromValue, toValue];
 
		 noUiSlider.create(range, {
			 start: [ 
				 Number(fromValue.dataset.rangeFrom),
				 Number(toValue.dataset.rangeTo)
				],
			 tooltips: [true, true], 
			 connect: [false, true, false],
			 range: {
				 'min': [Number(fromValue.dataset.rangeFrom)],
				 'max': [Number(toValue.dataset.rangeTo)]
			 } 
		 }); 

		 range.noUiSlider.on('update', (values, handleIndex) => { 
			handles[handleIndex].value = values[handleIndex];
		 }); 
	 })
 }
 
 
 addRangePriceFilter(pricesFilterRange);

