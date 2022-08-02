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
        return http.post('/client/question/server/post',formData);
    }
    catch(err){
        return err;
    }
};


export async function GetClientQuestion(seq, password){
    try{
        const params = {seq, password}
        console.log(params)
        return http.post(`client/question/seq=${seq}`, params);
    }
    catch(err){
        return err;
    }
}