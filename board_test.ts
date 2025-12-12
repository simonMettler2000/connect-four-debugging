import { assertEquals } from "@std/assert";
import { Board, Player } from "./board.ts";

Deno.test("dummy", () => {
  const board = new Board();
  const winner = board.winner(Player.PlayerX, 1, 1);
  assertEquals(winner, Player.Nobody);
});

Deno.test("diagonal win", () => {
  const board = new Board();
  board.makeMove(Player.PlayerX, 0);
  board.makeMove(Player.PlayerO, 0);
  board.makeMove(Player.PlayerX, 0);
  const winner = board.winner(Player.PlayerX, 2, 2);
  assertEquals(winner, Player.Nobody);
});