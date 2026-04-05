import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// fetch all products or by category
export const fetchProductByCategory = createAsyncThunk(
  "product/fetchProducts",
  async (category) => {
    if (category === "all") {
      const { data } = await axios.get(
        "https://dummyjson.com/products?limit=500",
      );
      return data.products;
    } else {
      const { data } = await axios.get(
        `https://dummyjson.com/products/category/${category}?limit=500`,
      );
      return data.products;
    }
  },
);

// fetch single products by id
export const fetchSingleProduct = createAsyncThunk(
  "product/fetchSingleProduct",
  async (id) => {
    const { data } = await axios.get(
      `https://dummyjson.com/products/${id}`,
    );
    return data;
  },
);

const initialState = {
  items: [],
  singleProduct: null,
  status: undefined,
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProductByCategory.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchProductByCategory.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    });
    builder.addCase(fetchProductByCategory.rejected, (state) => {
      state.status = "error";
      state.error = "true";
    });
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.singleProduct = action.payload;
    });
  },
});

export default productSlice.reducer;
