
import { test, expect } from '@playwright/test';

import pet from '../data/json/pet.json';

test('POST pet - Cadastrar Bichento', async ({ request }) => {

    const response = await request.post('pet', {
        data: pet
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    
    expect(responseBody.id).toBe(pet.id);
    expect(responseBody.name).toBe(pet.name);
    expect(responseBody.status).toBe(pet.status);
    expect(responseBody.category.id).toBe(pet.category.id);
    expect(responseBody.category.name).toBe(pet.category.name);
    expect(responseBody.photoUrls).toEqual(pet.photoUrls);
    expect(responseBody.tags).toEqual(pet.tags);

});
