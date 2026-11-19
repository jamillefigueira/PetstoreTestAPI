import { test, expect } from '@playwright/test';

import order from '../data/json/order.json';

test('POST order - Vender Bichento', async ({ request }) => {

    const response = await request.post('store/order', {
        data: order
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.petId).toBe(order.petId);
    expect(responseBody.quantity).toBe(order.quantity);
    expect(responseBody.status).toBe(order.status);
    expect(responseBody.complete).toBe(order.complete);

});