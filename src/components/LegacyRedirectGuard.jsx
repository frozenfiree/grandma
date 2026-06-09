import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LEGACY_REDIRECTS } from '../routes';

// Intercepts any old readable URL and permanently redirects to the obfuscated path.
const LegacyRedirectGuard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const target = LEGACY_REDIRECTS[location.pathname];
    if (target) {
      navigate(target, { replace: true });
    }
  }, [location.pathname, navigate]);

  return null;
};

export default LegacyRedirectGuard;
