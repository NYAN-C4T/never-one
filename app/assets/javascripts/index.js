window.onload = function () {
  var vm = new Vue({
    el: '#contents',
    data: {
      seen: true,
      message: '',
      preview: '',
      title: ''
    },
    methods: {
      createReturn: function () {
        var lines = vm.detectVoid(this.message.split('\n'));
        vm.preview = lines.map(function (line) {
          return {row: line};
        });
      },
      detectVoid: function (lines) {
         var test = lines.map(function (line) {
           if (line.length === 0) {
             return "---";
           }
           return line;
         });
         return test;
      },
      titleToggle: function (event) {
        event.target.classList.toggle('row--heading');
      }
    }
  });
};
