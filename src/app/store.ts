import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { reducer as useResourceReducer } from "@alexjamesmalcolm/use-resource";

export const store = configureStore({
  reducer: {
    useResource: useResourceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
