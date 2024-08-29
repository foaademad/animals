const shapes = document.querySelectorAll('.shape');
const images = document.querySelectorAll('.image');
//  بدء اسقاط العناصر 
images.forEach(image => {
    image.addEventListener('dragstart', dragStart);
});
//  استقبال العناصر الى بتسقط
shapes.forEach(shape => {
    shape.addEventListener('dragover', dragOver);
    shape.addEventListener('drop', drop);
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.name);
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const droppedItem = e.dataTransfer.getData('text/plain');
    const shapeMatch = e.target.dataset.match;

    if (droppedItem === shapeMatch) {
        e.target.style.backgroundImage = `url('${droppedItem}.png')`;
        const draggedImage = document.querySelector(`[data-name="${droppedItem}"]`);
        draggedImage.style.display = 'none';
    } else {
        alert('Wrong match! Try again.');
    }
}
