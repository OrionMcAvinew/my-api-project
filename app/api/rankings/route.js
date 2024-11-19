// app/api/rankings/route.js
export async function GET(req) {
  try {
    const response = await fetch("https://api.sportradar.com/tennis/trial/v3/en/rankings.json?api_key=aE12id7k6fCNauEteVeXthz0qkMqcNhcViASH0Lt");

    if (!response.ok) {
      return new Response("Failed to fetch rankings", { status: response.status });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
}
