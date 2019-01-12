// Budget Controller
var budgetController = (function() {
  //Some code
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
  var DOM = UICtrl.getDOMstrings();
  var ctrlAddItem = function() {
    //1. Get the field input data
    var input = UICtrl.getinput();
    console.log(input);
    //2.Add the item to the budget controller
    //3.Add the item to the UI
    //4.Calculate the budget
    //5.Display the budget
  };

  document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function(event) {
    //console.log(event)
    if (event.keycode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
