const fill = document.querySelector('.list-items li');
const step01 = document.querySelectorAll('.step1');
const step02 = document.querySelectorAll('.step22');
const step03 = document.querySelectorAll('.step23');
const step04 = document.querySelectorAll('.step24');
const step05 = document.querySelectorAll('.step2');
const step3 = document.querySelectorAll('.step3');
const step32 = document.querySelectorAll('.step32');
const step4 = document.querySelectorAll('.step4');
const step5 = document.querySelectorAll('.step5');

// Fill Listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empties and call drag events
for(const empty of step01) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}
for(const empty of step02) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}
for(const empty of step03) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}
for(const empty of step04) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}
for(const empty of step05) {
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
for(const empty of step32) {
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
    this.className = '.list-items li';
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
    if(this.className == 'step01') {
        this.className = 'step01';
    }
    else if(this.className == 'step02') {
        this.className = 'step02';
    }
    else if(this.className == 'step03') {
        this.className = 'step03';
    }
    else if(this.className == 'step04') {
        this.className = 'step04';
    }
    else if(this.className == 'step05') {
        this.className = 'step05';
    }
    else if(this.className == 'step32') {
        this.className = 'step32';
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
    if(this.className == 'step01') {
        this.className = 'step01';
    }
    else if(this.className == 'step02') {
        this.className = 'step02';
    }
    else if(this.className == 'step03') {
        this.className = 'step03';
    }
    else if(this.className == 'step04') {
        this.className = 'step04';
    }
    else if(this.className == 'step05') {
        this.className = 'step05';
    }
    else if(this.className == 'step32') {
        this.className = 'step32';
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

  function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
  
    event
      .currentTarget
      .style
      .backgroundColor = 'white';
  }

  function onDragOver(event) {
    event.preventDefault();
  }

  function onDrop(event) {
    const id = event
      .dataTransfer
      .getData('text');
  
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    
    dropzone.appendChild(draggableElement);
  
    event
      .dataTransfer
      .clearData();
  }