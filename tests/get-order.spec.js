import { test, expect } from '@playwright/test';

test('GET order - Consultar venda do Bichento', async ({ request }) => {

    const response = await request.get('store/order/29385530');

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.id).toBe(29385530);
    expect(responseBody.petId).toBe(29385528);

    console.log('Dados da ordem de venda:', responseBody);

});