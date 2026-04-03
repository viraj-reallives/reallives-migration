import { useContext } from 'react';
import SiteContext from '@context/SiteContext';
import { schoolContent } from '@content/school';
import { universityContent } from '@content/university';
import { homeschoolerContent } from '@content/homeschooler';
import { gamerContent } from '@content/gamer';

const contentMap = {
  school: schoolContent,
  university: universityContent,
  homeschooler: homeschoolerContent,
  gamer: gamerContent,
};

export function useSiteContent() {
  const { siteKey } = useContext(SiteContext);
  return contentMap[siteKey] || {};
}

