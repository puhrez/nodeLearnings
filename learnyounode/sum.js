var i = 0,
    sum = 0;

for (i = 2; i < process.argv.length; i += 1) {
    sum += +process.argv[i];
} 


console.log(sum);
