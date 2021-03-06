import { useEffect } from 'react';
import { connect } from 'react-redux';
import Router from './Router';
import { getUserInfoAction} from './redux/actions';

function App({getUserInfo}) {

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo && userInfo.id) {
      getUserInfo({ id: userInfo.id });
    }
  }, []);

  return (
    <div style={{backgroundColor:"#ecf0f5"}} >
      <Router />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: (params) => dispatch(getUserInfoAction(params)),
  };
}

export default connect(null, mapDispatchToProps)(App);