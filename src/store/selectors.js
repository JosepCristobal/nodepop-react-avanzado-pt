export const getIsLogged = state => state.auth;

export const getAdverts = state => 
    state.adverts.sort((t1, t2) =>{
        if(t1.updateAt < t2.updateAt) return 1;
        return -1;
    });
export const getAdvertsLoaded = state => state.adverts.length;

export const getUi = state => state.ui;

export const getTags = state => state.tags;
export const getTagsLoaded = state => state.tags.length;

//export const getAdvertDetailSelector = (state, advertId) => state.adverts.find(advert => advert.id === advertId);
export const getAdvertDetailSelector = (advertId)=>(state) => state.adverts.find(advert => advert.id === advertId);
//export const getAdvertDetailSelector = state => state.advert;