import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Layout from '../../layout/Layout';
import './AdvertsPage.css';
import AdvertSearch from './AdvertSearch';
import { getAdverts } from '../../../store/selectors';
import { advertsLoadAction} from '../../../store/actions';


const AdvertsPage = ({ ...props }) => {

  const dispatch = useDispatch();
  const adverts = useSelector(getAdverts)
  React.useEffect(() => {
    dispatch(advertsLoadAction());
  }, [dispatch]);
 //Filtrado de anuncios
  return (
    <Layout title="Encuentra u ofrece lo que más te interesa" {...props}>
      <div>
        <AdvertSearch adverts={adverts}{...props}>
  
        </AdvertSearch>
      </div>
    </Layout>
  );
};

export default AdvertsPage;