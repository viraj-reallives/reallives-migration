import PricingPage from '@components/common/PricingPage/PricingPage';

const GAMER_REGISTER_URL = 'https://sls.reallivesworld.com/signup/gamer';

export default function GamerPricing() {
  return (
    <PricingPage
      tenantType="GAMER"
      registerUrl={GAMER_REGISTER_URL}
      layout="stacked"
    />
  );
}
