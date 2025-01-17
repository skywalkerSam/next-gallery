const testUrls: string[] = [
  "https://utfs.io/f/suXlWOYj6P5mluaPseFdBCMI6LznvwAF7HrjlGR8kmbJY5Ki",
  "https://utfs.io/f/suXlWOYj6P5mGP0uXcVWCxR45grP3wq2Un6tIcayuhofNY9V",
  "https://utfs.io/f/suXlWOYj6P5mGP0uXcVWCxR45grP3wq2Un6tIcayuhofNY9V",
  "https://utfs.io/f/suXlWOYj6P5mh9D3bM9HLuq3fIbErM1Xl482VAz6H9QYDJgR",
  "https://utfs.io/f/suXlWOYj6P5mpmyY0wplThQlkHzsrdwKJ4EFAx2GX1c8Dniv",
  "https://utfs.io/f/suXlWOYj6P5m4XQvC9KPLwmkYBjV9cODUR576NMaKtFgzrne",
];

const testImages = testUrls.map((url, index) => ({
  id: index++,
  url,
}));

// console.log(typeof testUrls);
// console.log(typeof testImages);
// console.log(testImages);
console.log(testImages[0]);
