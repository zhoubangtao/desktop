/**
 * The Settings main Window
 *
 * @author Andreas Mairhofer <andreas@classphp.de>
 * @verion 0.1
 * @package Webdesktop
 * @subpackage Settings
 * @namespace Webdesktop.view.settings
 * @see ExtJs4 <http://www.sencha.com>
 * @license     http://www.gnu.org/copyleft/gpl.html GNU General Public License version 3.0
 */

/**
 * @class Webdesktop.view.settings.Window
 * @extends Ext.window.Window
 * @alias settings_window
 * @todo seems like a "border bug", border config must be in the formpanel definition
 *       or borders are rendered
 *       see: http://www.sencha.com/forum/showthread.php?140245-4.0.2a-Component-border-configuration-does-not-work-even-in-very-simple-cases/
 */
Ext.define('Tn.settings.view.SettingsWindow', {
    extend   : 'Ext.window.Window',
    alias    : 'widget.settings_window',
    requires : [
        'Tn.settings.view.Menu',
        'Tn.settings.view.Background'
    ],
    uses     : [
        'Tn.settings.view.Theme',
        'Tn.settings.view.Color',
        'Tn.settings.view.Shortcuts',
        'Tn.settings.view.Autorun',
        'Tn.settings.view.Quickstart'
    ],
    initComponent: function()  {
        var me = this;

        Ext.apply(me, {
            title       : '设置',
            cls         : 'module-settings',
            iconCls     : 'settings-icon',
            layout      : 'card',
            activeItem  : 0,
            width       : 700,
            liveDrag    : true,
            height      : 500,
            broder      : false,
            defaults    : {
                border  : false
            },
            dockedItems : [{
                dock   : 'top',
                border : false,
                items  : [{
                    xtype : 'settings_menu'
                }]
            }],
            items: [{
                    xtype      : 'settings_background'
                }, {
                    xtype      : 'settings_theme',
                    previewUrl : me.initialConfig.themesView.previewUrl
                }, {
                    xtype      : 'settings_color'
                }, {
                    xtype      : 'settings_shortcuts'
                }, {
                    xtype      : 'settings_autorun'
                }, {
                    xtype      : 'settings_quickstart'
                }
            ]
        });

        me.callParent();
    }
});
