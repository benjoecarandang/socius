import React from "react";
import { AuthContextProvider } from "./AuthContext";
import {
  useQuery,
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const AppProviders = ({ children }) => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export { AppProviders };
