import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import HomeSectionV1 from './c-cpns/home-section-v1'



const Home = memo(() => {
  // 从redux中获取数据
  const {goodPriceInfo,highScoreInfo} = useSelector((state)=> ({
    goodPriceInfo:state.home.goodPriceInfo,
    highScoreInfo:state.home.highScoreInfo
  }),shallowEqual)

  // 派发异步事件:发送网络请求
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchHomeDataAction())
  },[dispatch])


  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className='content'>
        {/* <div className='good-price'>
          <SectionHeader title={goodPriceInfo.title}/>
          <SectionRooms roomList={goodPriceInfo.list}/>
        </div>
        <div className='high-score'>
          <SectionHeader title={highScoreInfo.title} subtitle={highScoreInfo.subtitle}/>
          <SectionRooms roomList={highScoreInfo.list}/>
        </div> */}
        <HomeSectionV1 infoData={goodPriceInfo}/>
        <HomeSectionV1 infoData={highScoreInfo}/>
      </div>
      
      
    </HomeWrapper>
  )
})

export default Home