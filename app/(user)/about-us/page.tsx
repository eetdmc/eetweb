import Index from "@/app/components/about-us";

const Page = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/about`, {
    next: { revalidate: 60 },
  });
  const data = await response.json();

  const awardsResponse = await fetch(
    `${process.env.BASE_URL}/api/admin/awards`,
    {
      next: { revalidate: 60 },
    }
  );
  const awardsData = await awardsResponse.json();

  const partnersResponse = await fetch(
    `${process.env.BASE_URL}/api/admin/partners`,
    {
      next: { revalidate: 60 }, 
    }
  );
  const partnersData = await partnersResponse.json();

  return (
    <>
      <Index
        data={data.data}
        awardsData={awardsData.data}
        partnersData={partnersData.data}
      />
    </>
  );
};

export default Page;
