import axios from "axios";

const instance = axios.create({
    baseURL: `https://backend-classroomm.herokuapp.com/api`
});

export const getClasses = ()=>instance({
    'method':'GET',
    'url':'/classroom/all',
    transformResponse: [(data) => JSON.parse(data)]
})

export const createClasses = (classroom)=>instance({
    'method':'POST',
    'url':'/classroom/create',
    'data':classroom,
    transformResponse: [(data) => JSON.parse(data)]
})