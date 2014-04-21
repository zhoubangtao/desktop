/**
 * The Settings Menu
 *
 * Basic implementation if a toolbar with icons
 *
 * Info: the button action types are part of the xtypes for the corresponding views
 * Example: actionType: 'background' =>  xtype settings_background
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
 * @class Webdesktop.view.settings.Menu
 * @extends Ext.toolbar.Toolbar
 * @alias settings_menu
 * @todo seems like a "border bug", border config must be in the formpanel definition
 *       or borders are rendered
 *       see: http://www.sencha.com/forum/showthread.php?140245-4.0.2a-Component-border-configuration-does-not-work-even-in-very-simple-cases/
 */
Ext.define('Tn.settings.view.Menu', {
    extend : 'Ext.toolbar.Toolbar',
    alias  : 'widget.settings_menu',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            border   : false,
            frame    : false,
            plain : true,
            defaults : {
                scale        : 'medium',
                iconAlign    : 'top',
                enableToggle : true,
                toggleGroup  : 'settingsButtonGroup'
            },
            items: [{
                text       : '桌面',
                iconCls    : 'icon-background',
                actionType : 'background',
                pressed    : true // initial, becuase its the first view the user will see
            }, {
                text       : '主题',
                iconCls    : 'icon-theme',
                actionType : 'theme'
            }, {
                text       : '颜色',
                iconCls    : 'icon-color',
                actionType : 'color'
            },{
                text       : '桌面图标',
                iconCls    : 'icon-shortcut',
                actionType : 'shortcuts'
            }, {
                text       : '自动启动',
                iconCls    : 'icon-autorun',
                actionType : 'autorun'
            }, {
                text       : '快捷启动',
                iconCls    : 'icon-quickstart',
                actionType : 'quickstart'
            }]
        });

        me.callParent();
    }
});
