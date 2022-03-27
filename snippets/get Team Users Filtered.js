tw.local.teamName = tw.local.data;
tw.local.teamUsers = new tw.object.listOf.NameValuePair();

var nvp = null;
var user =null;

var allUsers = null;

if (tw.local.teamName == "approvers") {

	var reqTeam = tw.system.org.findTeamByName(tw.local.teamName);
	allUsers = reqTeam.allUsers;
}
else {

	allUsers = tw.system.org.findRoleByName(tw.local.teamName).allUsers;
}

var len = allUsers.length;

for(var i=0; i< len; i++) {
    nvp = new tw.object.NameValuePair();
   
    nvp.name = allUsers[i].name;
    nvp.value = allUsers[i].fullName;
    
    tw.local.teamUsers[i] = nvp;
 
}

tw.local.results = tw.local.teamUsers;
