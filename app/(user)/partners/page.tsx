import Index from "@/app/components/partners";

const Page = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/partners`, {
    next: { revalidate: 60 },
  });
  const data = await response.json();
  return <Index data={data.data} />;
};

export default Page;
