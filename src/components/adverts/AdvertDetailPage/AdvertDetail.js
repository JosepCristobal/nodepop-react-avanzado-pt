import React from 'react';
import './AdvertDetailPage.css';
import Photo from '../../shared/Photo';
import defaultPhoto from '../../../assets/2574831-200.png';
import { Button  } from '../../shared';

const baseUrlPhoto =`${process.env.REACT_APP_API_BASE_URL}`;
function AdvertDetail({name,photo,sale,price,tags,createdAt,id,onDelete}) {
    return (
        <div>
            <div>
                <Photo src={photo ?baseUrlPhoto+photo: defaultPhoto} className="advert-centerImg advert-imgWidth" />
            </div>
            <div>
                <p>Descripción: {name}</p>
                <p>Tipo: {sale ? 'Venta':'Compra'}</p>
                <p>Precio: {price}</p>
                <p>Categoría: {tags}</p>
                <p>Publicado el: {createdAt}</p>
                <Button
                    className="loginForm-submit"
                    variant="primary"
                    onClick={()=>{ window.confirm('Realmente quiere borrar este registro?')?onDelete(id):console.log('No borrar')}}>
                    Delete
                </Button>
            </div>
        </div>
    )

};
export default AdvertDetail;