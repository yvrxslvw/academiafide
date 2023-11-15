import { rootReducer } from './rootReducer';
import { setupStore } from './setupStore';

type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
