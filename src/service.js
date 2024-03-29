const queryStrings ={
    app_id: process.env.REACT_APP_APP_ID,
    app_key: process.env.REACT_APP_APP_KEY
}
//https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=16d05007&app_key=b156dd4433445da50ae393e77dc95f76
export const fetchData = async(defaultQuery) =>{
    const{app_id,app_key}= queryStrings;
    try {
        const datd= await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery} &app_id=${app_id}&app_key=${app_key}`);
        const response= await datd.json();
        return response;
    } catch (e) {
        console.log(e,'something went wrong')
        return e
    }
}

export const fetchTabData = async(defaultQuery) =>{
    const{app_id,app_key}= queryStrings;
    try {
        const datd= await fetch(`https://api.edamam.com/api/recipes/v2/${defaultQuery}?type=public&app_id=${app_id}&app_key=${app_key}`);
        const response= await datd.json();
        return response;
    } catch (e) {
        console.log(e,'something went wrong')
        return e
    }
}