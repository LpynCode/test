import { $api } from '.';

export const getAllUsers = async () => {
    const users = await $api.get('');
    return users.data;
}

export const getUsersByName = async (name: string) => {
    const users = await $api.get(`?term=${name}`);
    return users.data;
}