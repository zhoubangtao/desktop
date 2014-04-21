Ext.define('Tn.admin.view.PrivilegeManager', {
    extend   : 'Ext.panel.Panel',
    alias    : 'widget.admin_pm',

    initComponent : function () {
      var me = this;
      Ext.apply(me, {
        title : '权限管理',
        split : true,
        collapsible : true,
        animCollapse : true,
        margins : '0 0 0 0',
        items : []
      })
      me.callParent();
    }
})
