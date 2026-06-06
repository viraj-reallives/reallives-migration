import PricingPage from '@components/common/PricingPage/PricingPage';

const SCHOOL_REGISTER_URL = 'https://sls.reallivesworld.com/signup/school';

export default function SchoolPricing() {
  return (
    <PricingPage tenantType="SCHOOL" registerUrl={SCHOOL_REGISTER_URL} />
  );
}
