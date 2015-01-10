function Widget() {
  var el = document.createElement('div');
  el.innerHTML = "Hello <span class='name'></span>!";
  return {
    el: el,
    setName: function (str) {
      this.el.querySelector(".name").textContent = str;
    },
    appendTo: function (target) {
      target.appendChild(this.el);
    }
  };
}
module.exports = Widget;