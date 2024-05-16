import React from 'react'
import CardComponent from '../../components/CardComponent/CardComponent'
import BannerComponent from '../../components/BannerComponent/BannerComponent'
import PromoComponent from '../../components/PromoComponent/PromoComponent'

const HomePage = () => {
  return (
      <div className='container'>
          <BannerComponent />
          <PromoComponent />
          <div className='featured-Car bg-light p-60'>
              {/* Featured tite  */}
              <div className='featured-title text-center'>
                  <h1 className='title'>Xe Dành Cho Bạn</h1>
              </div>

              <div className='car-slide space pt-48'>
                  <div className='featured-container row row-cols-xxl-4 row-cols-xs-1 g-3'>
                      <CardComponent />
                  </div>
              </div>
          </div>
      </div>
  );
}

export default HomePage