//working with Arrays

const arrr = [12, 32, 14, 53, -2, -300];
arrr.forEach((ele) => {
  ele > 0
    ? console.log(`${ele} deposit `)
    : console.log(`${Math.abs(ele)} widthdrawal`);
});

for (const [i, mov] of arrr.entries()) {
  mov > 0
    ? console.log(`${i + 1}you deposit : ${mov}  `)
    : console.log(`${i + 1} you widthdraw :${Math.abs(mov)}`);
}
