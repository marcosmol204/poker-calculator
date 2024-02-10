import { expect, test } from "vitest";

import { calculatePayments } from "../src/logic/calculatePayments";

// Test case for a scenario where total chips are greater than total bought
test("Total chips greater than total bought should return null", () => {
  const players = [
    { name: "Player1", chips: 100, bought: 50 },
    { name: "Player2", chips: 200, bought: 100 },
  ];

  const result = calculatePayments(players);

  // Since total chips are greater than total bought, the function should return null
  expect(result).toBeNull();
});

// Test case for a scenario where players need to be paid
test("2 players, 1 need to be paid", () => {
  const players = [
    { name: "Player1", chips: 40, bought: 20 },
    { name: "Player2", chips: 0, bought: 20 },
  ];

  const result = calculatePayments(players);

  // Assert the result based on your expectations
  // You might want to customize this based on the specific logic in your function
  expect(result).toEqual([{ for: "Player1", amount: 20, from: "Player2" }]);
});

test("2 players, no payments", () => {
  const players = [
    { name: "Player1", chips: 20, bought: 20 },
    { name: "Player2", chips: 20, bought: 20 },
  ];

  const result = calculatePayments(players);

  // Assert the result based on your expectations
  // You might want to customize this based on the specific logic in your function
  expect(result).toEqual([]);
});

test("3 players, 1 need to be paid", () => {
  const players = [
    { name: "Player1", chips: 60, bought: 20 },
    { name: "Player2", chips: 0, bought: 20 },
    { name: "Player3", chips: 0, bought: 20 },
  ];

  const result = calculatePayments(players);

  // Assert the result based on your expectations
  // You might want to customize this based on the specific logic in your function
  expect(result).toEqual([
    { for: "Player1", from: "Player2", amount: 20 },
    { for: "Player1", from: "Player3", amount: 20 },
  ]);
});

test("4 players game, 2 need to be paid", () => {
  const players = [
    { name: "Player1", chips: 70, bought: 20 },
    { name: "Player2", chips: 30, bought: 20 },
    { name: "Player3", chips: 0, bought: 40 },
    { name: "Player4", chips: 0, bought: 20 },
  ];

  const result = calculatePayments(players);

  expect(result).toEqual([
    { for: "Player1", from: "Player3", amount: 40 },
    { for: "Player1", from: "Player4", amount: 10 },
    { for: "Player2", from: "Player4", amount: 10 },
  ]);
});
