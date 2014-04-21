Ext.define('Tn.admin.view.OperationManager', {
    extend   : 'Ext.panel.Panel',
    alias    : 'widget.admin_om',

    initComponent : function () {
      var me = this;
      Ext.apply(me, {
        title : '操作管理',
        split : true,
        collapsible : true,
        animCollapse : true,
        margins : '0 0 0 0',
        items : []
      })
      me.callParent();
    }
})
