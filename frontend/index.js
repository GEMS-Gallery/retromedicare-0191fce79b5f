import { backend } from "declarations/backend";

document.addEventListener('DOMContentLoaded', async () => {
    await loadHealthPlans();

    document.getElementById('addPlanForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('planName').value;
        const description = document.getElementById('planDescription').value;
        const price = parseInt(document.getElementById('planPrice').value);

        await backend.addHealthPlan(name, description, price);
        await loadHealthPlans();
        e.target.reset();
    });
});

async function loadHealthPlans() {
    const plans = await backend.getHealthPlans();
    const planList = document.getElementById('planList');
    planList.innerHTML = '';

    plans.forEach(plan => {
        const planDiv = document.createElement('div');
        planDiv.className = 'plan';
        planDiv.innerHTML = `
            <h3>${plan.name}</h3>
            <p>${plan.description}</p>
            <p>Price: $${plan.price}</p>
        `;
        planList.appendChild(planDiv);
    });
}
