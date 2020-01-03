const fill = document.querySelector('.list-items li');
<<<<<<< HEAD
const step01 = document.querySelectorAll('.step1');
const step02 = document.querySelectorAll('.step22');
const step03 = document.querySelectorAll('.step23');
const step04 = document.querySelectorAll('.step24');
const step05 = document.querySelectorAll('.step2');
=======
const step1 = document.querySelectorAll('.step1');
const step2 = document.querySelectorAll('.step2');
const step2_2 = document.querySelectorAll('.step2_2');
const step2_3 = document.querySelectorAll('.step2_3');
const step2_4 = document.querySelectorAll('.step2_4');
>>>>>>> eb306cf0c53669c57da931651357b3e3ed988c42
const step3 = document.querySelectorAll('.step3');
const step3_2 = document.querySelectorAll('.step3_2');
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
<<<<<<< HEAD
for(const empty of step02) {
=======
for(const empty of step2) {
>>>>>>> eb306cf0c53669c57da931651357b3e3ed988c42
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}
<<<<<<< HEAD
for(const empty of step03) {
=======
for(const empty of step2_2) {
>>>>>>> eb306cf0c53669c57da931651357b3e3ed988c42
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}
<<<<<<< HEAD
for(const empty of step04) {
=======
for(const empty of step2_3) {
>>>>>>> eb306cf0c53669c57da931651357b3e3ed988c42
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}
<<<<<<< HEAD
for(const empty of step05) {
=======
for(const empty of step2_4) {
>>>>>>> eb306cf0c53669c57da931651357b3e3ed988c42
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
for(const empty of step3_2) {
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
<<<<<<< HEAD
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
=======
    else if(this.className == 'step2') {
        this.className = 'step2';
    }
    else if(this.className == 'step2_2') {
        this.className = 'step2_2';
    }
    else if(this.className == 'step2_3') {
        this.className = 'step2_3';
    }
    else if(this.className == 'step2_4') {
        this.className = 'step2_4';
>>>>>>> eb306cf0c53669c57da931651357b3e3ed988c42
    }
    else if(this.className == 'step3') {
        this.className = 'step3';
    }
    else if(this.className == 'step3_2') {
        this.className = 'step3_2';
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
<<<<<<< HEAD
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
=======
    else if(this.className == 'step2') {
        this.className = 'step2';
>>>>>>> eb306cf0c53669c57da931651357b3e3ed988c42
    }
    else if(this.className == 'step2_2') {
        this.className = 'step2_2';
    }
    else if(this.className == 'step2_3') {
        this.className = 'step2_3';
    }
    else if(this.className == 'step2_4') {
        this.className = 'step2_4';
    }
    else if(this.className == 'step3') {
        this.className = 'step3';
    }
    else if(this.className == 'step3_2') {
        this.className = 'step3_2';
    }
    else if(this.className == 'step4') {
        this.className = 'step4';
    }
    else if(this.className == 'step5') {
        this.className = 'step5';
    }
<<<<<<< HEAD
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
=======
    this.append(fill);
}
>>>>>>> eb306cf0c53669c57da931651357b3e3ed988c42
