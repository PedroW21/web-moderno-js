import { useState, useEffect } from 'react';
import axios from 'axios';

const toWatchUrl = 'http://localhost:3001/toWatch'

function saveOnDb(obj)
{
    axios.post(toWatchUrl, obj);
}

function putOnDb(animeToPut)
{
    axios.put(`${toWatchUrl}/${animeToPut.id}`, animeToPut);
}

function removeOnDb(animeToRemove)
{
    axios.delete(`${toWatchUrl}/${animeToRemove}`);
}

export { saveOnDb, putOnDb, toWatchUrl, removeOnDb };