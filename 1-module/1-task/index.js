function factorial(n) {
  let factorial;
  if (n >= 0) {
      factorial = 1;
      while(n){
          factorial *= n;
          n--;
      }
  }
  return factorial;
}
