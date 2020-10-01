tw.local.teamName = tw.local.data;
tw.local.teamUsers = new tw.object.listOf.NameValuePair();

var nvp = null;
var user =null;

var reqTeam = tw.system.org.findTeamByName(tw.local.teamName);
var allUsers = reqTeam.allUsers;

var len = allUsers.length;

for(var i=0; i< len; i++) {
    nvp = new tw.object.NameValuePair();
   
    nvp.name = allUsers[i].name;
    nvp.value = allUsers[i].fullName;
    
    tw.local.teamUsers[i] = nvp;
 
}

tw.local.results = tw.local.teamUsers;
