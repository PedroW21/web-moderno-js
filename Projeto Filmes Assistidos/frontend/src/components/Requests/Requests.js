import { useState } from 'react';
import axios from 'axios';

const toWatchUrl = 'http://localhost:3001/toWatch'

function saveOnDb(obj, list, setState, initialState, state, keyName)
{
    console.log('in save',list)
    console.log('in save - obj',obj)

    axios.post(toWatchUrl, obj)
        .then(res => {
            const actualList = list;
            actualList.push(res.data);

            console.log('res.data', res.data);
            console.log('after push',list);

            setState({ [`${keyName}`]: {...initialState.movie}, list: actualList })
            console.log(state);
        });
}

function putOnDb(animeToPut)
{
    axios.put(`${toWatchUrl}/${animeToPut.id}`, animeToPut);
}

function removeOnDb(animeToRemove)
{
    axios.delete(`${toWatchUrl}/${animeToRemove}`);
}

function saveOnDbAnime(obj)
{
    axios.post(toWatchUrl, obj);
}

export { saveOnDb, putOnDb, toWatchUrl, removeOnDb, saveOnDbAnime };