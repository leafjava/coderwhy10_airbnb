import PropTypes from 'prop-types'
import React, { memo,useState } from 'react'
import { TabsWrapper } from './style'
import { ClassNames } from '@emotion/react'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
  const {tabNames = [],tabClick} = props
  const [currentIndex, setCurrentIndex] = useState(0)
  tabNames.push('aaa')
  tabNames.push('bbb')
  tabNames.push('ccc')

  function itemClickHandle(index,item){
    console.log(index)
    setCurrentIndex(index)
    tabClick(index, item)
  }

  return (
    <TabsWrapper>
      <ScrollView>
        {
          tabNames.map((item,index) => {
            return (
              <div
                key={index}
                className={classNames("item",{active:index == currentIndex})}
                onClick={e => itemClickHandle(index,item)}
              >
                {item}
              </div>
            )
          })
        }
      </ScrollView>
    </TabsWrapper>
      
  )
})

SectionTabs.propTypes = {
  tabNames:PropTypes.array
}

export default SectionTabs