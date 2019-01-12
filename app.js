// Budget Controller
var budgetController = (function() {
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },

    totals: {
      exp: 0,
      inc: 0
    }
  };

  return {
    addItem: function(type, des, val) {
      var newItem, ID;

      //create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      //create new item bases on 'inc' or 'exp'
      if (type === "exp") {
        newItem = new Expense(ID, des, val);
      } else if (type === "inc") {
        newItem = new Income(ID, des, val);
      }

      //push it into our data structure
      data.allItems[type].push(newItem);

      //Return the new element
      return newItem;
    },

    testing: function() {
      console.log(data);
    }
  };
})();

//UI Controller
var UIController = (function() {
  var DOMstings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn"
  };
  return {
    getinput: function() {
      return {
        type: document.querySelector(DOMstings.inputType).value, //will be either inc or exp
        description: document.querySelector(DOMstings.inputDescription).value,
        value: document.querySelector(DOMstings.inputValue).value
      };
    },

    getDOMstrings: function() {
      return DOMstings;
    }
  };
})();

//Global app controller
var controller = (function(budgetCtrl, UICtrl) {
  var setupEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();
    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {
      //console.log(event)
      if (event.keycode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function() {
    var input, newItem;
    //1. Get the field input data
    input = UICtrl.getinput();
    console.log(input);
    //2.Add the item to the budget controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    //3.Add the item to the UI
    //4.Calculate the budget
    //5.Display the budget
  };

  return {
    init: function() {
      console.log("Application has started");
      setupEventListeners();
    }
  };
})(budgetController, UIController);

controller.init();
