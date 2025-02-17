

// stop propagation
document.querySelector('.child2').addEventListener('click', function(e) {
    e.stopPropagation();
    alert('child2 was clicked');
});
document.querySelector('.child1').addEventListener('click', function(e) {
    e.stopPropagation();
    alert('child1 was clicked');
});
document.querySelector('.container').addEventListener('click', function() {
    alert('container was clicked');
});