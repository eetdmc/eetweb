import Index from "@/app/components/destination-details";

const Page = async ({
  params,
}: {
  params: Promise<{ destination: string }>;
}) => {
  const slug = (await params).destination;
  const response = await fetch(
    `${process.env.BASE_URL}/api/admin/destinations?slug=${slug}`,
    { next: { revalidate: 60 } }
  );
  const data = await response.json();

  return <Index data={data.data} />;
};

export default Page;
