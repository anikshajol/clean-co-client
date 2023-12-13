const Home = () => {
  return (
    <>
      <div className="w-full max-w-[1200px] mx-auto px-4 ">
        <div
          className="flex flex-col md:flex-row items-center
         md:justify-normal"
        >
          <div>
            <h2>Quality cleaning for your home</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              commodi sit corrupti sint quo et dicta accusamus reprehenderit
              omnis
            </p>
            <div>
              <button className="btn btn-primary">Book a Service</button>
              <button className="btn btn-secondary">Read More</button>
            </div>
            <div className="divider"></div>
            <div>
              {/* avatar */}
              <div>
                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://images.unsplash.com/photo-1567022296806-d2d37b715647?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://images.unsplash.com/photo-1567022296806-d2d37b715647?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://images.unsplash.com/photo-1567022296806-d2d37b715647?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://images.unsplash.com/photo-1567022296806-d2d37b715647?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                  </div>
                </div>
              </div>
              <p>Rated 5 out of 5 by our clients</p>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvdHJhaXR8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
