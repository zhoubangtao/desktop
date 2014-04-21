Ext.define('Tn.admin.view.UserManager', {
    extend   : 'Ext.panel.Panel',
    alias    : 'widget.admin_usermanager',

    initComponent : function () {
      var me = this;
      Ext.apply(me, {
        title : '用户管理',
        split : true,
        collapsible : true,
        animCollapse : true,
        margins : '0 0 0 0',
        items : []
      })
      me.callParent();
    }
})
