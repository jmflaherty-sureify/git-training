function readline(question: string) {
    return new Promise<string>((resolve) => {
        const stdin = process.stdin;
        const stdout = process.stdout;

        stdin.resume();
        stdout.write(`${question}\n`);

        stdin.once('data', (data) => {
            resolve(data.toString().trim());
        });
    });
}

const name = await readline("What is your name?")

console.log(`Hello, ${name}!`);

process.exit(0);
