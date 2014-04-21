/**
 * The desktop panel
 *
 * Main Panel in the viewport that contains the wallpaper,shortcut view and
 * the taskbar as a toolbar.
 *
 * @author Andreas Mairhofer <andreas@classphp.de>
 * @verion 0.1
 * @package Webdesktop
 * @subpackage Webdesktop
 * @namespace Webdesktop.view.webdesktop
 * @see ExtJs4 <http://www.sencha.com>
 * @license     http://www.gnu.org/copyleft/gpl.html GNU General Public License version 3.0
 */

/**
 * @class Webdesktop.view.webdesktop.Desktop
 * @extends Ext.panel.Panel
 * @alias webdesktop_desktop
 */
Ext.define('Tn.desktop.view.Desktop', {
    extend : 'Ext.panel.Panel',
    alias  : 'widget.desktop',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            border : false,
            html   : '&#160;',
            itemId : 'desktop-panel',
            layout : 'fit',
            bbar   : {
                xtype : 'desktop-taskbar'
            },
            items  : [{
                xtype : 'desktop-wallpaper',
                id    : me.id + '_wallpaper'
            }, {
                xtype        : 'dataview',
                itemId       : 'ux-shortcut',
                overItemCls  : 'x-view-over',
                itemSelector : 'div.ux-desktop-shortcut',
                trackOver    : true,
                store        : Ext.data.StoreManager.get('Tn.desktop.store.Shortcuts'), // get the store from controller
                style        : {
                    position : 'absolute'  //FIXME: Create CSS Class
                },
                tpl: [
                    '<tpl for=".">',
                        '<div class="ux-desktop-shortcut" id="{name}-shortcut">',
                            '<div class="ux-desktop-shortcut-icon {iconCls}">',
                                '<img src="',Ext.BLANK_IMAGE_URL,'" title="{name}">',
                            '</div>',
                            '<span class="ux-desktop-shortcut-text">{name}</span>',
                        '</div>',
                    '</tpl>',
                    '<div class="x-clear"></div>'
                ],
                listeners:{
                  resize : me.initShortcut
                }
            }]
        });

        me.callParent(arguments);
    },

    initShortcut : function() {
      var btnHeight = 64;
      var btnWidth = 64;
      var btnPadding = 30;
      var col = {index : 1,x : btnPadding};
      var row = {index : 1,y : btnPadding};
      var bottom;
      var numberOfItems = 0;
      var taskBarHeight = Ext.query(".ux-taskbar")[0].clientHeight + 40;
      var bodyHeight = Ext.getBody().getHeight() - taskBarHeight;
      var items = Ext.query(".ux-desktop-shortcut");

      for (var i = 0, len = items.length; i < len; i++) {
        numberOfItems += 1;
        bottom = row.y + btnHeight;
        if (((bodyHeight < bottom) ? true : false) && bottom > (btnHeight + btnPadding)) {
          numberOfItems = 0;
          col = {
            index : col.index++,
            x : col.x + btnWidth + btnPadding
          };
          row = {
            index : 1,
            y : btnPadding
          };
        }
        Ext.fly(items[i]).setXY([col.x, row.y]);
        row.index++;
        row.y = row.y + btnHeight + btnPadding;
      }
    },
});
