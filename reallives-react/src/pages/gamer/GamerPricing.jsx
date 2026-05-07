import PricingPage from '@components/common/PricingPage/PricingPage';

const GAMER_REGISTER_URL = 'https://reallivesworld.com/register-gamer';

export default function GamerPricing() {
  return (
    <PricingPage
      tenantType="GAMER"
      registerUrl={GAMER_REGISTER_URL}
      layout="stacked"
    />
  );
}
