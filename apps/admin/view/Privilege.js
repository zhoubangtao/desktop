Ext.define('Tn.admin.view.Privilege', {
    extend   : 'Ext.tree.Panel',
    alias    : 'widget.admin_privilege',

    initComponent : function () {
      var me = this;
      var store = Ext.create('Ext.data.TreeStore', {
        root: {
            expanded: true,
            children: [
                { text: "资源管理", leaf: true },
                { text: "操作管理", leaf: true },
                { text: "权限管理", leaf: true },
                { text: "角色管理", leaf: true },
                { text: "用户管理", leaf: true },
                { text: "组管理", leaf: true }
                ]
            }
      });
      Ext.apply(me, {
        title : '授权管理',
        store: store,
        rootVisible: false
      })
      me.callParent();
    }
})
