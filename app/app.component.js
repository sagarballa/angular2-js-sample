(function(app) {
    app.AppComponent =
        ng.core.Component({
          selector: 'my-app',
          templateUrl: 'app/app.html'
        })
        .Class({
          constructor: function() {
              this.title = 'Tour of Heroes  - Chapter I';
              this.hero = {
                id: 1,
                name: 'Windstorm'
            };
          }
            
        });
})(window.app || (window.app = {}));