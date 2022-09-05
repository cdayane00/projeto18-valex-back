import { connection } from "../config/database.js";

import { Recharge } from "../interfaces/rechargeInterface.js";

import { RechargeInsertData } from "../types/rechargeTypes.js";

export async function findByCardId(cardId: number) {
	const result = await connection.query<Recharge, [number]>(
		`SELECT * FROM recharges WHERE "cardId"=$1`,
		[cardId]
	);

	return result.rows;
}

export async function insert(rechargeData: RechargeInsertData) {
	const { cardId, amount } = rechargeData;

	connection.query<any, [number, number]>(
		`INSERT INTO recharges ("cardId", amount) VALUES ($1, $2)`,
		[cardId, amount]
	);
}