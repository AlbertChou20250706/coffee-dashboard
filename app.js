// ===========================
// Multi-language Support
// ===========================
const translations = {
    zh: {
        subtitle: '專業咖啡數據管理平台',
        addRow: '新增數據',
        deleteSelected: '刪除選中',
        exportExcel: '匯出 Excel',
        exportCSV: '匯出 CSV',
        exportZip: '打包下載',
        colId: '編號',
        colName: '咖啡名稱',
        colOrigin: '產地',
        colRoast: '烘焙度',
        colPrice: '價格 (NT$)',
        colStock: '庫存',
        colRating: '評分',
        colActions: '操作',
        totalItems: '總項目數',
        avgPrice: '平均價格',
        totalStock: '總庫存',
        avgRating: '平均評分',
        modalTitle: '新增咖啡數據',
        modalTitleEdit: '編輯咖啡數據',
        btnSave: '保存',
        btnCancel: '取消',
        editBtn: '編輯',
        deleteBtn: '刪除',
        confirmDelete: '確定要刪除此項目嗎？',
        confirmDeleteMultiple: '確定要刪除 {count} 個項目嗎？',
        selectItemsFirst: '請先選擇要刪除的項目',
        downloadingFiles: '正在下載 CSV 和 JSON 檔案...',
        roastLight: '淺焙',
        roastMedium: '中焙',
        roastMediumDark: '中深焙',
        roastDark: '深焙'
    },
    en: {
        subtitle: 'Professional Coffee Data Management Platform',
        addRow: 'Add Data',
        deleteSelected: 'Delete Selected',
        exportExcel: 'Export Excel',
        exportCSV: 'Export CSV',
        exportZip: 'Pack & Download',
        colId: 'ID',
        colName: 'Coffee Name',
        colOrigin: 'Origin',
        colRoast: 'Roast Level',
        colPrice: 'Price (NT$)',
        colStock: 'Stock',
        colRating: 'Rating',
        colActions: 'Actions',
        totalItems: 'Total Items',
        avgPrice: 'Average Price',
        totalStock: 'Total Stock',
        avgRating: 'Average Rating',
        modalTitle: 'Add Coffee Data',
        modalTitleEdit: 'Edit Coffee Data',
        btnSave: 'Save',
        btnCancel: 'Cancel',
        editBtn: 'Edit',
        deleteBtn: 'Delete',
        confirmDelete: 'Are you sure you want to delete this item?',
        confirmDeleteMultiple: 'Are you sure you want to delete {count} items?',
        selectItemsFirst: 'Please select items to delete first',
        downloadingFiles: 'Downloading CSV and JSON files...',
        roastLight: 'Light Roast',
        roastMedium: 'Medium Roast',
        roastMediumDark: 'Medium-Dark Roast',
        roastDark: 'Dark Roast'
    },
    ja: {
        subtitle: 'プロフェッショナルコーヒーデータ管理プラットフォーム',
        addRow: 'データ追加',
        deleteSelected: '選択削除',
        exportExcel: 'Excel出力',
        exportCSV: 'CSV出力',
        exportZip: 'パッケージダウンロード',
        colId: 'ID',
        colName: 'コーヒー名',
        colOrigin: '産地',
        colRoast: '焙煎度',
        colPrice: '価格 (NT$)',
        colStock: '在庫',
        colRating: '評価',
        colActions: '操作',
        totalItems: '総項目数',
        avgPrice: '平均価格',
        totalStock: '総在庫',
        avgRating: '平均評価',
        modalTitle: 'コーヒーデータ追加',
        modalTitleEdit: 'コーヒーデータ編集',
        btnSave: '保存',
        btnCancel: 'キャンセル',
        editBtn: '編集',
        deleteBtn: '削除',
        confirmDelete: 'この項目を削除してもよろしいですか？',
        confirmDeleteMultiple: '{count} 個の項目を削除してもよろしいですか？',
        selectItemsFirst: '削除する項目を先に選択してください',
        downloadingFiles: 'CSVとJSONファイルをダウンロードしています...',
        roastLight: '浅煎り',
        roastMedium: '中煎り',
        roastMediumDark: '中深煎り',
        roastDark: '深煎り'
    }
};

// ===========================
// Global Variables
// ===========================
let coffeeData = [
    { id: 1, name: '衣索比亞 耶加雪菲', origin: '衣索比亞', roast: '淺焙', price: 450, stock: 25, rating: 4.8 },
    { id: 2, name: '哥倫比亞 薇拉', origin: '哥倫比亞', roast: '中焙', price: 380, stock: 30, rating: 4.5 },
    { id: 3, name: '巴西 喜拉朵', origin: '巴西', roast: '中深焙', price: 320, stock: 40, rating: 4.3 },
    { id: 4, name: '肯亞 AA', origin: '肯亞', roast: '中焙', price: 480, stock: 20, rating: 4.7 },
    { id: 5, name: '瓜地馬拉 安提瓜', origin: '瓜地馬拉', roast: '深焙', price: 420, stock: 18, rating: 4.6 }
];

