import Index from "../components/home";
export default async function Home() {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/home`, {
    next: { revalidate: 60 },
  });
  const data = await response.json();

  return (
    <main>
      <Index data={data.data} />
    </main>
  );
}
