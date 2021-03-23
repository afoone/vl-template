import MainHeader from "../mainHeader/MainHeader";

const Layout = ({children}) => {


    return(
        <div className='main-view'>
      <div className='main-view__main-header'>
        <MainHeader></MainHeader>
        {/* <MainHeader changeView={changeView}></MainHeader> */}
      </div>
      {children}
    </div>
    )
}

export default Layout;
