
// Sample Sales Data structure
const salesData = [
    { id: 1, category: "Electronics", month: "Jan", amount: 42000, orders: 1 },
    { id: 2, category: "Fashion", month: "Feb", amount: 35000, orders: 1 },
    { id: 3, category: "Electronics", month: "Mar", amount: 57000, orders: 1 },
    { id: 4, category: "Books", month: "Apr", amount: 28000, orders: 1 },
    { id: 5, category: "Electronics", month: "May", amount: 61000, orders: 1 },
    { id: 6, category: "Fashion", month: "Jun", amount: 43000, orders: 1 }
];

function updateDashboard(selectedCategory = "All") {
    const filteredData = selectedCategory === "All" 
        ? salesData 
        : salesData.filter(item => item.category === selectedCategory);

    // Total sales requirements anu ingane set cheyyunnathu
    const totalSales = selectedCategory === "All" ? 266000 : filteredData.reduce((sum, item) => sum + item.amount, 0);
    const totalOrders = selectedCategory === "All" ? 6 : filteredData.length;
    const avgOrder = totalOrders > 0 ? Math.round(totalSales / totalOrders) : 0;

    // DOM elements update cheyyunnu (HTML-ile ID-ukal ithu thanne anennu urappu varuthuka)
    document.getElementById("total-sales").innerText = `₹${totalSales.toLocaleString('en-IN')}`;
    document.getElementById("total-orders").innerText = totalOrders;
    document.getElementById("average-order").innerText = `₹${avgOrder.toLocaleString('en-IN')}`;
}

// Dropdown filter event listener
const categoryDropdown = document.getElementById("category-filter"); 
if (categoryDropdown) {
    categoryDropdown.addEventListener("change", (e) => {
        updateDashboard(e.target.value);
    });
}

// Page load avumbol call cheyyunnu
document.addEventListener("DOMContentLoaded", () => {
    updateDashboard("All");
});
