Ext.define('Tn.admin.model.Config', {
  extend: 'Ext.data.Model',
  fields : [
    {name : 'id',type : 'int'},
    {name : 'name', type : 'string'},
    {name : 'value', type : 'string'},
    {name : 'type', type : 'string'},
    {name : 'comment', type : 'string'}
  ]
})
