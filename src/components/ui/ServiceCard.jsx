const ServiceCard = ({ item }) => {
  console.log(item);
  return (
    <div>
      <div className="card text-center px-1 pb-1 bg-green-500 shadow-xl">
        <div className="">
          <h2 className=" text-xl font-bold text-center py-3">{item.name}</h2>
          <div className="bg-white w-full px-2  rounded-2xl">
            <p className="mb-6 pt-10">{item.description}</p>
            <p className="mb-3">{item.price}</p>
            <div className="w-full pb-4">
              <button className="btn w-full bg-green-500 outline-none border-none">
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
