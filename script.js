/**
 * AWS Eraser Web — Interactive Script & GitHub Download Redirector
 */

// Global GitHub Repository URL
const GITHUB_REPO_URL = "https://github.com/abhinandnm/aws-eraser";

// Redirect user to GitHub repository on download click
function handleDownloadRedirect() {
    window.location.href = GITHUB_REPO_URL;
}

// Mobile Menu Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileDrawer = document.getElementById("mobileDrawer");

    if (mobileMenuBtn && mobileDrawer) {
        mobileMenuBtn.addEventListener("click", () => {
            mobileDrawer.classList.toggle("open");
        });

        // Close drawer when a link is clicked
        const drawerLinks = mobileDrawer.querySelectorAll(".drawer-link, .btn");
        drawerLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileDrawer.classList.remove("open");
            });
        });
    }

    // Initialize Calculator
    initCalculator();

    // Initialize Matrix Category Filters
    initMatrixFilters();
});

// Interactive ROI / Savings Calculator Logic
function initCalculator() {
    const ec2Range = document.getElementById("ec2Range");
    const natRange = document.getElementById("natRange");
    const ebsRange = document.getElementById("ebsRange");
    const rdsRange = document.getElementById("rdsRange");

    const ec2Val = document.getElementById("ec2Val");
    const natVal = document.getElementById("natVal");
    const ebsVal = document.getElementById("ebsVal");
    const rdsVal = document.getElementById("rdsVal");
    const calcTotal = document.getElementById("calcTotal");

    if (!ec2Range || !calcTotal) return;

    function updateTotal() {
        const ec2Count = parseInt(ec2Range.value) || 0;
        const natCount = parseInt(natRange.value) || 0;
        const ebsCount = parseInt(ebsRange.value) || 0;
        const rdsCount = parseInt(rdsRange.value) || 0;

        // AWS standard estimates (approx per month)
        const ec2Cost = ec2Count * 60; // $60/mo per t3.large approx
        const natCost = natCount * 32.4; // $32.40/mo per NAT gateway base
        const ebsCost = ebsCount * 8;   // $8/mo per 100GB gp3 volume
        const rdsCost = rdsCount * 215; // $215/mo per db.m5.large

        ec2Val.textContent = `${ec2Count} instance${ec2Count !== 1 ? 's' : ''} ($${ec2Cost}/mo)`;
        natVal.textContent = `${natCount} gateway${natCount !== 1 ? 's' : ''} ($${Math.round(natCost)}/mo)`;
        ebsVal.textContent = `${ebsCount} volume${ebsCount !== 1 ? 's' : ''} ($${ebsCost}/mo)`;
        rdsVal.textContent = `${rdsCount} database${rdsCount !== 1 ? 's' : ''} ($${rdsCost}/mo)`;

        const grandTotal = ec2Cost + natCost + ebsCost + rdsCost;
        calcTotal.textContent = `$${grandTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} / mo`;
    }

    [ec2Range, natRange, ebsRange, rdsRange].forEach(slider => {
        slider.addEventListener("input", updateTotal);
    });

    updateTotal();
}

// Category Filter Tabs for Supported Matrix
function initMatrixFilters() {
    const filterTabs = document.querySelectorAll("#matrixFilterTabs .filter-tab");
    const matrixCards = document.querySelectorAll("#matrixGrid .matrix-card");

    filterTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            filterTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const filter = tab.getAttribute("data-filter");

            matrixCards.forEach(card => {
                if (filter === "all" || card.getAttribute("data-category") === filter) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
}

// OS Code Snippet Switcher
function switchOsTab(tabId, el) {
    const tabs = document.querySelectorAll(".os-tab");
    const contents = document.querySelectorAll(".os-content");

    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    el.classList.add("active");
    const targetContent = document.getElementById(`tab-${tabId}`);
    if (targetContent) {
        targetContent.classList.add("active");
    }
}

// One-Click Code Snippet Copy Function
function copySnippet(text, btnElement) {
    navigator.clipboard.writeText(text).then(() => {
        const originalHTML = btnElement.innerHTML;
        btnElement.innerHTML = `<i data-lucide="check" style="width:14px;height:14px;color:var(--accent-green)"></i> Copied!`;
        if (window.lucide) lucide.createIcons();

        setTimeout(() => {
            btnElement.innerHTML = originalHTML;
            if (window.lucide) lucide.createIcons();
        }, 2000);
    }).catch(err => {
        console.error("Clipboard copy failed: ", err);
    });
}

// Accordion Toggle for IAM Setup Guide
function toggleAccordion(buttonEl) {
    const item = buttonEl.parentElement;
    item.classList.toggle("active");
}
