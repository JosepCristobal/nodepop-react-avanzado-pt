

const filterByName = (advert, filterSearch) => {
    if (!filterSearch.name)return true;

    return advert.name.toLowerCase().includes(filterSearch.name.toLowerCase()) ;
};

const filterBySale= (advert,filterSearch) => {
    if(filterSearch.todos){
        return true
    } else {
        return advert.sale===filterSearch.sale ;
    } 
};

const filterByTags= (advert,filterSearch) => {
   //El filtro de los tags retornará true aunque sólo haya una coincidenia de varios valores.
    if(!filterSearch.tags.length) return true

    const filters = filterSearch.tags;
    const arr = advert.tags;
    
    const checker = value => filters.some(element => value.includes(element));
    
     if (arr.filter(checker).length) return true;
     return false

}

const filterByPrice = (advert,filterSearch) =>{
    const min = filterSearch.price
    const max = filterSearch.priceEnd
    if (min===0 && max===0) return true;
    if (max>=min) {
        //console.log('Precio', advert.price)
        return advert.price>=min && advert.price<=max
    };

}
   
export const filtersAdverts = (adverts, filterSearch) => {
    return adverts.filter (advert => {
        return (
            filterByName(advert, filterSearch) &&
            filterBySale(advert, filterSearch) &&
            filterByTags(advert, filterSearch) &&
            filterByPrice(advert, filterSearch)        
        );
    });
  };

