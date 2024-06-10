import { Layout, LegacyCard } from "@shopify/polaris";

export function ProductGraph () {
  return (
    <div>
         <Layout>
            <Layout.Section oneHalf>
              <LegacyCard title="All Products" sectioned>
                <p>View a summary of your online store's products.</p>
              </LegacyCard>
            </Layout.Section>
            <Layout.Section oneThird>
              <LegacyCard title="All Ingrediants" sectioned>
                <p>View a summary of your online store's products.</p>
              </LegacyCard>
            </Layout.Section>
            <Layout.Section oneThird>
              <LegacyCard title="All Data" sectioned>
                <p>View a summary of your online store's products.</p>
              </LegacyCard>
            </Layout.Section>
          </Layout>
    </div>
  );
}