/**
 * Base Class for every module/controller in the webdesktop
 *
 * A new module with its controllers must extend from this class,
 * because it provides special funtionality and easy references.
 *
 * @author Andreas Mairhofer <andreas@classphp.de>
 * @verion 0.1
 * @package Ext.ux
 * @subpackage Webdesktop
 * @namespace Ext.ux.webdesktop
 * @see ExtJs4 <http://www.sencha.com>
 * @license     http://www.gnu.org/copyleft/gpl.html GNU General Public License version 3.0
 */

/**
 * @class Ext.ux.webdesktop.Module
 * @extends Ext.app.Controller
 */
Ext.define('Tn.desktop.controller.ModuleController', {
    extend : 'Ext.app.Controller',

    requires : ['Tn.util.Utility'],

    /**
     * Init function of the controller
     *
     * Is fired before the launch event if the app starts a controller.
     * this give us the time to load module CSS files.
     *
     * @param {Ext.app.Application} application
     * @param {Webdesktop.controller.webdesktop.Desktop} desktopController
     */
    init   : function(application, desktopController) {
        // template method, no CallParent because init() in app.Controller has no function
        var me = this;
        if(me.useCss) {
          var path = Tn.util.Utility.getPath(Ext.getClassName(me));
          console.log(path);
          if(Ext.isArray(me.useCss)) {
            Ext.each(me.useCss, function(name, idx, opt) {
              Tn.util.Utility.loadCssFile(path + "/../css/" + name);
            }, me.application);
          } else {
            Tn.util.Utility.loadCssFile(path + "/../css/" + me.useCss);
          }
        }
        me.desktopController = desktopController; // we want to know, which desktopcontroller loaded the module
        me.isInit = true;
    },
    /**
     * Get the DesktopController instance
     *
     * @return {Webdesktop.controller.webdesktop.Desktop}
     */
    getDesktop: function() {
        return this.desktopController;
    },
    /**
     * Get the application instance
     *
     * @return {Ext.app.Application}
     */
    getApplication: function() {
        return this.application;
    },

    launch: Ext.emptyFn
});
