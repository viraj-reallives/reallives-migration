import PricingPage from '@components/common/PricingPage/PricingPage';

const FAMILY_REGISTER_URL = 'https://reallivesworld.com/register-family';

export default function HomeschoolerPricing() {
  return (
    <PricingPage
      tenantType="HOMESCHOOLER"
      registerUrl={FAMILY_REGISTER_URL}
    />
  );
}
