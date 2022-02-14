const getPrimes = () => {
  // Add your code here
  count = 0;
  for( i = 2 ; i< 100; i++) {
    for(j = 1; j <= i ; j++) {
      if(i%j == 0) 
      { count++; 
      }
    }
    if(count == 2)
    { console.log(i); 
    }
    count = 0;
  }
};

getPrimes();
// 2
// 3
// 5
// 7
// 11
// 13
// 19
// 23
// 29
// 31
// 37
// 41
// 43
// ...
