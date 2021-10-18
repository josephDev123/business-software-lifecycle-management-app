import React from 'react';
import { data } from './data';

export function changeStatusToBacklog() {

    return data.filter(item=> item.status ==='backlog');
}
