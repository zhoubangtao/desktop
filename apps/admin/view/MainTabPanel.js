Ext.define('Tn.admin.view.MainTabPanel', {
    extend   : 'Ext.tab.Panel',
    alias    : 'widget.admin_maintabpanel',

    initComponent : function () {
      var me = this;
      Ext.apply(me, {
        region : 'center',
        split : true,
        header : false,
        width : '100%',
        height : '100%',
        collapsible : true,
        animCollapse : true,
        margins : '0 0 0 0',
        items: [{
            title: ''
        },{
          xtype : 'admin_systemconfig'
        }]
      })
      me.callParent();
    }
})
