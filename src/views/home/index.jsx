import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import HomeSectionV1 from './c-cpns/home-section-v1'
import SectionTabs from '@/components/section-tabs'



const Home = memo(() => {
  // 从redux中获取数据
  const {goodPriceInfo,highScoreInfo,discountInfo} = useSelector((state)=> ({
    goodPriceInfo:state.home.goodPriceInfo,
    highScoreInfo:state.home.highScoreInfo,
    discountInfo:state.home.discountInfo
  }),shallowEqual)

  // 数据的转换
  const tabNames = discountInfo.dest_address?.map(item => item.name)

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

        <div className='discount'>
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle}/>
          <SectionTabs tabNames={tabNames}/>
          <SectionRooms roomList={discountInfo.dest_list?.["成都"]} itemWidth="33.33%"/>
        </div>

        <HomeSectionV1 infoData={goodPriceInfo}/>
        <HomeSectionV1 infoData={highScoreInfo}/>
      </div>
      
      
    </HomeWrapper>
  )
})

export default Home