import figlet from 'figlet';

console.log("Hello via Bun!");

const server = Bun.serve({
    port: 3000,
    fetch() {
        const body = figlet.textSync("Star Wars!");
      return new Response(body);
    },
  });
  
  console.log(`Listening on http://localhost:${server.port} ...`);