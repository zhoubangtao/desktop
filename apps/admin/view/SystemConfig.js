Ext.define('Tn.admin.view.SystemConfig', {
    extend   : 'Ext.tree.Panel',
    alias    : 'widget.admin_systemconfig',

    initComponent : function () {
      var me = this;
      var store = Ext.create('Tn.admin.store.Configs');
      Ext.apply(me, {
        title : '系统配置',
        split : true,
        collapsible : true,
        animCollapse : true,
        margins : '0 0 0 0',
        closable : true,
        useArrows: true,
        rootVisible: false,
        store: store,
        //the 'columns' property is now 'headers'
        columns: [{
            xtype: 'treecolumn', //this is so we know which column will show the tree
            text: 'ID',
            flex: 2,
            sortable: true,
            dataIndex: 'id'
        },{
            xtype: 'treecolumn', //this is so we know which column will show the tree
            text: '键',
            flex: 2,
            sortable: true,
            dataIndex: 'name'
        },{
            xtype: 'treecolumn', //this is so we know which column will show the tree
            text: '值',
            flex: 2,
            sortable: true,
            dataIndex: 'value'
        },{
            text: '备注',
            flex: 1,
            dataIndex: 'comment',
            sortable: true
        }]
      })
      me.callParent();
    }
})
