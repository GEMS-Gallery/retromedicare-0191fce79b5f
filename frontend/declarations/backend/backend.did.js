export const idlFactory = ({ IDL }) => {
  const HealthPlan = IDL.Record({
    'name' : IDL.Text,
    'description' : IDL.Text,
    'price' : IDL.Nat,
  });
  return IDL.Service({
    'addHealthPlan' : IDL.Func([IDL.Text, IDL.Text, IDL.Nat], [], []),
    'getHealthPlans' : IDL.Func([], [IDL.Vec(HealthPlan)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
