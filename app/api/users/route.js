export async function GET(request) {
  const users = [
    { id: 1, name: "Test 1" },
    { id: 2, name: "Test 2" },
    { id: 2, name: "Test 3" },
  ];

  return new Response(JSON.stringify(users));
}
