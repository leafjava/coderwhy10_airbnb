import PropTypes from 'prop-types'
import React, { memo, useCallback, useEffect,useState } from 'react'
import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  // 从props获取数据
  const {infoData} = props

  // 数据的转换
  // 定义内部的state
  const initialName = Object.keys(infoData.dest_list)[0]
  const [name,setName] = useState(initialName)
  const tabNames = infoData.dest_address?.map(item => item.name)

  // 这种方法初始化也行，但是会渲染三次。第一次是没数据，第二次是来了新数据，第三次是来了新数据后执行setName
  // useEffect(()=>{
  //   setName(Object.keys(infoData.dest_list)[0])
  // },[infoData.dest_list])

  // 事件处理函数
  const tabClickHandle = useCallback((index, name)=>{
    setName(name)
  },[])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/>
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.33%"/>
      <SectionFooter name={name}/>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData:PropTypes.object
}

export default HomeSectionV2