import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import {getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecommendData,getHomeLongforData} from '@/services'

export const fetchHomeDataAction =  createAsyncThunk("fetchdata",(payload, {dispatch, getState})=>{
  // const state = getState()

  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })
  // return res

  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })

  getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfoAction(res))
  })

  getHomeHotRecommendData().then(res => {
    dispatch(changeRecommendInfoAction(res))
  })

  getHomeLongforData().then(res => {
    dispatch(changeLongforInfoAction(res))
  })

})

const homeSlice = createSlice({
  name:"home",
  initialState:{
    page:1,
    goodPriceInfo:{},
    highScoreInfo:{},
    discountInfo:{},
    recommendInfo:{},
    longforInfo:{}
  },
  reducers:{
    changeGoodPriceInfoAction(state,{payload}){
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state,{payload}){
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state,{payload}){
      state.discountInfo = payload
    },
    changeRecommendInfoAction(state,{payload}){
      state.recommendInfo = payload
    },
    changeLongforInfoAction(state,{payload}){
      state.longforInfo = payload
    }
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchHomeDataAction.fulfilled, (state, action) => {
    //   console.log(action.payload);
    //   state.goodPriceInfo = action.payload;
    // });
  }
})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongforInfoAction
} = homeSlice.actions

export default homeSlice.reducer