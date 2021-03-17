import { Dispatch } from "redux";
import { AppThunk } from "store";
import { apiList } from "store/actionNames";
import initDefaultAction, { APIResponseDetail } from "store/helper/default-action";
import initDefaultReducer from "store/helper/default-reducer";
import initialState from "store/helper/default-state";

export type GetAllProductResponse = {

}
const initialApprovalPendingListState = initialState;
const apiDetails = Object.freeze(apiList.products.getProductList);


export default function GetAllProductReducer(state = initialApprovalPendingListState, action: DefaultAction): DefaultState<GetAllProductResponse[]> {
    const stateCopy = Object.assign({}, state);
    const actionName = apiDetails.actionName;
    return initDefaultReducer(actionName, action, stateCopy);
}


export const GetAllProductAction = (): AppThunk<APIResponseDetail<GetAllProductResponse[]>> => async (dispatch: Dispatch) => {
    return await initDefaultAction(apiDetails, dispatch, { disableSuccessToast: true });
};