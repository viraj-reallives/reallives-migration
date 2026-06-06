import PricingPage from '@components/common/PricingPage/PricingPage';

const UNIVERSITY_REGISTER_URL = 'https://sls.reallivesworld.com/signup/university';

export default function UniversityPricing() {
  return (
    <PricingPage
      tenantType="UNIVERSITY"
      registerUrl={UNIVERSITY_REGISTER_URL}
    />
  );
}
