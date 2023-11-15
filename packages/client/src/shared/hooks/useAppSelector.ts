import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from 'shared';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
