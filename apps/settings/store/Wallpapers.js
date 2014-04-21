/**
 * Store for Wallpapers in Webdesktop Settings
 *
 * @author Andreas Mairhofer <andreas@classphp.de>
 * @verion 0.1
 * @package Webdesktop
 * @subpackage Settings
 * @namespace Webdesktop.store.settings
 * @see ExtJs4 <http://www.sencha.com>
 * @license     http://www.gnu.org/copyleft/gpl.html GNU General Public License version 3.0
 */

/**
 * @class Webdesktop.store.administration.Wallpapers
 * @extends Ext.ux.data.Store
 * @todo Find a way to remove the global variable on the store base url
 */
Ext.define('Tn.settings.store.Wallpapers', {
    extend   : 'Ext.data.Store',
    model    : 'Tn.settings.model.Wallpaper',
    autoLoad : true,
    proxy    : {
        type   : 'ajax',
        api    : {
            read : GLOBAL_USER_PROFILE.apiUrl + '_module/settings/_action/loadWallpapers'
        },
        reader : {
            type : 'json',
            root : 'wallpapers'
        }
    }
});
