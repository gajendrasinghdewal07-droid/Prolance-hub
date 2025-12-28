const serviceType = document.getElementById("serviceType");
const subCategory = document.getElementById("subCategory");
const priceDisplay = document.getElementById("priceDisplay");

// Sub‑categories
const services = {
    video: [
        "Short Video (0–2 min)",
        "Medium Video (2–5 min)",
        "Long Video (30–50 min)"
    ],
    web: [
        "Landing Page (URL Redirect)",
        "Full Website",
        "E‑commerce Website"
    ],
    copywriting: [
        "Social Media Copy (.jpg)",
        "Blog / Article"
    ],
    script: [
        "YouTube Script (.pdf)",
        "Ad / Commercial Script (.pdf)"
    ],
    animation: [
        "2D Animation (.mp4)",
        "Motion Graphics (.mp4)"
    ],
    thumbnails: [
        "YouTube / Social Media Thumbnails (.jpg)"
    ]
};

// Pricing (2025 agency‑style ranges)
const prices = {
    "Short Video (0–2 min)": "₹500 – ₹1,000",
    "Medium Video (2–5 min)": "₹1,000 – ₹2,500",
    "Long Video (30–50 min)": "₹8,000 – ₹20,000",

    "Landing Page (URL Redirect)": "₹3,000 – ₹8,000",
    "Full Website": "₹8,000 – ₹25,000",
    "E‑commerce Website": "₹15,000 – ₹35,000",

    "Social Media Copy (.jpg)": "₹300 – ₹800 per copy",
    "Blog / Article": "₹800 – ₹2,500",

    "YouTube Script (.pdf)": "₹500 – ₹1,500",
    "Ad / Commercial Script (.pdf)": "₹1,500 – ₹5,000",

    "2D Animation (.mp4)": "₹3,000 – ₹8,000",
    "Motion Graphics (.mp4)": "₹2,000 – ₹6,000",

    "YouTube / Social Media Thumbnails (.jpg)": "₹150 – ₹500 each"
};

// Populate sub‑categories
serviceType.addEventListener("change", () => {
    const selected = serviceType.value;
    subCategory.innerHTML = `<option value="">--Select Sub‑Category--</option>`;
    priceDisplay.textContent = "-";

    if (services[selected]) {
        services[selected].forEach(item => {
            const option = document.createElement("option");
            option.value = item;
            option.textContent = item;
            subCategory.appendChild(option);
        });
    }
});

// Update price
subCategory.addEventListener("change", () => {
    const selectedSub = subCategory.value;
    priceDisplay.textContent = prices[selectedSub] || "-";
});

// Form submit (agency‑safe)
document.getElementById("projectForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Project submitted successfully. Our agency will contact you soon.");
});