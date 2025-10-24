import Index from "../components/home";
export default async function Home() {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/home`, {
    next: { revalidate: 60 },
  });
  const data = await response.json();

  const destinationsResponse = await fetch(
    `${process.env.BASE_URL}/api/admin/destinations/add`,
    {
      next: { revalidate: 60 },
    }
  );
  const destinations = await destinationsResponse.json();

  const servicesResponse = await fetch(
    `${process.env.BASE_URL}/api/admin/services/add`,
    {
      next: { revalidate: 60 },
    }
  );
  const services = await servicesResponse.json();

  return (
    <main>
      <Index
        data={data.data}
        destinations={destinations.data}
        services={services.data}
      />
    </main>
  );
}
