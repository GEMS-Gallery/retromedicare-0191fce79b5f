import Func "mo:base/Func";
import Nat "mo:base/Nat";

import Array "mo:base/Array";
import Debug "mo:base/Debug";
import Text "mo:base/Text";

actor HealthCare {
  // Define the HealthPlan type
  public type HealthPlan = {
    name: Text;
    description: Text;
    price: Nat;
  };

  // Stable variable to store health plans
  stable var healthPlans : [HealthPlan] = [];

  // Function to add a new health plan
  public func addHealthPlan(name: Text, description: Text, price: Nat) : async () {
    let newPlan : HealthPlan = {
      name = name;
      description = description;
      price = price;
    };
    healthPlans := Array.append(healthPlans, [newPlan]);
    Debug.print("New health plan added: " # name);
  };

  // Function to get all health plans
  public query func getHealthPlans() : async [HealthPlan] {
    return healthPlans;
  };
}