let currentLanguage = 'zh';
let currentTheme = 'dark';
let editingId = null;

// ===========================
// Initialization
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    renderTable();
    updateStatistics();
    setupEventListeners();
});

function initializeApp() {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    
    // Load saved language
    const savedLanguage = localStorage.getItem('language') || 'zh';
    currentLanguage = savedLanguage;
    document.getElementById('languageSelect').value = savedLanguage;
    updateLanguage(savedLanguage);
}

// ===========================
// Event Listeners
// ===========================
function setupEventListeners() {
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Language select
    document.getElementById('languageSelect').addEventListener('change', function(e) {
        updateLanguage(e.target.value);
    });
    
    // Add row button
    document.getElementById('addRow').addEventListener('click', openAddModal);
    
    // Delete selected button
    document.getElementById('deleteSelected').addEventListener('click', deleteSelected);
    
    // Export buttons
    document.getElementById('exportExcel').addEventListener('click', exportToExcel);
    document.getElementById('exportCSV').addEventListener('click', exportToCSV);
    document.getElementById('exportZip').addEventListener('click', exportToZip);
    
    // Modal controls
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalCancel').addEventListener('click', closeModal);
    document.getElementById('dataForm').addEventListener('submit', handleFormSubmit);
    
    // Select all checkbox
    document.getElementById('selectAll').addEventListener('change', function(e) {
        const checkboxes = document.querySelectorAll('.row-checkbox');
        checkboxes.forEach(cb => cb.checked = e.target.checked);
    });
}

// ===========================
// Theme Management
// ===========================
function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(currentTheme);
}

function setTheme(theme) {
    currentTheme = theme;
    if (theme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        document.querySelector('.theme-icon').textContent = '☀️';
    } else {
        document.body.removeAttribute('data-theme');
        document.querySelector('.theme-icon').textContent = '🌙';
    }
    localStorage.setItem('theme', theme);
}

// ===========================
// Language Management
// ===========================
function updateLanguage(lang) {
    currentLanguage = lang;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update roast level options
    updateRoastLevelOptions();
    
    localStorage.setItem('language', lang);
    renderTable(); // Re-render table to update action buttons
}

function updateRoastLevelOptions() {
    const roastSelect = document.getElementById('coffeeRoast');
    if (roastSelect) {
        roastSelect.innerHTML = `
            <option value="淺焙">${translations[currentLanguage].roastLight}</option>
            <option value="中焙">${translations[currentLanguage].roastMedium}</option>
            <option value="中深焙">${translations[currentLanguage].roastMediumDark}</option>
            <option value="深焙">${translations[currentLanguage].roastDark}</option>
        `;
    }
}

// ===========================
// Table Rendering
// ===========================
function renderTable() {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';
    
    coffeeData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><input type="checkbox" class="row-checkbox" data-id="${item.id}"></td>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.origin}</td>
            <td>${item.roast}</td>
            <td>$${item.price}</td>
            <td>${item.stock}</td>
            <td>${item.rating.toFixed(1)} ⭐</td>
            <td>
                <button class="action-btn edit-btn" onclick="editRow(${item.id})">${translations[currentLanguage].editBtn}</button>
                <button class="action-btn delete-btn" onclick="deleteRow(${item.id})">${translations[currentLanguage].deleteBtn}</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// ===========================
// Statistics
// ===========================
function updateStatistics() {
    const totalItems = coffeeData.length;
    const avgPrice = coffeeData.length > 0 
        ? (coffeeData.reduce((sum, item) => sum + item.price, 0) / coffeeData.length).toFixed(2)
        : 0;
    const totalStock = coffeeData.reduce((sum, item) => sum + item.stock, 0);
    const avgRating = coffeeData.length > 0
        ? (coffeeData.reduce((sum, item) => sum + item.rating, 0) / coffeeData.length).toFixed(1)
        : 0;
    
    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('avgPrice').textContent = `$${avgPrice}`;
    document.getElementById('totalStock').textContent = totalStock;
    document.getElementById('avgRating').textContent = `${avgRating} ⭐`;
}

// ===========================
// Modal Management
// ===========================
function openAddModal() {
    editingId = null;
    document.getElementById('dataForm').reset();
    updateRoastLevelOptions(); // Update options when opening modal
    document.querySelector('.modal-header h2').textContent = translations[currentLanguage].modalTitle;
    document.getElementById('dataModal').classList.add('active');
}

