Ext.define('Tn.admin.controller.AdminController', {
    extend: 'Tn.desktop.controller.ModuleController',
    models: [
      'Tn.admin.model.Config'
    ],
    stores: [
      'Tn.admin.store.Configs'
    ],
    views: [
      'Tn.admin.view.Navigator',
      'Tn.admin.view.Toolbar',
      'Tn.admin.view.Custom',
      'Tn.admin.view.Privilege',
      'Tn.admin.view.MainTabPanel',
      'Tn.admin.view.SystemConfig',
      'Tn.admin.view.AdminWindow'
    ],
    refs: [
        { ref: 'adminWindow',       selector: 'admin_window'},
    ],
    /**
     * Load the CSS files from the ressources/css folder
     * @see Ext.ux.webdesktop.Module::init()
     * @see app.js -> Ext.application.loadCssFile()
     */
    useCss: [
        'admin.css'
    ],

    init   : function(application, desktopController) {
      var me = this;
      me.callParent([application, desktopController]);
      me.control({
        'admin_custom' : {
          itemclick: me.onCustomItemClick
        },
        'admin_privilege' : {
          itemclick: me.onPrivilegeItemClick
        }
      });
    },

    /**
     * Run the controller and show the settings window
     */
    launch: function() {
        var me = this,
            win = me.getAdminWindow() || me.getDesktop().addWindow({
                widget : 'admin_window'
            });
        win.show();
    },

    onCustomItemClick : function(view, record, item, index, e, eOpts) {
      var mainTabPanel = view.up('admin_window').down('admin_maintabpanel');
      Ext.Msg.alert("Tip", record.data.text);
      if (record.data.text === "系统设置") {

      } else if(record.data.text === "系统变量") {

      } else {

      }
    },

    onPrivilegeItemClick : function(view, record, item, index, e, eOpts) {
      var mainTabPanel = view.up('admin_window').down('admin_maintabpanel');
      Ext.Msg.alert("Tip", record.data.text);
      if (record.data.text === "资源管理") {

      } else if(record.data.text === "操作管理") {

      } else if(record.data.text === "权限管理") {

      } else if(record.data.text === "角色管理") {

      } else if(record.data.text === "用户管理") {

      } else if(record.data.text === "组管理") {

      } else {

      }
    }
})
