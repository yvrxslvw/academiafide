import { useDispatch } from 'react-redux';
import { AppDispatch } from 'shared';

export const useAppDispatch = () => useDispatch<AppDispatch>();
