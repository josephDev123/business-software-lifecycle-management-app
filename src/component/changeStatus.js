import React from 'react';
import { data } from './data';

export function changeStatusToBacklog() {

    return data.filter(item=> item.status ==='backlog');
}

export function changeStatusToProgress(){
    return data.filter(item=> item.status ==='progress');
}

export function changeStatusToProduction(){
    return data.filter(item=> item.status ==='production');
}