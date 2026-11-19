import { test, expect } from '@playwright/test';

test('GET pet - Consultar status do Bichento', async ({ request }) => {

    const response = await request.get('pet/29385528');

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.id).toBe(29385528);

    console.log('Status do Bichento:', responseBody.status);

});