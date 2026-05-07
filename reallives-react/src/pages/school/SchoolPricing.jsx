import PricingPage from '@components/common/PricingPage/PricingPage';

const SCHOOL_REGISTER_URL = 'https://reallivesworld.com/register-school';

export default function SchoolPricing() {
  return (
    <PricingPage tenantType="SCHOOL" registerUrl={SCHOOL_REGISTER_URL} />
  );
}