function openEditModal(id) {
    editingId = id;
    const item = coffeeData.find(d => d.id === id);
    if (item) {
        updateRoastLevelOptions(); // Update options before setting value
        document.getElementById('coffeeName').value = item.name;
        document.getElementById('coffeeOrigin').value = item.origin;
        document.getElementById('coffeeRoast').value = item.roast;
        document.getElementById('coffeePrice').value = item.price;
        document.getElementById('coffeeStock').value = item.stock;
        document.getElementById('coffeeRating').value = item.rating;
        document.querySelector('.modal-header h2').textContent = translations[currentLanguage].modalTitleEdit;
        document.getElementById('dataModal').classList.add('active');
    }
}

function closeModal() {
    document.getElementById('dataModal').classList.remove('active');
    editingId = null;
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('coffeeName').value,
        origin: document.getElementById('coffeeOrigin').value,
        roast: document.getElementById('coffeeRoast').value,
        price: parseFloat(document.getElementById('coffeePrice').value),
        stock: parseInt(document.getElementById('coffeeStock').value),
        rating: parseFloat(document.getElementById('coffeeRating').value)
    };
    
    if (editingId) {
        // Edit existing item
        const index = coffeeData.findIndex(d => d.id === editingId);
        if (index !== -1) {
            coffeeData[index] = { ...coffeeData[index], ...formData };
        }
    } else {
        // Add new item
        const newId = coffeeData.length > 0 ? Math.max(...coffeeData.map(d => d.id)) + 1 : 1;
        coffeeData.push({ id: newId, ...formData });
    }
    
    renderTable();
    updateStatistics();
    closeModal();
}

// ===========================
// CRUD Operations
// ===========================
function editRow(id) {
    openEditModal(id);
}

function deleteRow(id) {
    if (confirm(translations[currentLanguage].confirmDelete)) {
        coffeeData = coffeeData.filter(item => item.id !== id);
        renderTable();
        updateStatistics();
    }
}

function deleteSelected() {
    const checkboxes = document.querySelectorAll('.row-checkbox:checked');
    if (checkboxes.length === 0) {
        alert(translations[currentLanguage].selectItemsFirst);
        return;
    }
    
    const message = translations[currentLanguage].confirmDeleteMultiple.replace('{count}', checkboxes.length);
    if (confirm(message)) {
        const idsToDelete = Array.from(checkboxes).map(cb => parseInt(cb.getAttribute('data-id')));
        coffeeData = coffeeData.filter(item => !idsToDelete.includes(item.id));
        document.getElementById('selectAll').checked = false;
        renderTable();
        updateStatistics();
    }
}

// ===========================
// Export Functions
// ===========================
function exportToCSV() {
    let csv = 'ID,Coffee Name,Origin,Roast Level,Price,Stock,Rating\n';
    coffeeData.forEach(item => {
        csv += `${item.id},"${item.name}","${item.origin}","${item.roast}",${item.price},${item.stock},${item.rating}\n`;
    });
    
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `coffee_data_${getDateString()}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function exportToExcel() {
    // Create Excel-like HTML table
    let html = `
        <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel">
        <head>
            <meta charset="utf-8">
            <style>
                table { border-collapse: collapse; }
                th, td { border: 1px solid #ddd; padding: 8px; }
                th { background-color: #4CAF50; color: white; }
            </style>
        </head>
        <body>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Coffee Name</th>
                        <th>Origin</th>
                        <th>Roast Level</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    coffeeData.forEach(item => {
        html += `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.origin}</td>
                <td>${item.roast}</td>
                <td>${item.price}</td>
                <td>${item.stock}</td>
                <td>${item.rating}</td>
            </tr>
        `;
    });
    
    html += `
                </tbody>
            </table>
        </body>
        </html>
    `;
    
    const blob = new Blob([html], { type: 'application/vnd.ms-excel' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `coffee_data_${getDateString()}.xls`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function exportToZip() {
    // Since we can't use external libraries, we'll create a simple multi-file download
    // In a real application, you would use a library like JSZip
    
    // Export CSV
    let csv = 'ID,Coffee Name,Origin,Roast Level,Price,Stock,Rating\n';
    coffeeData.forEach(item => {
        csv += `${item.id},"${item.name}","${item.origin}","${item.roast}",${item.price},${item.stock},${item.rating}\n`;
    });
    
    // Export JSON
    const json = JSON.stringify(coffeeData, null, 2);
    
    // Download CSV with BOM for proper encoding
    downloadFile('\ufeff' + csv, `coffee_data_${getDateString()}.csv`, 'text/csv;charset=utf-8;');
    
    // Download JSON without BOM after a short delay
    setTimeout(() => {
        downloadFile(json, `coffee_data_${getDateString()}.json`, 'application/json');
    }, 500);
    
    alert(translations[currentLanguage].downloadingFiles);
}

function downloadFile(content, filename, type) {
    const blob = new Blob([content], { type: type });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function getDateString() {
    const now = new Date();
    return `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
}

// ===========================
// Make functions globally accessible
// ===========================
window.editRow = editRow;
window.deleteRow = deleteRow;
