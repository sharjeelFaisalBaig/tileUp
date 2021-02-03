import React, { Component } from 'react';
export const API = {
    PROCESS_IMAGE: 'https://api.tile-up.pk/FILE_UPLOAD_API.php?AccessToken=XXXXXXXXXXXXXXXXXXZAKTILE1926192012sdhsajdhsadjisajdisadksaoeowque843psadUDERPsdsss',
    UPLOAD_IMAGE: 'https://api.tile-up.pk/FILE_UPLOAD_API.php?AccessToken=XXXXXXXXXXXXXXXXXXZAKTILE1926192012sdhsajdhsadjisajdisadksaoeowque843psad',
    DELETE_IMAGE: 'https://api.tile-up.pk/FILE_UPLOAD_API.php?AccessToken=XXXXXXXXXXXXXXXXXXZAKTILE1926192012sdhsajdhsadjisajdisadksaoeowque843psadDELIMG',
    DELETE_IMAGE_ALL: 'https://api.tile-up.pk/FILE_UPLOAD_API.php?AccessToken=XXXXXXXXXXXXXXXXXXZAKTILE1926192012sdhsajdhsadjisajdisadksaoeowque843psadDELIMGAll',
    EMAIL_SYSTEM: 'https://api.tile-up.pk/EMAIL_SYSTEM.php?key=XXXXXXXXXXXXXXXXXXZAKTILE1926192012sdhsajdhsadjisajdisadksaoeowque843psadTilesdsdsdUP'
}
export const getLocalStorage = () => {
    if (localStorage.getItem('codeOfUser')) {
        let session = {
            existance: true,
            nameOfUser: localStorage.getItem('nameOfUser'),
            emailOfUser: localStorage.getItem('emailOfUser'),
            filesOfUser: JSON.parse(localStorage.getItem('filesOfUser')),
            codeOfUser: localStorage.getItem('codeOfUser')
        }
        return session;
    } else {
        return {
            existance: false
        };
    }
}
export const setLocalStorage = (dataArray) => {
    if (dataArray.status == 'success') {
        localStorage.setItem('nameOfUser', dataArray.session.name)
        localStorage.setItem('emailOfUser', dataArray.session.email)
        localStorage.setItem('filesOfUser', JSON.stringify(dataArray.session.images))
        localStorage.setItem('codeOfUser', dataArray.session.CurrCode)
    }
}

export const setImageLocalStorage = (imgToSet) => {
    localStorage.setItem('filesOfUser', JSON.stringify(imgToSet))
}

export const setCheckoutData = (dataset) => {
    if (dataset.status) {
        localStorage.setItem('nameOfUser', dataset.name);
        localStorage.setItem('emailOfUser', dataset.email);
        localStorage.setItem('filesOfUserCheck', JSON.stringify(dataset.imgs));
        return true;
    } else {
        return false;
    }

}

export const getCheckoutFiles = () => {
    if (localStorage.getItem('codeOfUser')) {
        let session = {
            existance: true,
            filesOfUserFinal: JSON.parse(localStorage.getItem('filesOfUserCheck')),
        }
        return session;
    } else {
        return {
            existance: false
        };
    }
}