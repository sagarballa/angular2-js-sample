(function(app) {
    function Hero(id, name) {
        this.id = id;
        this.name = name;
    };
    
    var HEROES = [
        { "id": 11, "name": "Mr. Nice" },
        { "id": 12, "name": "Narco" },
        { "id": 13, "name": "Bombasto" },
        { "id": 14, "name": "Celeritas" },
        { "id": 15, "name": "Magneta" },
        { "id": 16, "name": "RubberMan" },
        { "id": 17, "name": "Dynama" },
        { "id": 18, "name": "Dr IQ" },
        { "id": 19, "name": "Magma" },
        { "id": 20, "name": "Tornado" }
    ];
    
    app.AppComponent =
        ng.core.Component({
            selector: 'my-app',
            templateUrl: 'app/app.html',
            styleUrls: ['app/app.css']
        })
        .Class({
          constructor: function() {
              this.title = 'Tour of Heroes  - Chapter I';
              this.heros = HEROES;
          }
            
        });
    app.AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    
})(window.app || (window.app = {}));