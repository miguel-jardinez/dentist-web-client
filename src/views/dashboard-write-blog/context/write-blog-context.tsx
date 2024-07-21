import { createContext, Dispatch, SetStateAction } from 'react'
import { initialState, InitialState, ReducerAction, writeBlogReducer } from './reducer/write-blog-reducer';

interface WriteBlogContext {
  state: InitialState;
  dispatch: React.Dispatch<ReducerAction>
}

export const WriteBlogContext = createContext<WriteBlogContext>({ 
  state: initialState,
  dispatch: () => null
});
