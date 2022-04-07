import { UserActionType } from "../Constants/UserActionType";

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case UserActionType.USER_LOGIN_REQUEST:
            return { loading: true };
        case UserActionType.USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload };
    }

}