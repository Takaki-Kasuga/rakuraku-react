import { CANCEL, SET_ORDERS } from "../actions/index";


const initialState =
{
    orderHistoryImagePath: "",
    orderHistoryName: "Hawaiianパラダイス",
    orderHistoryPrice: `${2160}円`,
    orderHistoryTopping: "ハワイアンソルト",
    orderHistoryToppingPrice: `${200}円`,
    orderHistorySmallTotalPrice: `${2360}円`,
    orderHistorySmallTotalTax: `${10}円`,
    orderHistoryItemCount: `${1}個`,
    orderHistoryDestinationTime: "2020/5/1",
}
// {
//   orderHistoryImagePath: "",
//   orderHistoryName: "Hawaiianパラダイス",
//   orderHistoryPrice: `${2160}円`,
//   orderHistoryTopping: "ハワイアンソルト",
//   orderHistoryToppingPrice: `${200}円`,
//   orderHistorySmallTotalPrice: `${2360}円`,
//   orderHistorySmallTotalTax: `${10}円`,
//   orderHistoryItemCount: `${1}個`,
//   orderHistoryDestinationTime: "2020/5/1",
// }

const hoge = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDERS:
            console.log('SET_ORDERSが発火しました。')
            return [
                ...state,
                { orderHistoryImagePath: action.orderInfomationList },
            ];
        default:
            return state;

    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CANCEL:
            console.log('CANCELが発火しました。')
            return state;
        default:
            return state;
    }
};

