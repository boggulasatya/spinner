const animationEffects = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let delay = 100;

for (let i = 0; i < animationEffects.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${animationEffects[i]}     `);
    if (i === animationEffects.length - 1) {
      console.log();
    }
  }, delay);

  delay += 200;
}