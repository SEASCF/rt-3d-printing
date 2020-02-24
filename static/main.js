class DragAndDropApp extends React.Component {
    state = {
      tasks: [
        {
          name: "Add More Tasks",
          category: "todo"
        }
      ]
    };
  
    onDragOver = ev => {
      ev.preventDefault();
    };
  
    onDragStart = (ev, name) => {
      ev.dataTransfer.setData("id", name);
    };
  
    onDrop = (ev, cat) => {
      const id = ev.dataTransfer.getData("id");
  
      let tasks = this.state.tasks.filter(task => {
        if (task.name == id) {
          task.category = cat;
        }
        return task;
      });
      this.setState({
        ...this.state,
        tasks
      });
    };
  
    handleKeyPress = ev => {
      if ((ev.key == "Enter") && (ev.target.value != "")) {
        this.setState({
          tasks: [
            ...this.state.tasks,
            { name: ev.target.value, category: "todo" }
          ]
        });
        ev.target.value = " ";
      }
    };
  
    render() {
      var tasks = {
        todo: [],
        working: [],
        complete: [],
        trash: []
      };
  
      this.state.tasks.forEach(t => {
        tasks[t.category].push(
          <div
            className="item-container"
            key={t.name}
            draggable
            onDragStart={e => this.onDragStart(e, t.name)}
          >
            {t.name}
          </div>
        );
      });
      
      
  
      return (
        <div>
          <div id='background-image'></div>
          <div class="container">
            <div
              className="drop-area"
              onDragOver={e => this.onDragOver(e)}
              onDrop={e => this.onDrop(e, "todo")}
            >
              <h1>Todo</h1>
              {tasks.todo}
            </div>
            <div
              className="drop-area"
              onDragOver={e => this.onDragOver(e)}
              onDrop={e => this.onDrop(e, "working")}
            >
              <h1>Working</h1>
              {tasks.working}
            </div>
            <div
              className="drop-area"
              onDragOver={e => this.onDragOver(e)}
              onDrop={e => this.onDrop(e, "complete")}
            >
              <h1>Complete</h1>
              {tasks.complete}
            </div>
          </div>
          <div>
            <input
              onKeyPress={e => this.handleKeyPress(e)}
              className="input"
              type="text"
              placeholder="Task Name"
            />
  
            <div
              class="trash-drop"
              onDrop={e => this.onDrop(e, "trash")}
              onDragOver={e => this.onDragOver(e)}
            >
              Drop here to remove
            </div>
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(<DragAndDropApp />, document.getElementById("root"));
  