Ext.define("Tn.util.Utility", {
  singleton: true,
  /**
   * get parent path of the className
   * @param {} className
   * @return {}
   */
  getPath : function(className) {
    var jsPath = Ext.Loader.getPath(className);
    var idx = jsPath.lastIndexOf("/");
    return jsPath.substring(0, idx);
  },

  loadCssFile : function (cssFilePath) {
    Ext.core.DomHelper.append(Ext.getHead(), {tag: 'link', type: 'text/css', rel: 'stylesheet', href: cssFilePath});
  },

  isBlank : function(value) {
    var result = false;

    if(value == 'undefined' || value == undefined || value == null || value == '' || value == ' '){
      result = true;
    }

    return result;
  },

  createUUID : function(){
      // http://www.ietf.org/rfc/rfc4122.txt
      var s = [];
      var hexDigits = "0123456789abcdef";
      for (var i = 0; i < 36; i++) {
          s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
      s[8] = s[13] = s[18] = s[23] = "-";

      var uuid = s.join("");
      return uuid;
  },

    getXmlDoc : function () {
      try { //Internet Explorer
        var xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
      } catch(e) {
        try { //Firefox, Mozilla, Opera, etc.
            xmlDoc=document.implementation.createDocument("","",null);
        } catch(e) {
            alert(e.message)
        }
      }

      try {
          xmlDoc.async=false;
      } catch(e) {
        alert(e.message)
      }
      return xmlDoc;
    },

    getXmlDoc2 : function() {
      try { //Internet Explorer
          var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
          xmlDoc.async = "false";
          xmlDoc.loadXML(text);
      } catch(e) {
        try { //Firefox, Mozilla, Opera, etc.
            var parser = new DOMParser();
            xmlDoc = parser.parseFromString("","text/xml");
        } catch(e) {
            alert(e.message);
        }
      }
      return xmlDoc;
    },
})
