export const getIsLogged = state => state.auth;

export const getAdverts = state => 
    state.adverts.data.sort((t1, t2) =>{
        if(t1.updatedAt < t2.updatedAt) return 1;
        return -1;
    });
export const getAdvertsLoaded = state => state.adverts.loaded;
export const getUi = state => state.ui;
export const getTags = state => state.tags;
export const getTagsLoaded = state => state.tags.length;
export const getAdvertDetailSelector = (advertId)=>(state) => state.adverts.data.find(advert => advert.id === advertId);
export const getAdvertDetail = (state, advertId) =>
  state.adverts.data.find(advert => advert.id === advertId);