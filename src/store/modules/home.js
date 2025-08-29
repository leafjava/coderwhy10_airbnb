import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import {getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData} from '@/services'

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

})

const homeSlice = createSlice({
  name:"home",
  initialState:{
    page:1,
    goodPriceInfo:{},
    highScoreInfo:{},
    discountInfo:{}
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
  changeDiscountInfoAction
} = homeSlice.actions

export default homeSlice.reducer