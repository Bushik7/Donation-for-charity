import moment from 'moment';

export const calculateSumOfNumbers = (numbers) => numbers.reduce((acc, cur) => acc + cur, 0);

export const getFormattedTime = (date) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
};
