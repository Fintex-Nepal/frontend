import React, { useState } from "react";
import logo from '../assets/logo.png'
const Invoice = () => {
  const [showbutton, setShowButton] = useState(true);


  const currentDate = new Date();
  const dateInUTCString = currentDate.toUTCString();

  const handlePrint = () => {

    // Wait for a small delay to allow the modal to render properly before printing
    setShowButton(false)
    setTimeout(() => {
      window.print();
      setShowButton(true)
    }, 100);
  };

  return (
    <>
      <div className="w-full max-h-screen mt-24">
        <nav className="absolute w-full z-50 flex flex-wrap items-center justify-between px-2 py-3 mb-3 lg:bg-transparent bg-white">
          <div className="flex container mx-auto flex-wrap items-center justify-between px-0 lg:px-4">
            <button className="ml-auto cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-blueGray-400 rounded bg-transparent block outline-none focus:outline-none text-blueGray-300 lg:hidden" type="button">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </nav>
        <section className="flex relative items-center p-0 min-h-screen-60 max-h-440-px">
          <div className="absolute w-full h-full block bg-blueGray-900 opacity-75 z-1 left-0 top-0"></div>
          <div className="bg-blueGray-800 w-full h-full absolute bg-cover bg-50 z-0" style={{ backgroundImage: `url('../../assets/img/pages/nathan-dumlao.jpg')` }}></div>
          <div className="relative h-full text-center text-white container mx-auto px-4 z-3 mb-16">
            <div className="justify-center flex flex-wrap -mx-4">
              <div className="px-12  relative  lg:w-6/12 w-full md:w-8/12">
                <h1 className="text-4xl font-bold leading-tight">Invoice</h1>
                <p className="text-lg opacity-75 pt-2">Everyone’s born confident, and everything’s taken away from</p>
              </div>
            </div>
          </div>
          <div className="w-full bottom-0 absolute z-2">
            <div className="w-full pointer-events-none overflow-hidden h-70-px" style={{ transform: 'translateZ(0px)' }}>
              <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                <polygon className="text-blueGray-100 fill-current" points="2560 0 2560 100 0 100"></polygon>
              </svg>
            </div>
          </div>
        </section>
        <section className="relative bg-blueGray-100 py-12 z-2">
          <div className="container mx-auto px-4 -mt-64">
            <div className="flex flex-wrap -mx-4">
              <div className="mx-auto px-4 relative w-full lg:w-10/12">
                <div className="bg-white  rounded-lg relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg">
                  <div className="px-5 pt-6 pb-4 border-b border-blueGray-200">
                    <div className="justify-between flex flex-wrap -mx-4">
                      <div className="text-left px-4 relative w-full md:w-4/12">
                        <div className="text-left">
                          <img alt="Logo" src={logo} className="w-full mb-2" style={{ maxWidth: '150px' }} />
                          <h6 className="block capitalize text-blueGray-700 mt-6">Fintex Company, New Baneshwor-09, Kathmandu Nepal</h6>
                          <h6 className="text-blueGray-700">tel: +977 (982) 2231006</h6>
                        </div>
                      </div>
                      <div className="text-left px-4 relative w-full lg:w-3/12  md:w-5/12">
                        <div className="flex justify-center py-6 lg:pt-6 pt-12">
                          <div className="text-left">
                            <h3 className="text-2xl font-bold leading-normal mt-0 mb-2">Billed to:</h3>
                            <h6 className="block mt-2 mb-0 text-xl">Regs No: 123456789</h6>
                            <p className="text-blueGray-500">{dateInUTCString}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:justify-between flex flex-wrap -mx-4">
                      <hr />
                      <h2 className='font-bold text-3xl'>Deposit</h2>
                      <hr />
                    </div>
                  </div>
                  <div class="flex pl-10">
                    <div class="flex-none w-1/4 h-14 flex justify-between">
                      <div>Scheme Name</div>
                      <div class="ml-2">Daily Saving</div>
                    </div>
                    <div class="flex-initial w-2/3 flex items-center justify-center ">
                      02
                    </div>
                  </div>
                  <div className="px-4 py-3 border-t border-blueGray-200">
                    <div className="text-right ml-auto px-4 relative w-full md:w-5/12">
                      <h5 className="text-2xl font-semibold leading-normal mt-0 mb-2">Thank you!</h5>
                      <p className="">If you encounter any issues, you can contact us</p>
                      <h6 className="flex items-center justify-end mb-4"><span className="mr-2">email:</span><span className="text-blueGray-500">support@creative-tim.com</span></h6>
                    </div>
                  </div>
                </div>
                {showbutton && <div className="float-right">
                  <button
                    onClick={handlePrint}
                    className="inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-white bg-pink-500 border-pink-500 active:bg-pink-600 active:border-pink-600 text-sm px-6 py-2 shadow hover:shadow-lg rounded-md"
                  >
                    <i className="fas fa-print mr-2"></i>Print
                  </button>
                </div>}
              </div>
            </div>
          </div>
        </section>
      </div>



    </>
  );
};

export default Invoice;
