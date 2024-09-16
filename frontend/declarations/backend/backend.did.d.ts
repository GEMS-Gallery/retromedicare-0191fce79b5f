import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface HealthPlan {
  'name' : string,
  'description' : string,
  'price' : bigint,
}
export interface _SERVICE {
  'addHealthPlan' : ActorMethod<[string, string, bigint], undefined>,
  'getHealthPlans' : ActorMethod<[], Array<HealthPlan>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
