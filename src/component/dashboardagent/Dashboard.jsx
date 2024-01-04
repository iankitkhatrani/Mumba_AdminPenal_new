import totalEarn from "../../assets/images/icons/total-earn.svg";
import memberImg from "../../assets/images/avatar/members-2.png";

import offerContext from '../../context/offerContext'
import React,{useContext,useEffect,useState,useRef} from 'react';
import TotalWidgetCard from "./TotalWidgetCard";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
//₹
function Dashboard() {

  const context = useContext(offerContext)
  const { dashboardData } = context
  let apiData = {}

  let [totalShop, settotalShop] = useState('');

  useEffect( () => {
    const submitdata = async () => {
    
      if(cookies.get('logintype')  == "Admin"){
        apiData = await dashboardData(cookies.get('logintype'))
      }else{
        apiData = await dashboardData(cookies.get('LoginUserId'))
      }

      if(apiData.totalShop != undefined)
      settotalShop(apiData.totalShop)

  }

  submitdata()
  },[]);
  
  return (
    <div className="mb-[24px] w-full">
      <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-3">
        <TotalWidgetCard
          totalEarnImg={totalShop}
          memberImg={memberImg}
          title="Total Shop"
          amount={totalShop}
          groth="+ 3.5%"
          id="totalEarn"
          logo=""
        />
        
      </div>
    </div>
  );
}

export default Dashboard;
