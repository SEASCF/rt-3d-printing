const fill = document.querySelector('.fill');
const step1 = document.querySelectorAll('.step1');
const step2 = document.querySelectorAll('.step2');
const step3 = document.querySelectorAll('.step3');
const step4 = document.querySelectorAll('.step4');
const step5 = document.querySelectorAll('.step5');

// Fill Listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empties and call drag events
for(const empty of step1) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}
for(const empty of step2) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}
for(const empty of step3) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}
for(const empty of step4) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}
for(const empty of step5) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

// Drag Functions
function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
}

// Bug here
function dragEnter(e) {
    e.preventDefault();
    //this.className += ' hovered';
}

function dragLeave() {
    if(this.className == 'step1') {
        this.className = 'step1';
    }
    else if(this.className == 'step2') {
        this.className = 'step2';
    }
    else if(this.className == 'step3') {
        this.className = 'step3';
    }
    else if(this.className == 'step4') {
        this.className = 'step4';
    }
    else if(this.className == 'step5') {
        this.className = 'step5';
    }
}

function dragDrop() {
    if(this.className == 'step1') {
        this.className = 'step1';
    }
    else if(this.className == 'step2') {
        this.className = 'step2';
    }
    else if(this.className == 'step3') {
        this.className = 'step3';
    }
    else if(this.className == 'step4') {
        this.className = 'step4';
    }
    else if(this.className == 'step5') {
        this.className = 'step5';
    }
    this.append(fill); 
}