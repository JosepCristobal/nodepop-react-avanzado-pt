import React from 'react';
import Layout from '../../layout/Layout';
import './AdvertDetailPage.css';
import { Redirect, useParams} from 'react-router-dom';
import { advertsDetailAction, advertDeledAction } from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertDetail, getUi} from '../../../store/selectors'
import AdvertDetail from './AdvertDetail';


function AdvertDetailPage() {
  const { advertId } = useParams();
  const advert = useSelector(state=>getAdvertDetail(state,advertId));
  const dispatch = useDispatch();
  
  React.useEffect(()=>{
    dispatch(advertsDetailAction(advertId)); 
  },[dispatch, advertId]);
 

  const { error } = useSelector(getUi);
  const handlerDelete = async (idAdvert) =>{
    alert(`Va a borrar el registro núm. ${idAdvert}`)
    try {
      const advertDel = await dispatch(advertDeledAction(idAdvert))
    } catch (error) {
      console.error(error)
    }
  }

  if (error?.statusCode === 401) {
    return <Redirect to="/login" />;
  }

  if (error?.statusCode === 404) {
    return <Redirect to="/404" />;
  }
 
  return (
    <Layout title="Detalle del anuncio" > 
      {advert && <AdvertDetail {...advert} onDelete={handlerDelete} />}
      
    </Layout>
  );
}

export default AdvertDetailPage;
