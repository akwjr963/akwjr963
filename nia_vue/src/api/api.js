import http from './http';

/**
 * 
 * API REQUEST
 * 
 */

//list 받아오기
export async function PostQuestionList(formData){
    try {
        
        console.log('/client/question/server/post');
        return http.post('/client/question/server/post', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }
    catch(err){
        return err;
    }
};


export async function GetClientQuestion(seq, userPassword){
    try{
        const params = {seq, userPassword}
        console.log(params)
        console.log(`client/question/${seq}`)
        return http.post(`client/question/${seq}`, params);
    }
    catch(err){
        return err;
    }
};

export async function GetCityAddress(location,data){
    try{
        console.log(location)
        console.log('client/address/?location1');
        return http.get(`client/address/?location1=${location}`,data);
    }
    catch(err){
        return err;
    }
};
export async function GetOfficeAddress(location,data){
    try{
        console.log(location)
        console.log('client/address/?location2');
        return http.get(`client/address/?location2=${location}`,data);
    }
    catch(err){
        return err;
    }
}