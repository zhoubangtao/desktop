Ext.define('Tn.admin.view.Custom', {
    extend   : 'Ext.tree.Panel',
    alias    : 'widget.admin_custom',

    initComponent : function () {
      var me = this;
      var store = Ext.create('Ext.data.TreeStore', {
        root: {
            expanded: true,
            children: [
                { text: "系统设置", leaf: true },
                { text: "系统变量", leaf: true }
                ]
            }
      });
      Ext.apply(me, {
        title : '一般功能',
        store: store,
        rootVisible: false
      })
      me.callParent();
    }
})
