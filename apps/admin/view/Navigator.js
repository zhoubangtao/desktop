Ext.define('Tn.admin.view.Navigator', {
    extend   : 'Ext.panel.Panel',
    alias    : 'widget.admin_navigator',

    initComponent : function () {
      var me = this;
      Ext.apply(me, {
        region : 'west',
        title : '导航栏',
        split : true,
        width : 200,
        minWidth : 175,
        maxWidth : 400,
        collapsible : true,
        animCollapse : true,
        margins : '0 0 0 0',
        layout : 'accordion',
        items : [{
          xtype : 'admin_custom'
        }, {
          xtype : 'admin_privilege'
        }]
      })
      me.callParent();
    }
})
