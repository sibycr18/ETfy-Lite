const radioGroups = new Set();
document.querySelectorAll('input[type="radio"]').forEach(radio => {
    if (!radioGroups.has(radio.name)) {
        radio.checked = true; // Select the first radio button in each group
        radioGroups.add(radio.name); // Track the group to avoid re-selecting
    }
});

// Click the submit button
document.querySelector('button[type="submit"]').click();
