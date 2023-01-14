import client from "./Apollo";
import * as Gql from "./Gql";


/**
 * get Spells
 */
export async function getSpells(params) {
    return await client.query({
      variables: params,
      query: Gql.GQL_getSpells,
    });
  }