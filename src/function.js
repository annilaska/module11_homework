export function getPercents(percent, number) {
    if(number > 0 && percent > 0) {
        const result = number * percent / 100;
        return result;
    } else if((number === '' || percent === '') || (number === false || percent === false)) {
        return 'Данные не найдены';
    } else if(number <= 0 || percent <= 0) {
        return 'Одно или оба введённых значения отрицательные или равны нулю';
    } else if(number !== isNaN(number) && percent !== isNaN(percent)) 	{
        return 'Одно или оба введённых значения не являются числом';
    } 
}