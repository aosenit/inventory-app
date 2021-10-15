import { createSlice } from "@reduxjs/toolkit";

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    invoiceDetail: [],
  },

  reducers: {
    receipt: (state, { payload }) => {
      const item = state.invoiceDetail.find((inv) => inv.name === payload.name);

      if (item) {
        item.qty += payload.qty;
      } else {
        state.invoiceDetail.push(payload);
      }
    },

    clearReceipt: (state) => {
      state.invoiceDetail.length = 0;
    },

    deleteReceipt: (state, { payload }) => {
      state.invoiceDetail.splice(
        state.invoiceDetail.findIndex((arrow) => arrow.id === payload),
        1
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { receipt, clearReceipt, deleteReceipt } = invoiceSlice.actions;

export default invoiceSlice.reducer;
