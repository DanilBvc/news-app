import { regx } from '../store/const';

export const getDate = (date: Date) => {
  let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
  let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
  let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
  return `${mo} ${da}th, ${ye}`;
};
export const checkWord = (item: string, inputValueHook: string) => {
  return (
    inputValueHook
      .split(' ')
      .map((input) => input.toLowerCase().trim())
      .includes(item.toLowerCase().trim()) ||
    item.includes(inputValueHook) ||
    item.includes(inputValueHook.replace(regx, ''))
  );
};
