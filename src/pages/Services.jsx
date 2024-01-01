import Container from "../components/ui/Container";
import Header from "../components/ui/Header";

const Services = () => {
  return (
    <>
      <Container>
        <Header title="Services">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, at
          quis. Odit voluptas commodi velit libero molestias hic nobis aliquid,
          ipsam distinctio quae? Id, eius eaque porro culpa dignissimos a!
        </Header>
      </Container>
      <Container>
        <div className="grid grid-cols-3 gap-10"></div>
      </Container>
    </>
  );
};

export default Services;
