export const stringClampByByte = (str:string, byteLimit:number) => {
  const byteLength = (s) => s.replace(/[^x00-xFF]/g, '**').length;
  if (byteLength(str) > byteLimit) {
    const result = str.split('').reduce((prev, cur) => {
      if (byteLength(prev + cur) > byteLimit) {
        return prev;
      } else {
        return prev + cur;
      }
    }, '');

    return `${result}...`;
  } else {
    return str;
  }
};