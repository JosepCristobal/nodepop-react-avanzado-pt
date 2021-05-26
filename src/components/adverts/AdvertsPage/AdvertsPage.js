import React from 'react';
import { getLatestAdverts } from '../../../api/adverts';
//import scopedStyles from './TweetsPage.module.css';
import {useDispatch, useSelector} from 'react-redux'
import Layout from '../../layout/Layout';
import './AdvertsPage.css';
import AdvertSearch from './AdvertSearch';
import { getAdverts } from '../../../store/selectors';
import { advertsLoaded } from '../../../store/actions';

// const EmptyList = () => (
//   <div style={{ textAlign: 'center' }}>
//     <p>Be the first Ad!</p>
//     <Button as={Link} to="/advert" variant="primary">
//       Crear Anuncio
//     </Button>
//   </div>
// );

const AdvertsPage = ({ className, ...props }) => {
  // const [adverts, setAdverts] = React.useState([]);
  const dispatch = useDispatch();
  const adverts = useSelector(getAdverts)
  React.useEffect(() => {
    getLatestAdverts().then(adverts => dispatch(advertsLoaded(adverts)));
  }, []);
 //Filtrado de anuncios
  return (
    <Layout title="Encuentra u ofrece lo que más te interesa" {...props}>
      <div>
        <AdvertSearch adverts={adverts}{...props}>
  
        </AdvertSearch>
      </div>
      {/* <div className="advertsPage">
        {adverts.length ? <AdvertsList adverts={adverts} /> : <EmptyList />}
      </div> */}
    </Layout>
  );
};

export default AdvertsPage;