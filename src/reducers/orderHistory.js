import { CANCEL } from "../actions/index";

const initialState = {
  orderHistoryImagePath: "",
  orderHistoryName: "Hawaiianパラダイス",
  orderHistoryPrice: `${2160}円`,
  orderHistoryTopping: "ハワイアンソルト",
  orderHistoryToppingPrice: `${200}円`,
  orderHistorySmallTotalPrice: `${2360}円`,
  orderHistorySmallTotalTax: `${10}円`,
  orderHistoryItemCount: `${1}個`,
  orderHistoryDestinationTime: "2020/5/1",
};

export default (state = initialState, action) => {
    console.log(state)
    console.log('通過しました')
  switch (action.type) {
      case CANCEL:
      return state;
    default:
      return state;
  }
};

