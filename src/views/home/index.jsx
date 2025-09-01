import React, { memo, useCallback, useEffect,useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import HomeSectionV1 from './c-cpns/home-section-v1'
import SectionTabs from '@/components/section-tabs'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyObject } from '@/utils'


const Home = memo(() => {
  // 从redux中获取数据
  const {goodPriceInfo,highScoreInfo,discountInfo,recommendInfo} = useSelector((state)=> ({
    goodPriceInfo:state.home.goodPriceInfo,
    highScoreInfo:state.home.highScoreInfo,
    discountInfo:state.home.discountInfo,
    recommendInfo:state.home.recommendInfo
  }),shallowEqual)

  // 数据的转换
  // const [name,setName] = useState("佛山")
  // const tabNames = discountInfo.dest_address?.map(item => item.name)

  // const tabClickHandle = useCallback((index, name)=>{
  //   setName(name)
  // },[])

  // 派发异步事件:发送网络请求
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchHomeDataAction())
  },[dispatch])


  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className='content'>
        {/* HomeSectionV1 */}
        {/* <div className='good-price'>
          <SectionHeader title={goodPriceInfo.title}/>
          <SectionRooms roomList={goodPriceInfo.list}/>
        </div>
        <div className='high-score'>
          <SectionHeader title={highScoreInfo.title} subtitle={highScoreInfo.subtitle}/>
          <SectionRooms roomList={highScoreInfo.list}/>
        </div> */}

        {/* HomeSectionV2 */}
        {/* <div className='discount'>
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle}/>
          <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/>
          <SectionRooms roomList={discountInfo.dest_list?.[name]} itemWidth="33.33%"/>
        </div> */}
        {isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo}/>}
        {isEmptyObject(recommendInfo) && <HomeSectionV2 infoData={recommendInfo}/>}

        {isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}/>}
        {isEmptyObject(highScoreInfo) &&  <HomeSectionV1 infoData={highScoreInfo}/>}
      </div>
      
      
    </HomeWrapper>
  )
})

export default Home