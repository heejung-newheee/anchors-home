import variables from '@/public/assets/scss/_variables.module.scss';
import jquery from '@/helper/libs/jquery_loader'
import { Helmet, HelmetProvider } from 'react-helmet-async';

export const initHelper = () => ({  variables, jquery , Helmet , HelmetProvider });