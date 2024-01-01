import { useQuery } from "@tanstack/react-query";
import Container from "../components/ui/Container";
import Header from "../components/ui/Header";
import useAxios from "../hooks/useAxios";
import ServiceCard from "../components/ui/ServiceCard";

const Services = () => {
  const axiosSecure = useAxios();

  const getServices = async () => {
    const res = await axiosSecure.get("/services");
    return res;
  };

  const {
    data: services,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });
  //   console.log(services);

  if (isLoading) {
    return (
      <p>
        Loading <span className="animate-bounce">....</span>
      </p>
    );
  }

  if (isError) {
    return <p>Something went wrong: {error}</p>;
  }

  return (
    <>
      <Container>
        <Header title="Services">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, at
          quis. Odit voluptas commodi velit libero molestias hic nobis aliquid,
          ipsam distinctio quae? Id, eius eaque porro culpa dignissimos a!
        </Header>
      </Container>
      <Container className="my-4">
        <div className="grid my-6 grid-cols-3 gap-10">
          {services.data.map((item) => (
            <ServiceCard key={item._id} item={item}></ServiceCard>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Services;
