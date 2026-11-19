import { test, expect } from '@playwright/test';

import user from '../data/json/user.json';

test('POST user Hermione Granger', async ({ request }) => {

    const response = await request.post('user', {
        data: user
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.message).toBe(String(user.id));

});