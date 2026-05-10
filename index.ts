const server = Bun.serve({
  hostname: "127.0.0.1",
  async fetch() {
    const file = Bun.file("index.html");

    return new Response(file, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    });
  },
});

console.log(`Server running at http://localhost:${server.port}`);
