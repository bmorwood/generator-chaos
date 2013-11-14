'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var path = require('path');

var EntityGenerator = module.exports = function EntityGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the class subgenerator with the argument ' + this.name + '.');

    var data = JSON.parse(this.readFileAsString('package.json'));

    this.nameSpace = data.nameSpace;

    this.entities = [];
};

util.inherits(EntityGenerator, yeoman.generators.NamedBase);

EntityGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    this.choices = [
        {name:'Basic', dir:'app/', entityName:'<name>',  saveAs:'<entityName>.js', file:'basic.js'},
        {name:'Command', dir:'app/commands/', entityName:'<name>Command', saveAs:'<entityName>.js', file:'command.js'},
        {name:'Controller', dir:'app/controllers/', entityName:'<name>Controller', saveAs:'<entityName>.js', file:'controller.js'},
        {name:'Event', dir:'app/events/', entityName:'<name>Event', saveAs:'<entityName>.js', file:'event.js'},
        {name:'Model', dir:'app/models/', entityName:'<name>', saveAs:'<entityName>.js', file:'model.js'},
        {name:'Proxy', dir:'app/proxies/', entityName:'<name>Proxy', saveAs:'<entityName>.js', file:'proxy.js'},
        {name:'Service', dir:'app/services/', entityName:'<name>Service', saveAs:'<entityName>.js', file:'service.js'},
        {name:'Singleton', dir:'app/', entityName:'<name>', saveAs:'<entityName>.js', file:'singleton.js'},
        {name:'ViewModel', dir:'app/viewModels/', entityName:'<name>ViewModel', saveAs:'<entityName>.js', file:'view-model.js'},
        {name:'View', dir:'app/views/', entityName:'<name>View', saveAs:'<entityName>.html', file:'view.html'},
        {name:'All'}
    ];

    var prompts = [{
        type:'checkbox',
        name: 'entities',
        message: 'What Entity(s) would you like to create?',
        choices:this.choices
    }];

    this.prompt(prompts, function (props) {

        for(var i = 0; i < props.entities.length; i++){
            var item = this._.find(this.choices, function($item){ return $item.name == props.entities[i]} );
            if(item)
                this.entities.push(item);
        }

        if(this._.contains(props.entities, 'All'))
            this.entities = this.choices;

        this.entities = this._.reject(this.entities, function ($item){return $item.name == 'All'});

        cb();
    }.bind(this));
};

EntityGenerator.prototype.files = function files() {

    this.name = this._.capitalize(this.name);

    for(var i = 0; i < this.entities.length; i++){
        var _entity = this.entities[i];
        _entity.entityName = _entity.entityName.replace('<name>', this.name);
        this.template(_entity.file, _entity.dir + _entity.saveAs.replace('<entityName>', _entity.entityName));
    }
};
