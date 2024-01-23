import React from "react";

const App = () => {
  return (
    <div className="w-100% min-h-[100vh] bg-pink-200">
      <div className="w-100% h-[80vh]  border-sky-500 border-5  p-[5vmin]  md:p-[5rem] flex justify-between   bg-gradient-to-r  from-slate-100 to-fuchsia-500">
        <div className="mt-[10%]  sm:text-[3rem]  ">
          <p
            className=" trans
            
            
            "
          >
            Naveen Singh
          </p>

          <p
            className="trans
          
          
          
          
          
          
          
          hover:text-white   "
          >
            FreeLancer{" "}
          </p>
        </div>

        <div className="overflow-hidden  rounded-[80rem] myflex">
          <img
            src="./src/assets/me2.jpg"
            alt="image.jpg"
            className=" w-[35vmin] h-[35vmin]   sm:w-[25vmax] sm:h-[25vmax] object-fill  rounded-[50rem] 
              border-b-[0.2rem] border-b-lime-200 
              border-t-[0.9rem] border-t-lime-400
              border-l-[0.1rem] border-l-fuchsia-600
              border-r-[0.3rem] border-r-cyan-500 
              hover:scale-[1.2]

            
              shadow-[50px_35px_50px] shadow-slate-500
              
              
              
              "
          />
        </div>
      </div>
    </div>
  );
};

export default App;
