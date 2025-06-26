function fib(n) {
  // базовые случаи
  if (n === 0) return 0;
  if (n === 1) return 1;

  // рекурсивный вызов
  return fib(n - 1) + fib(n - 2);
}