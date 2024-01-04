
import offerContext from '../../context/offerContext'
import React, { useContext, useEffect, useState, useRef } from 'react';

function commissionInfo() {
 
  const [selectedcom, setSelectedcom] = useState("");

  const handleChange = (event) => {
    setSelectedcom(event.target.value);
  };

  const context = useContext(offerContext)
  const {  GetGameCom,GameComSet  } = context

  useEffect( () => {
    const submitdata = async () => {
      

      setSelectedcom(await GetGameCom())
      
  }
  submitdata()
  },[]);

  const handleSubmit = async () => {
   let res = await  GameComSet({
        "game":"SORAT",
        "gamecom":selectedcom
    })
    console.log("REs :::::::::::::::::::::",res)
    if(res.falgs == true){
      alert("Success Save")
    }
    console.log(selectedcom);
  };
  return (
    <div className="mb-[24px] w-full">
      <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-3">

        <div className="rounded-lg bg-white p-5 dark:bg-darkblack-600">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[7px]">
              <div className="icon">
                <span>
                <label style={{"color":"white"}} htmlFor="noOneWillWin">Commission</label>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
          

            <input
            type="text"
            id="name"
            placeholder="Please Insert Name"
            name="name"
            value={selectedcom}
            className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
            onChange={handleChange}
            />

              </span>
            </div>
          </div>
        </div>

        <div className="rounded-lg  p-5 ">  
        </div>

        <div className="rounded-lg  p-5">

          <div className="mb-5 flex items-center justify-between">
            <button onClick={handleSubmit}
              aria-label="none"
              className="bg-success-300 dark:bg-success-300 dark:text-bgray-900 border-2 border-transparent text-white rounded-lg px-4 py-3 font-semibold text-sm">
            Sumbit
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default commissionInfo;


          
          


          
          
          
        
        