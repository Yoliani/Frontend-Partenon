import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {getUser} from '../services/authentication';

const useAuth = () => {
  const router = useRouter();
  const token = getUser();
  useEffect(() => {
    if (token) {
      return;
    }
    //router.push('login');
  }, [token, router]);
};

export default useAuth;
