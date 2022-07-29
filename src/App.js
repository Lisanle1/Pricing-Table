import "./App.css";
import Pricecard from "./Pricecard";
function App() {
  let data=[
    {
      plan:"Free",
      price:"0",
      user:"Single User",
      isUser:true,
      storage:"5GB Storage",
      isStorage:true,
      publicProject:"Unlimited Public Projects",
      isPublicProject:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProject:"Unlimited Private Projects",
      isPrivateProject:false,
      phone:"Dedicate Phone Support",
      isPhone:false,
      subDomain:"Free Subdomain",
      isSubDomain:false,
      reports:"Monthly Status Reports",
      isReports:false
  },
    {
      plan:"plus",
      price:"9",
      user:"5 Users",
      isUser:true,
      storage:"50GB Storage",
      isStorage:true,
      publicProject:"Unlimited Public Projects",
      isPublicProject:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProject:"Unlimited Private Projects",
      isPrivateProject:true,
      phone:"Dedicate Phone Support",
      isPhone:true,
      subDomain:"Free Subdomain",
      isSubDomain:true,
      reports:"Monthly Status Reports",
      isReports:false
  },
    {
      plan:"Pro",
      price:"49",
      user:"Unlimited User",
      isUser:true,
      storage:"150GB Storage",
      isStorage:true,
      publicProject:"Unlimited Public Projects",
      isPublicProject:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProject:"Unlimited Private Projects",
      isPrivateProject:true,
      phone:"Dedicate Phone Support",
      isPhone:true,
      subDomain:"Unlimited Free Subdomain",
      isSubDomain:true,
      reports:"Monthly Status Reports",
      isReports:true
  }
]
 
  return <>
     <section className="pricing py-5">
  <div className="container">
    < div className="row">
       {/* <Pricecard data={data[0]}/>
       <Pricecard data={data[1]}/>
       <Pricecard data={data[2]}/> */}
       {
       data.map((e)=>{
        return <Pricecard data={e}/>;
       })
      }
   </div>
  </div>
</section>
    </>

}

export default App;
