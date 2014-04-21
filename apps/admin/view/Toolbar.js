Ext.define('Tn.admin.view.Toolbar', {
    extend   : 'Ext.toolbar.Toolbar',
    alias    : 'widget.admin_toolbar',

    initComponent : function () {
      var me = this;
      Ext.apply(me, {
        items: [
        {
            xtype : 'button', // default for Toolbars
            text : '后退',
            iconCls : 'db-icn-back'
        },
        {
            xtype : 'button', // default for Toolbars
            text : '前进',
            iconCls : 'db-icn-forward'
        },
        {
            xtype : 'button', // default for Toolbars
            text : '向上',
            iconCls : 'db-icn-up'
        },
        '-',
        {
            xtype : 'button', // default for Toolbars
            text : '搜索',
            iconCls : 'db-icn-search'
        },
        '-',
        {
            xtype: 'splitbutton',
            text : '视图',
            iconCls : 'db-icn-views'
        }
        // begin using the right-justified button container
        /*'->', // same as { xtype: 'tbfill' }
        {
            xtype    : 'textfield',
            name     : 'field1',
            emptyText: 'enter search term'
        },
        // add a vertical separator bar between toolbar items
        '-', // same as {xtype: 'tbseparator'} to create Ext.toolbar.Separator
        'text 1', // same as {xtype: 'tbtext', text: 'text1'} to create Ext.toolbar.TextItem
        { xtype: 'tbspacer' },// same as ' ' to create Ext.toolbar.Spacer
        'text 2',
        { xtype: 'tbspacer', width: 50 }, // add a 50px space
        'text 3'*/
        ]
      })
      me.callParent();
    }

})
