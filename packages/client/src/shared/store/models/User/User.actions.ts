import { CombinedState } from '@reduxjs/toolkit';
import { UserState } from './User.slice';

type State = CombinedState<UserState>;
