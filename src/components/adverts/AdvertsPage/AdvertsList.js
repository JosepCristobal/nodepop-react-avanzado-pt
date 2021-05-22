import React from 'react';
import T from 'prop-types';
import Advert, { advertType } from './Advert';
import { filtersAdverts } from './filters';

const AdvertsList = ({items,filtro}) => {

  const filteredData =  filtersAdverts(items,filtro);
  
  const itemsR = filteredData.map(data=>{
    return(
    <div key={data.id}>
      <ul className="advertsList">
        <li key={data.id}>
            <Advert
              {...data}
            />
        </li>
    </ul>
    </div>
    )
  })

  return(<div>{itemsR}</div>)

};

AdvertsList.propTypes = {
  adverts: T.arrayOf(T.shape(advertType)),
};

export default AdvertsList;
