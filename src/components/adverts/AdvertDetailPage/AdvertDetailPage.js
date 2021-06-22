import React from 'react';
import Layout from '../../layout/Layout';
import './AdvertDetailPage.css';
import Photo from '../../shared/Photo';
import { Redirect, useParams} from 'react-router-dom';
import { Button  } from '../../shared';
import { advertsDetailAction, advertDeledAction } from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertDetailSelector, getAdvertDetail, getUi} from '../../../store/selectors'
import defaultPhoto from '../../../assets/2574831-200.png'
import AdvertDetail from './AdvertDetail';


// const AdvertDetailPage = ({ className, ...props }) =>{
// const AdvertDetailPage = ({ ...props }) =>{
function AdvertDetailPage() {
  const { advertId } = useParams();
  //const { match } = props;
  
  //const advertId = match.params.advertId

  console.log('Id del anuncio: ',advertId)
  //const ad2 = useSelector(getAdvertDetailSelector(advertId));
  const advert = useSelector(state=>getAdvertDetail(state,advertId));
  //console.log('Resultado de ad2: ', ad2)

  const dispatch = useDispatch();
  
  React.useEffect(()=>{
    dispatch(advertsDetailAction(advertId)); 
    console.log('Hemos pasado por el useEffect')
  },[dispatch, advertId]);
 

  const { loading, error } = useSelector(getUi);
  const handlerDelete = async (idAdvert) =>{
    alert(`Va a borrar el registro núm. ${idAdvert}`)
    try {
      const advertDel = await dispatch(advertDeledAction(idAdvert))
      console.log ('En delete AdvertDel', advertDel)
    } catch (error) {
      console.log(error)
    }
  }

  const baseUrlPhoto =`${process.env.REACT_APP_API_BASE_URL}`;

  //TODO Repasarlo
  // if (error && error.status === 404) {
  //     return <Redirect to="/404" />;
  // }
  if (error?.statusCode === 401) {
    return <Redirect to="/login" />;
  }

  if (error?.statusCode === 404) {
    return <Redirect to="/404" />;
  }
 const redir = `/adverts/${advertId}`
  //if (!advert) return <Redirect to = {redir} />;
  
  console.log('El anuncio que se ha encontrado: ',advert)
  return (
    <Layout title="Detalle del anuncio" > 
      {advert && <AdvertDetail {...advert} onDelete={handlerDelete} />}
      
    </Layout>
  );
}

export default AdvertDetailPage;

{/* <div>
        <Photo src={advert.photo ?baseUrlPhoto+advert.photo: defaultPhoto} className="advert-centerImg advert-imgWidth" />
      </div>
      <div>
        <p>Descripción: {advert.name}</p>
        <p>Tipo: {advert.sale ? 'Venta':'Compra'}</p>
        <p>Precio: {advert.price}</p>
        <p>Categoría: {advert.tags}</p>
        <p>Publicado el: {advert.createdAt}</p>
        <Button
              className="loginForm-submit"
              variant="primary"
              onClick={()=>{ window.confirm('Realmente quiere borrar este registro?')?handlerDelete(advert.id):console.log('No borrar')}}>
              Delete
          </Button>
      </div> */}