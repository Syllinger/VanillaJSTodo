var todoList = {
	items: [],
	add: function(value) {
		this.items.push({
        	value: value,
        	completed: false
        });
	},
	change: function(pos, newVal) {
		this.items[pos].value = newVal;
	},
	delete: function(pos) {
		this.items.splice(pos, 1);
	},
	toggle: function(pos) {
		this.items[pos].completed = !this.items[pos].completed;
	},
	toggleAll: function() {
		var itemsLen = this.items.length;
		var itemsComplete = 0;

		for (var i=0; i < itemsLen; i++) {
			if (this.items[i].completed) {
				itemsComplete++;
			}
		}

		for (var i=0; i < itemsLen; i++) {
			if (itemsComplete === itemsLen) {
				this.items[i].completed = false;
			} else {
				this.items[i].completed = true;
			}
		}
	}
};

var handlers = {
	add: function() {
		var addInput = document.getElementById('addInput');
		todoList.add(addInput.value);
		addInput.value = '';
		view.display();
	},
	change: function() {
		var changePosInput = document.getElementById('changePosInput');
		var changeInput = document.getElementById('changeInput');
		todoList.change(changePosInput.valueAsNumber, changeInput.value);
		changePosInput.value = '';
		changeInput.value = '';
		view.display();
	},
	delete:	function(pos) {
		todoList.delete(pos);
		view.display();
	},
	toggle:	function() {
		var togglePosInput = document.getElementById('togglePosInput');
		todoList.toggle(togglePosInput.valueAsNumber);
		view.display();
	},
	toggleAll: function() {
		todoList.toggleAll();
		view.display();
	}
};

var view = {
	display: function() {
		var listUL = document.querySelector('ul');
		listUL.innerHTML = '';
		var itemsLen = todoList.items.length;
		for (var i=0; i < itemsLen; i++) {
			var itemLIOutput = '';
			var todoItem = todoList.items[i];
			var itemLI = document.createElement('li');
			
			if (todoItem.completed) {
				itemLIOutput = '(x) ';
			} else {
				itemLIOutput = '( ) ';
			}

			itemLI.id = i;
			itemLI.textContent = itemLIOutput + todoItem.value;
			itemLI.appendChild(this.addDeleteBtn());			
			listUL.appendChild(itemLI);
		}
	},
	addDeleteBtn: function() {
		var deleteBtn = document.createElement('button');
		deleteBtn.textContent = 'Delete';
		deleteBtn.className = 'deleteBtn';
		return deleteBtn;
	},
	createEventListeners: function() {
		var listUL = document.querySelector('ul');
		listUL.addEventListener('click', function(e) {
			var clickedElement = e.target;
			if (clickedElement.className === 'deleteBtn') {
				handlers.delete(parseInt(clickedElement.parentNode.id));
			}
		});
	}
};

view.createEventListeners();