Ext.define('Tn.admin.store.Configs', {
  extend   : 'Ext.data.TreeStore',
  model : 'Tn.admin.model.Config',
//  autoLoad : true,    // cannot autoload, because we need the controller id as param
  proxy    : {
      type   : 'ajax',
      api    : {
          read : GLOBAL_STANDALONE && Ext.Loader.getPath('Tn.admin.store.Configs') + 'on' || GLOBAL_USER_PROFILE.apiUrl + '_module/administration/_action/loadControllerActions'
      },
      reader : {
          type : 'json',
          root : 'data'
      },
  }
})
