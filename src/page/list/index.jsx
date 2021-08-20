import { useEffect } from "react";
import {getListAction} from "../../redux/actions";
import { connect } from "react-redux";
import HeaderPage from '../../page/header';
import history from "../../utils/history";


function ListPage({getList, list,userInfo}){
  
  useEffect(()=>{
    getList({
      page: 1,
      limit: 20,
    })
  },[])
  function renderList(){
     if(list.load) return <p>Loading...</p>
       return list.data.map((item)=>{
         if (item.photos[0] && item.photos[0].small){
          return (
              
              <>  
                    <img src={item.photos[0].small} style={{width: 360, height: 240, margin: 10}} />
                </>

                )
              }
       })
   }
  
   return (
     <>
     { userInfo.data.id ?(
       <div> 
            <HeaderPage/> 
           {renderList()}
       </div>
      ):(
        <>
        {/* <div style = {{display:"flex", justifyContent: "center", alignItems: "center",height: 50}}> */}
        <div style = {{display:"flex", justifyContent: "space-between", alignItems: "center",height: 50}}>
         <h1 style = {{color: "red", marginLeft: 780}}>Bạn cần phải đăng nhập</h1>
        <button style = {{marginRight: 170, height: 40}} onClick={() => history.push('/')}>Đăng Nhập</button>
        </div>
        {/* </div> */}
        </>
      
     ) 
    } 
    </>
   )

}
const mapStateToProps = (state) => {
    const { list } = state.listReducer;
    const { userInfo } = state.userReducer
    return {
      list,
      userInfo
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      getList: (params) => dispatch(getListAction(params)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ListPage);