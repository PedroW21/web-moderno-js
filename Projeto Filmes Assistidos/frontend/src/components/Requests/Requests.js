import { useState } from "react";
import axios from "axios";

const toWatchUrl = "http://localhost:3001/toWatch";

function saveOnDb(obj, list, setState, initialState, state, keyName) {

  axios.post(toWatchUrl, obj).then((res) => {
    const actualList = list;
    actualList.push(res.data);

    setState({ [`${keyName}`]: { ...initialState[`${keyName}`] }, list: actualList });
  });
}

function putOnDb(animeToPut) {
  axios.put(`${toWatchUrl}/${animeToPut.id}`, animeToPut);
}

function removeOnDb(animeToRemove) {
  axios.delete(`${toWatchUrl}/${animeToRemove}`);
}

export { saveOnDb, putOnDb, toWatchUrl, removeOnDb };
