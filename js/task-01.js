const categories = document.querySelectorAll('#categories .item');

console.log(`Total categories: ${categories.length}`);

categories.forEach (categorii => {
    const title = categorii.querySelector('h2').textContent;
    const items = categorii.querySelectorAll('li').length;
    console.log(`Title: ${title}, Number of items: ${items}`);
});