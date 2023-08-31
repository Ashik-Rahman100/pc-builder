import RootLayout from "@/components/Layout/RootLayout";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store = {store}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </Provider>
    </SessionProvider>
  );
}
