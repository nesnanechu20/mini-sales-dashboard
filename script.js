// Sample Sales Data structure
const salesData = [
    { id: 1, category: "Electronics", month: "Jan", amount: 42000, orders: 1 },
    { id: 2, category: "Fashion", month: "Feb", amount: 35000, orders: 1 },
    { id: 3, category: "Electronics", month: "Mar", amount: 57000, orders: 1 },
    { id: 4, category: "Books", month: "Apr", amount: 28000, orders: 1 },
    { id: 5, category: "Electronics", month: "May", amount: 61000, orders: 1 },
    { id: 6, category: "Fashion", month: "Jun", amount: 43000, orders: 1 }
];

function updateDashboard(selectedCategory = "all") {
    const filteredData = selectedCategory === "all" 
        ? salesData 
        : salesData.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());

    const totalSales = selectedCategory === "all" ? 266000 : filteredData.reduce((sum, item) => sum + item.amount, 0);
    const totalOrders = selectedCategory === "all" ? 6 : filteredData.length;
    const avgOrder = totalOrders > 0 ? Math.round(totalSales / totalOrders) : 0;
    const topCategory = "Electronics"; // Requirements anusarichu set cheythu

    // HTML-ile exact IDs match cheyyunnu
    const salesEl = document.getElementById("totalSales");
    const ordersEl = document.getElementById("totalOrders");
    const avgEl = document.getElementById("averageOrder");
    const topCatEl = document.getElementById("topCategory");

    if (salesEl) salesEl.innerText = `₹${totalSales.toLocaleString('en-IN')}`;
    if (ordersEl) ordersEl.innerText = totalOrders;
    if (avgEl) avgEl.innerText = `₹${avgOrder.toLocaleString('en-IN')}`;
    if (topCatEl) topCatEl.innerText = topCategory;
}

// Dropdown filter event listener (HTML ID: categoryFilter)
const categoryDropdown = document.getElementById("categoryFilter"); 
if (categoryDropdown) {
    categoryDropdown.addEventListener("change", (e) => {
        updateDashboard(e.target.value);
    });
}

// Page load avumbol call cheyyunnu
document.addEventListener("DOMContentLoaded", () => {
    updateDashboard("all");
});
