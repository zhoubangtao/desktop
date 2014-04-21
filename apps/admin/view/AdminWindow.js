Ext.define('Tn.admin.view.AdminWindow', {
    extend   : 'Ext.window.Window',
    alias    : 'widget.admin_window',
    requires : [],
    uses     : [],
    initComponent: function()  {
        var me = this;

        Ext.apply(me, {
          title       : '平台及权限管理',
          iconCls     : 'admin-icon',
          layout      : 'border',
          width       : 940,
          height      : 580,
          broder      : true,
          split : true,
          animCollapse : false,
          constrainHeader : true,
          liveDrag : true,
          tbar : {
            xtype : "admin_toolbar"
          },
          floatable : false,
//            defaults    : {
//               border  : false
//            },
          items: [
            {
              xtype : 'admin_navigator'
            }, {
              xtype : 'admin_maintabpanel'
            }]
        });

        me.callParent();
    }
})
