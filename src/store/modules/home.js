import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import {getHomeGoodPriceData, getHomeHighScoreData} from '@/services'

export const fetchHomeDataAction =  createAsyncThunk("fetchdata",(payload, {dispatch, getState})=>{
  // const state = getState()

  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })
  // return res

  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })

})

const homeSlice = createSlice({
  name:"home",
  initialState:{
    page:1,
    goodPriceInfo:{},
    highScoreInfo:{}
  },
  reducers:{
    changeGoodPriceInfoAction(state,{payload}){
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state,{payload}){
      state.highScoreInfo = payload
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
  changeHighScoreInfoAction
} = homeSlice.actions

export default homeSlice.reducer