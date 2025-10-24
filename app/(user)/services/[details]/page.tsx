import Index from "@/app/components/service-details";

const Page = async ({ params }: { params: Promise<{ details: string }> }) => {
  const slug = (await params).details;
  const response = await fetch(
    `${process.env.BASE_URL}/api/admin/services?slug=${slug}`,
    { next: { revalidate: 60 } }
  );
  const data = await response.json();
  console.log(data);
  return <Index data={data.data} />;
};

export default Page;
