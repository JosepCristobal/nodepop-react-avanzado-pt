import React from 'react';
import T from 'prop-types';
import { Button, FormField, RadioField} from '../../shared';
import TagsAvailable from '../NewAdvertPage/TagsAvailable'
import AdvertsList from './AdvertsList'
import { Link } from 'react-router-dom';


const AdvertSearch =({adverts})=>{
    const EmptyList = () => (
        <div style={{ textAlign: 'center' }}>
          <p>Be the first Ad!</p>
          <Button as={Link} to="/advert" variant="primary">
            Crear Anuncio
          </Button>
        </div>
      );
    const filterInitial = {
      tags:[],
      sale: true,
      todos: true,
      name:'',
      price:0,
      priceEnd:0
    }
      
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState(0);
    const [tags, setTags] = React.useState([]);
    const [sale, setSale] = React.useState('Todos');
    const [priceEnd, setPriceEnd]= React.useState(0);
    const [filterData, setFilterData] = React.useState(filterInitial);

    
    const handleChangePrice = (e) => {
        setPrice(e.target.value); 
        //if (parseInt(price,10)>parseInt(priceEnd,10)) 
        setPriceEnd(e.target.value)
      };

      const handleChangePriceEnd = (e) => {
        setPriceEnd(e.target.value); 
        //if (price>priceEnd) setPriceEnd(e.target.value)
      };

    const handleChangeName = (e) => {
        setName(e.target.value)
      };
    const handleChangeCheck = (e) => {
      setSale(e.target.value)
    };
    
    const handleTagChange = (e) => {
        let options = e.target.options;
        let selectedOptions = [];
        for(let i = 0; i < options.length; i++) {
            if( options[i].selected ) {
                selectedOptions.push(options[i].value);
            }
        }
        setTags(
            oldValue => ({
                ...oldValue,
                selectedOptions,
            }));     
    }
    const handleFormSubmit = (ev) => {
      ev.preventDefault();
      resultFilterData()
      };
    const handleResetFilter = (ev) => {
      ev.preventDefault();
      setFilterData(filterInitial)
      setName('');
      setPrice(0);
      setTags([]);
      setSale('Todos');
      setPriceEnd(0);
    };
    
    const resultFilterData = ()=>{
      const resultReturn = {tags: tags.selectedOptions || []}
      const sales = {sale: sale === 'Venta' ? true:false};
      const ventaCompra = {todos: sale === 'Todos' ? true:false};
      const nombre = {name:name};
      const importeD = {price:price}
      const importeHasta = {priceEnd:priceEnd};
      const filterAdvert = Object.assign(nombre,resultReturn,sales,ventaCompra,importeD,importeHasta)
      setFilterData(filterAdvert) 
    }   

return (

    <div>
    <form className="newAdvertForm" onSubmit={handleFormSubmit}>
        <FormField
            type="text"
            name="name"
            label="Nombre"
            className="loginForm-field"
            value={name}
            onChange={handleChangeName}
            autofocus
        />
        <div >
        <RadioField
            type="radio"
            name="sale"
            label="Compra"
            className="loginForm-field"
            value='Compra'
            checked= {sale ==='Compra'}
            onChange={handleChangeCheck}
        />
        <RadioField
            type="radio"
            name="sale"
            label="Venta"
            className="loginForm-field"
            value='Venta'
            checked= {sale ==='Venta'}
            onChange={handleChangeCheck}
        />
        <RadioField
            type="radio"
            name="sale"
            label="Todos"
            className="loginForm-field"
            value='Todos'
            checked= {sale ==='Todos'}
            onChange={handleChangeCheck}
        />
        </div>
        <FormField
            type="number"
            name="price"
            label="Precio desde"
            className="loginForm-field"
            value={price}
            onChange={handleChangePrice}
           
        />
        <FormField
            type="number"
            name="priceEnd"
            label="Precio hasta"
            className="loginForm-field"
            value={priceEnd}
            onChange={handleChangePriceEnd}
            
        />
        <TagsAvailable
            labels="Clasificación de anuncios"
            selected ={[tags]}
            onChange={handleTagChange}
        />
        
        <Button
            type="submit"
            className="loginForm-submit"
            variant="primary"
            onClick = {handleResetFilter}
        >
            Reset Filter
        </Button>
        <Button
            className="loginForm-submit"
            variant="primary"
            onClick = {handleFormSubmit}
            >
            Búsqueda controlada    
        </Button>

    </form>
    <div className="advertsPage">
        {adverts.length ? <AdvertsList items = {adverts}
                          filtro= {filterData} />: <EmptyList />}
    </div>
</div>
  );
}
AdvertSearch.propTypes = {
  price: T.number,
  priceEnd: T.number
}

export default AdvertSearch;