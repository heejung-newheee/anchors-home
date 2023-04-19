import { Helmet, HelmetProvider } from 'react-helmet-async';

import jquery from '@/helper/libs/jqueryLoader';
import variables from '@/public/assets/scss/_variables.module.scss';

export const initHelper = () => ({ variables, jquery, Helmet, HelmetProvider });
