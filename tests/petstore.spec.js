import { test, expect } from "@playwright/test";

import pet from "../data/json/pet.json";
import user from "../data/json/user.json";
import order from "../data/json/order.json";

test.describe.serial("Fluxo de venda - PetStore", () => {
  // 1 - Cadastrar Bichento
  test("Cadastrar Bichento", async ({ request }) => {
    const response = await request.post("pet", {
      data: pet,
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

  // 2 - Cadastrar Hermione Granger
  test("Cadastrar Hermione Granger", async ({ request }) => {
    const response = await request.post("user", {
      data: user,
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.code).toBe(200);
    expect(responseBody.message).toBe(String(user.id));
  });

  // 3 - Vender Bichento
  test("Vender Bichento para Hermione", async ({ request }) => {
    const response = await request.post("store/order", {
      data: order,
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.id).toBe(order.id);
    expect(responseBody.petId).toBe(pet.id);
    expect(responseBody.quantity).toBe(order.quantity);
    expect(responseBody.status).toBe(order.status);
    expect(responseBody.complete).toBe(order.complete);
  });

  // 4 - Consultar status do Bichento
  test("Consultar status do Bichento após a venda", async ({ request }) => {
    const response = await request.get(`pet/${pet.id}`);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.id).toBe(pet.id);
    expect(responseBody.name).toBe(pet.name);

    console.log("Status do Bichento após a venda:", responseBody.status);
  });

  // 5 - Consultar ordem de venda
  test("Consultar ordem de venda do Bichento", async ({ request }) => {
    const response = await request.get(`store/order/${order.id}`);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.id).toBe(order.id);
    expect(responseBody.petId).toBe(pet.id);
    expect(responseBody.quantity).toBe(order.quantity);
    expect(responseBody.status).toBe(order.status);
    expect(responseBody.complete).toBe(order.complete);

    console.log('Dados do pedido:', responseBody);
  });

  // 6 - Consultar Hermione Granger
  test("Consultar usuária Hermione Granger", async ({ request }) => {
    const response = await request.get(`user/${user.username}`);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.username).toBe(user.username);
    expect(responseBody.firstName).toBe(user.firstName);
    expect(responseBody.lastName).toBe(user.lastName);
  });
});
