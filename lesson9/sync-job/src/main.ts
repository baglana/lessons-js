import "./style.css";

const MAX_PRIME = 1000000;

function isPrime(n: number) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

const random = (max: number) => Math.floor(Math.random() * max);

function generatePrimes(quota: number) {
  const primes = [];
  while (primes.length < quota) {
    const candidate = random(MAX_PRIME);
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  return primes;
}

const quota = document.getElementById("quota");
const output = document.getElementById("output");
const generateBtn = document.getElementById("generate");
const reloadBtn = document.getElementById("reload");

generateBtn?.addEventListener("click", () => {
  if (quota instanceof HTMLInputElement && output instanceof HTMLElement) {
    const primes = generatePrimes(Number(quota.value));
    output.textContent = `Finished generating ${primes} primes!`;
  }
});

reloadBtn?.addEventListener("click", () => {
  document.location.reload();
});
