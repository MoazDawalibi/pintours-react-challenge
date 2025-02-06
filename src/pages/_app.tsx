import Layout from "@/components/Layout";
import ProviderContainer from "@/ProviderContainer";
import { CustomAppProps } from "@/types/App";
import TabHeader from "@/components/TabHeader";
import "@/styles/App/index.scss";
import "@/styles/global.scss";

export default function App({ Component, pageProps }: CustomAppProps) {

  return (
    <>
      <TabHeader/>
      <ProviderContainer>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProviderContainer>
    </>
  );
}
