import { studentFormInitialState } from '../reducer/student-form-reducer';
import { GetStudentDetailProps } from '../types';
import { useGetStudentDetailQuery } from '../api/student-api';

const initialState: GetStudentDetailProps = { ...studentFormInitialState, id: 0, reporterName: '' };
export const useGetStudentDetail = (id: string | undefined) => {
  // Subscribe to the live cached query result so the screen updates automatically
  // when the student is mutated. RTK Query invalidates the STUDENTS tag on update
  // and refetches; reading `data` here reflects that, unlike a one-time snapshot
  // copied into local state (which only refreshed when `id` changed).
  const { data } = useGetStudentDetailQuery(id);
  return data ?? initialState;
};
