'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var ChaosGenerator = module.exports = function ChaosGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function () {
        this.installDependencies({ skipInstall: options['skip-install'] });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(ChaosGenerator, yeoman.generators.Base);

ChaosGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    // have Yeoman greet the user.
    console.log(this.yeoman);

    var prompts = [{
    name: 'nameSpace',
    message: 'Whats your project Name Space?'
    }];

    this.prompt(prompts, function (props) {
    this.nameSpace = props.nameSpace;

    cb();
    }.bind(this));
};

ChaosGenerator.prototype.app = function app() {
    this.mkdir('app');
    this.mkdir('app/app');
    this.mkdir('app/commands');
    this.mkdir('app/controllers');
    this.mkdir('app/events');
    this.mkdir('app/helpers');
    this.mkdir('app/initializers');
    this.mkdir('app/models');
    this.mkdir('app/orchestrators');
    this.mkdir('app/proxies');
    this.mkdir('app/services');
    this.mkdir('app/viewModels');
    this.mkdir('app/views');

    this.mkdir('css');

    this.mkdir('locales');

    this.copy('_bower.json', 'bower.json');
    this.copy('_gitignore', '.gitignore');

    this.copy('_gruntfile.js', 'gruntfile.js');

    this.copy('helpers/ConsoleHelper.js', 'app/helpers/ConsoleHelper.js');
};

ChaosGenerator.prototype.projectfiles = function projectfiles() {
    this.copy('jshintrc', '.jshintrc');

    this.copy('locales/dev/translation.json', 'locales/dev/translation.json');
    this.copy('locales/en/translation.json', 'locales/en/translation.json');
    this.copy('locales/en-ca/translation.json', 'locales/en-ca/translation.json');
    this.copy('locales/en-us/translation.json', 'locales/en-us/translation.json');

    this.template('index.html', 'index.html');
    this.template('index.js', 'app/index.js');
    this.template('_package.json', 'package.json');

    this.template('app/AppProperties.js', 'app/app/AppProperties.js');
    this.template('app/AppSettings.js', 'app/app/AppSettings.js');

    this.template('commands/system/SystemDownCommand.js', 'app/commands/system/SystemDownCommand.js');

    this.template('controllers/AbstractController.js', 'app/controllers/AbstractController.js');
    this.template('controllers/Controller.js', 'app/controllers/Controller.js');
    this.template('controllers/SystemDownController.js', 'app/controllers/SystemDownController.js');

    this.template('events/AbstractEvent.js', 'app/events/AbstractEvent.js');
    this.template('events/EventDispatcher.js', 'app/events/EventDispatcher.js');
    this.template('events/app/AppConfigEvent.js', 'app/events/app/AppConfigEvent.js');
    this.template('events/initializers/InitializationCompleteEvent.js', 'app/events/initializers/InitializationCompleteEvent.js');
    this.template('events/initializers/InitializerFaultEvent.js', 'app/events/initializers/InitializerFaultEvent.js');
    this.template('events/initializers/InitializerSuccessEvent.js', 'app/events/initializers/InitializerSuccessEvent.js');
    this.template('events/localization/LocalizationEvent.js', 'app/events/localization/LocalizationEvent.js');
    this.template('events/localization/LocalizationProxyEvent.js', 'app/events/localization/LocalizationProxyEvent.js');
    this.template('events/preloader/PreloaderEvent.js', 'app/events/preloader/PreloaderEvent.js');
    this.template('events/system/SystemDownDisplayEvent.js', 'app/events/system/SystemDownDisplayEvent.js');
    this.template('events/system/SystemDownEvent.js', 'app/events/system/SystemDownEvent.js');

    this.template('initializers/AbstractInitializer.js', 'app/initializers/AbstractInitializer.js');
    this.template('initializers/AppConfigurationInitializer.js', 'app/initializers/AppConfigurationInitializer.js');
    this.template('initializers/LocalizationInitializer.js', 'app/initializers/LocalizationInitializer.js');

    this.template('localization/LC.js', 'app/localization/LC.js');
    this.template('localization/LocalizationUtility.js', 'app/localization/LocalizationUtility.js');

    this.template('orchestrators/InitializationSequenceOrchestrator.js', 'app/orchestrators/InitializationSequenceOrchestrator.js');

    this.template('proxies/LocalizationProxy.js', 'app/proxies/LocalizationProxy.js');

    this.template('services/AbstractService.js', 'app/services/AbstractService.js');
    this.template('services/ServiceLocator.js', 'app/services/ServiceLocator.js');

    this.template('viewModels/OverlayContainerWindow.js', 'app/viewModels/OverlayContainerWindow.js');
    this.template('viewModels/OverlayWindowManager.js', 'app/viewModels/OverlayWindowManager.js');
    this.template('viewModels/ui/Main.js', 'app/viewModels/ui/Main.js');
    this.template('viewModels/ui/PreloaderViewModel.js', 'app/viewModels/ui/PreloaderViewModel.js');
    this.template('viewModels/ui/SystemDownViewModel.js', 'app/viewModels/ui/SystemDownViewModel.js');

    this.template('views/ui/Main.html', 'app/views/ui/Main.html');
    this.template('views/ui/Preloader.html', 'app/views/ui/Preloader.html');
    this.template('views/ui/SystemDown.html', 'app/views/ui/SystemDown.html');
};
