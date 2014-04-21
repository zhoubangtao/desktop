Ext.define('Tn.admin.view.ResourceManager', {
    extend   : 'Ext.panel.Panel',
    alias    : 'widget.admin_rm',

    initComponent : function () {
      var me = this;
      Ext.apply(me, {
        title : '资源管理',
        split : true,
        collapsible : true,
        animCollapse : true,
        margins : '0 0 0 0',
        items : []
      })
      me.callParent();
    }
})
