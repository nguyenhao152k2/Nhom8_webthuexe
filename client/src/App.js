import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './router';
import './App.css';
import './components/HeaderComponent/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
// import axios from 'axios';
// import { Api } from './api/api.js';

function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3001/api/products')
  //     .then((res) => console.log(res.data))
  //         .catch((err) => console.log(err));
  // }, []);
  return (
    <div className='App'>
          <Router>
              <Routes>
                {
                  routes?.map((route) => {
                    const Page = route?.page;
                    const Layout = route?.isShowHeader ? DefaultComponent : Fragment;
                    return (
                      <Route key = {route.path} path={route.path} element={
                        <Layout>
                          <Page/>
                        
                        </Layout>
                      } />
                    )
                  })
                }
              </Routes>
          </Router>
          {/* <NavbarComp />
      <ContentComp />
      <PromoComp />
      <CarComp />
      <PlaceComp />
      <AdvantageComp />
      <InsuranceComp />
      <ServiceComp />
      <TutorialComp />
      <ExplorerComp />
      <BlogComp />
      <FooterComp/> */}
      </div>
  );
}

export default App;
