import { changeIndex } from "../State/anime/heroIndexSlice";

export const heroIndex = (index) => (dispatch) => {
    dispatch(changeIndex(index));
};
