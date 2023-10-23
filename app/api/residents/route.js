export async function GET(req) {
  const residents = [
    { id: 1, name: 'Bob' },
    { id: 2, name: 'Sarah' },
  ]

  return new Response(JSON.stringify(residents))
}
