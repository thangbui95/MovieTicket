import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxSaga from "redux-saga";
import rdcBannerMovie from "./Reducers/rdcBannerMovie";
import rdcBannerShow from "./Reducers/rdcBannerShow";
import rdcBannerTheater from "./Reducers/rdcBannerTheater";
import rdcBookingDetail from "./Reducers/rdcBookingDetail";
import rdcMovie from "./Reducers/rdcMovie";
import rdcMoviePicture from "./Reducers/rdcMoviePicture";
import rdcSeatChoosing from "./Reducers/rdcSeatChoosing";
import rdcTheater from "./Reducers/rdcTheater";
import rdcTotalPrice from "./Reducers/rdcTotalPrice";
import MiddleReSa from "./Saga/MiddleReSa";
import rdcPaymentInfo from "./Reducers/rdcPaymentInfo";
import rdcComboChoosing from "./Reducers/rdcComboChoosing";
import rdcCinemaMovie from "./Reducers/rdcCinemaMovie";
import rdcCinemaKey from "./Reducers/rdcCinemaKey";

const middleware = reduxSaga();

const globalState = combineReducers({
    movieshowManage: rdcMovie,
    movietheaterManage: rdcTheater,
    bannermovieManage: rdcBannerMovie,
    bannertheaterManage: rdcBannerTheater,
    bannershowManage: rdcBannerShow,
    moviepictureManage: rdcMoviePicture,
    bookingdetailManage: rdcBookingDetail,
    totalpriceManage: rdcTotalPrice,
    seatchoosingManage: rdcSeatChoosing, //rdc ghế đã chọn
    paymentinfoManage: rdcPaymentInfo, //rdc toàn bộ thông tin thanh toán
    combochoosingManage: rdcComboChoosing, //rdc combo đã chọn
    movieManage:rdcCinemaMovie,
    moviekeyManage:rdcCinemaKey

})

const store = createStore(
    globalState,
    applyMiddleware(middleware)
)

export default store
middleware.run(MiddleReSa)