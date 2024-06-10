import { Layout, LegacyCard, Page } from "@shopify/polaris";
import { Card, ProductDetails, ProductGraph } from "../components";

export default function HomePage() {
  return (
    <Page fullWidth>
      <div className="home-section">
        <div className="graphs-section">
          
       <ProductGraph/>
        </div>
        <div className="cards-section">
          <Layout>
            <Card title="Products" />
            <Card title="Ingrediants" />

          </Layout>
        </div>
        <div className="order-details-section"><ProductDetails /></div>
      </div>
    </Page>
  );
}
