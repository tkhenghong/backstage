import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
import {
  activateBranch,
  deactivateBranch,
  getBranches,
  getBranchInfo,
  updateBranch,
} from '../../api/branch'

const initialState = {
  value: 0,
  status: 'idle',
  branches: [],
  branch: {
    operationStartTime: moment().toISOString(),
    operationEndTime: moment().toISOString(),
    lunchStartTime: moment().toISOString(),
    lunchEndTime: moment().toISOString(),
    serviceOptions: [
      {
        name: 'Bank account opening, debit card and account related services',
        tip: 'Tooltip content',
        description: `<strong>This is the first item&#39;s accordion body.</strong> It is hidden by
    default, until the collapse plugin adds the appropriate classes that we use to
    style each element. These classes control the overall appearance, as well as
    the showing and hiding via CSS transitions. You can modify any of this with
    custom CSS or overriding our default variables. It&#39;s also worth noting
    that just about any HTML can go within the <code>.accordion-body</code>,
    though the transition does limit overflow.`,
        enabled: false,
      },
      {
        name: 'Online banking and activate account opened online',
        tip: 'Tooltip content',
        description: `<strong>This is the second item&#39;s accordion body.</strong> It is hidden by
  default, until the collapse plugin adds the appropriate classes that we use to
  style each element. These classes control the overall appearance, as well as
  the showing and hiding via CSS transitions. You can modify any of this with
  custom CSS or overriding our default variables. It&#39;s also worth noting
  that just about any HTML can go within the <code>.accordion-body</code>,
  though the transition does limit overflow.`,
        enabled: true,
      },
    ],
  },
}

export const load = createAsyncThunk('branch/load', async (filter) => {
  const response = await getBranches(filter)
  return response.data
})

export const loadBranchInfo = createAsyncThunk('branch/loadBranchInfo', async (branchId) => {
  const response = await getBranchInfo(branchId)
  return response.data
})

export const activate = createAsyncThunk('branch/activate', async (branchId) => {
  const response = await activateBranch(branchId)
  return response.data
})

export const deactivate = createAsyncThunk('branch/deactivate', async (branchId) => {
  const response = await deactivateBranch(branchId)
  return response.data
})

// Update operation/Lunch time/end time
// Add manager name and email in branch manager list
// Activate/deactivate service type in branch service list
export const update = createAsyncThunk('branch/update', async (branchId, payload) => {
  const response = await updateBranch(branchId, payload)
  return response.data
})

export const branchSlice = createSlice({
  name: 'branch',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(load.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(load.fulfilled, (state, action) => {
        state.status = 'idle'
        state.branches = action.payload
      })
      .addCase(loadBranchInfo.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loadBranchInfo.fulfilled, (state, action) => {
        state.status = 'idle'
        state.branch = action.payload
      })
  },
})

export const selectBranches = (state) => state.branch.branches

export const selectBranch = (state) => state.branch.branch

export default branchSlice.reducer
